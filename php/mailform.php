<?php
$miamail = "webmaster@miosito.com";
$successo = $_POST['successo'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$obj = $_POST['obj']
$msg = $_POST['msg'];
$messaggio = "Nome: " . $nome . "\nEmail: " . $email . "\nTel: " . $tel . "\nobj: " . $obj . "\nMessaggio: " . $msg;
$headers = "From: " . $miamail . "\r\n" . "Reply-To: " . $miamail;
mail($miamail,"Messaggio dal sito",$messaggio,$headers);
header("location: " . $successo);
?>