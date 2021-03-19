<?php
$name = NULL;
if (isset($_POST['name']) && strlen($_POST['name']) > 0 && strlen($_POST['name']) < 75) {
	$name = $_POST['name'];
} else {
	throwErrorAndExit("Please provide a valid name.");
}

$email = NULL;

if (isset($_POST['email']) && strlen($_POST['email']) > 0 && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	$email = $_POST['email'];
} else {
	throwErrorAndExit("Please provide a valid email.");
}

$message = NULL;

if (isset($_POST['message']) && strlen($_POST['message']) > 0 && strlen($_POST['name']) < 1000) {
	$message = $_POST['message'];
} else {
	throwErrorAndExit("Please provide a valid message.");
}

$subject = "{$name} - Filled Out Contact Form";
// $recipient = "rhysthomas1994@gmail.com";
$recipient = "test-0projsroe@srv1.mail-tester.com";
$formcontent = "<b>From:</b> {$name}";
$formcontent .= "<br><br><b>Email:</b> {$email}";
$formcontent .= "<br><br><b>Message:</b> {$message}";
$headers = "From: {$name} < {$email} >\n";
$headers .='Reply-To: '. $email . "\r\n" ;
$headers .='X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

mail($recipient, $subject, $formcontent, $headers) || throwErrorAndExit("There was an issue submitting your contact request. Please check your information and try again later.");

header('Content-Type: application/json; charset=UTF-8');

echo json_encode(array('error' => null));

exit;

function throwErrorAndExit($errorMessage) {
	ob_clean();
	header('HTTP/1.1 500 ' . $errorMessage);
	header('Content-Type: application/json; charset=UTF-8');
	echo json_encode(array('error' => $errorMessage));
	exit;
}