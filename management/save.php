<?php
// Vercelにデプロイする場合、PHPをサーバーレス関数として実行
// このファイルは `api/save.php` として保存する必要があります

// エラー報告を有効にする
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// PHPの実行が許可されていないことを警告する
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed. This endpoint only accepts POST requests.']);
    exit;
}

// ヘッダーを最初に定義
header('Content-Type: application/json; charset=UTF-8');

// Vercelでは、ファイルシステムへの書き込みは一時的であり、永続的なストレージには向きません。
// この例では、`news.json`とアップロードされた画像ファイルを
// 永続的に保存するための解決策として、外部のストレージサービス（例: AWS S3, Google Cloud Storage）
// の使用を検討する必要があります。このスクリプトは、Vercelが一時的にファイルに
// アクセスできるローカルファイルシステムを模倣しています。

const NEWS_FILE = '/tmp/news.json';

// ご要望のファイル構造に合わせてパスを修正
// Vercelのサーバーレス関数は、このディレクトリへの書き込みをサポートしていません
const UPLOAD_DIR = './uploads/';

// エラーハンドリング関数を定義
function send_error($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['status' => 'error', 'message' => $message]);
    exit;
}

// データを受け取る
$category = $_POST['category'] ?? '';
$ttl = $_POST['ttl'] ?? '';
$content = $_POST['content'] ?? '';

// 必須データの存在チェック
if (empty($category) || empty($ttl) || empty($content)) {
    send_error('All text fields are required.');
}

// ディレクトリが存在しない場合は作成
if (!is_dir(UPLOAD_DIR)) {
    // Vercel上では、このmkdirは失敗する可能性が高い
    if (!mkdir(UPLOAD_DIR, 0755, true)) {
        send_error('Failed to create upload directory. Vercel does not support writing to the file system.', 500);
    }
}

// 画像のアップロード処理
$img_path = null;
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $file_tmp_path = $_FILES['image']['tmp_name'];
    $file_extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $file_name = uniqid() . '.' . $file_extension;
    $dest_path = UPLOAD_DIR . $file_name;

    // Vercel上では、このmove_uploaded_fileは失敗する可能性が高い
    if (!move_uploaded_file($file_tmp_path, $dest_path)) {
        send_error('Failed to move uploaded file. Vercel does not support writing to the file system.', 500);
    }
    
    // ご要望のパスに合わせて修正
    $img_path = './uploads/' . $file_name;
}

// ファイルの読み込みと存在チェック
if (!file_exists(NEWS_FILE) || filesize(NEWS_FILE) === 0) {
    $newsItems = [];
} else {
    $json = file_get_contents(NEWS_FILE);
    $newsItems = json_decode($json, true);
    if ($newsItems === null) {
        $newsItems = [];
    }
}

// 新しいIDを生成
$newId = empty($newsItems) ? 1 : end($newsItems)['id'] + 1;

// 新しいニュースデータを配列として作成
$newNewsItem = [
    'id' => $newId,
    'day' => date('Y.m.d'),
    'category' => htmlspecialchars($category, ENT_QUOTES, 'UTF-8'),
    'ttl' => htmlspecialchars($ttl, ENT_QUOTES, 'UTF-8'),
    'content' => htmlspecialchars($content, ENT_QUOTES, 'UTF-8'),
    'img' => $img_path
];

// 新しいニュースをリストに追加
$newsItems[] = $newNewsItem;

// JSON形式でファイルに書き込み
if (file_put_contents(NEWS_FILE, json_encode($newsItems, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)) === false) {
    send_error('Failed to write to file.', 500);
}

// 成功レスポンスを返す
echo json_encode(['status' => 'success']);
exit;
?>
