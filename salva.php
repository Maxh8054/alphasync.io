<?php
header("Access-Control-Allow-Origin: *");
$f="dump.json";
$j=json_decode(file_get_contents($f),1)??[];
if(count($_FILES)){$n=uniqid().".jpg";move_uploaded_file($_FILES["selfie"]["tmp_name"],$n);$j[]=["t"=>"selfie","v"=>$n];}
else{$p=json_decode(file_get_contents("php://input"),1);if($p)$j[]=$p;}
file_put_contents($f,json_encode($j,JSON_UNESCAPED_UNICODE));
?>
