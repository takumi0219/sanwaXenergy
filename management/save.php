<?php
// PHPスクリプトの改善
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ヘッダーを最初に定義
header('Content-Type: application/json; charset=UTF-8');

// ファイルパスを定数として定義
const NEWS_FILE = './news.json';
const UPLOAD_DIR = './uploads/'; // このディレクトリにファイルを物理的に保存

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

// 画像のアップロード処理
$img_path = null;
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    // ディレクトリが存在しない場合は作成
    if (!is_dir(UPLOAD_DIR)) {
        if (!mkdir(UPLOAD_DIR, 0755, true)) {
            send_error('Failed to create upload directory.', 500);
        }
    }

    $file_tmp_path = $_FILES['image']['tmp_name'];
    $file_extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $file_name = uniqid() . '.' . $file_extension;
    $dest_path = UPLOAD_DIR . $file_name;

    // ファイルを移動
    if (!move_uploaded_file($file_tmp_path, $dest_path)) {
        send_error('Failed to move uploaded file.', 500);
    }
    
    // ここでニュース詳細ページからアクセスできる正しいパスを設定
    // detail.html (site/news/) から uploads (site/management/uploads/) への相対パス
    $img_path = '../management/uploads/' . $file_name; 
}

// ファイルの読み込みと存在チェック
if (!file_exists(NEWS_FILE) || filesize(NEWS_FILE) === 0) {
    $newsItems = [];
} else {
    $json = file_get_contents(NEWS_FILE);
    $newsItems = json_decode($json, true);

    if ($newsItems === null) {
        unlink(NEWS_FILE);
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
    'img' => $img_path // 更新された正しいパスをJSONに書き込む
];

// 新しいニュースをリストに追加
$newsItems[] = $newNewsItem;

// JSON形式でファイルに書き込み
if (file_put_contents(NEWS_FILE, json_encode($newsItems, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)) === false) {
    if ($img_path && file_exists($img_path)) {
      unlink($img_path);
    }
    send_error('Failed to write to file.', 500);
}

// 成功レスポンスを返す
echo json_encode(['status' => 'success']);
exit;
?>