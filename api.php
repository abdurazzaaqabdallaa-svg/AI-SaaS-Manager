<?php
/**
 * api.php - Backend Proxy for Gemini AI
 * Koodiin kun API Key kee namoota jalaa dhoksa.
 */

// 1. CORS Headers (Akka birawuzeriin koodii kana hin dhowwine)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// OPTIONS request qofa yoo ta'e achumatti dhaabi
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// 2. API KEY KEE ASITTI QOFA GALCHI
// Google AI Studio irraa kan fudhatte asitti jijjiiri
$GEMINI_API_KEY = "AIzaSyAfBGN08EY_gBrKXWgI_NwN2ebS_9-1FsU"; 

// 3. Data Frontend (index.html) irraa dhufe fudhu
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);
$userPrompt = $input['prompt'] ?? '';

// Yoo prompt hin jirre deebii dogoggoraa kenni
if (empty($userPrompt)) {
    echo json_encode(["error" => "Prompt is empty"]);
    exit;
}

// 4. Gemini API URL qopheessi
$apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" . $GEMINI_API_KEY;

// 5. Data Google-f ergamu (JSON)
$postData = [
    "contents" => [
        [
            "parts" => [
                ["text" => $userPrompt]
            ]
        ]
    ]
];

// 6. CURL fayyadamanii Google waamuu
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);
