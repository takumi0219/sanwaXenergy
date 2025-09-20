<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed. This endpoint only accepts POST requests.']);
    exit;
}
header('Content-Type: application/json; charset=UTF-8');

const NEWS_FILE = '/tmp/news.json';

const UPLOAD_DIR = './uploads/';

function send_error($message, $code = 400) {
    http_response_code($code);
    echo json_encode(['status' => 'error', 'message' => $message]);
    exit;
}

$category = $_POST['category'] ?? '';
$ttl = $_POST['ttl'] ?? '';
$content = $_POST['content'] ?? '';
if (empty($category) || empty($ttl) || empty($content)) {
    send_error('All text fields are required.');
}
if (!is_dir(UPLOAD_DIR)) {
    if (!mkdir(UPLOAD_DIR, 0755, true)) {
        send_error('Failed to create upload directory. Vercel does not support writing to the file system.', 500);
    }
}

$img_path = null;
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $file_tmp_path = $_FILES['image']['tmp_name'];
    $file_extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
    $file_name = uniqid() . '.' . $file_extension;
    $dest_path = UPLOAD_DIR . $file_name;

    if (!move_uploaded_file($file_tmp_path, $dest_path)) {
        send_error('Failed to move uploaded file. Vercel does not support writing to the file system.', 500);
    }
    $img_path = './uploads/' . $file_name;
}
if (!file_exists(NEWS_FILE) || filesize(NEWS_FILE) === 0) {
    $newsItems = [];
} else {
    $json = file_get_contents(NEWS_FILE);
    $newsItems = json_decode($json, true);
    if ($newsItems === null) {
        $newsItems = [];
    }
}
$newId = empty($newsItems) ? 1 : end($newsItems)['id'] + 1;
$newNewsItem = [
    'id' => $newId,
    'day' => date('Y.m.d'),
    'category' => htmlspecialchars($category, ENT_QUOTES, 'UTF-8'),
    'ttl' => htmlspecialchars($ttl, ENT_QUOTES, 'UTF-8'),
    'content' => htmlspecialchars($content, ENT_QUOTES, 'UTF-8'),
    'img' => $img_path
];
$newsItems[] = $newNewsItem;
if (file_put_contents(NEWS_FILE, json_encode($newsItems, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)) === false) {
    send_error('Failed to write to file.', 500);
}
echo json_encode(['status' => 'success']);
exit;
?>
