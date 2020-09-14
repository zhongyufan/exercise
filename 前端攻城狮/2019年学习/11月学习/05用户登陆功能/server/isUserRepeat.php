<?php 
header('Content-Type:application/json');
$isUsername = array_key_exists('username',$_POST); 
$isUserpwd = array_key_exists('userpwd',$_POST); 
$username = $isUsername ? $_POST['username'] : '';
$userpwd = $isUserpwd ? $_POST['userpwd'] : '';

if(!$username){
    $msg = printMsg('参数有误',0);
    echo json_encode($msg);
    exit();
}

function printMsg($msg,$code){
    return array('msg'=>$msg,'code'=>$code);
}

// 记录存储用户的文件路径
$fileStr = __DIR__.'./user.json';

// 读取现存的用户名和密码

$fileStream = fopen($fileStr,'r');

$fileContent = fread($fileStream,filesize($fileStr));
$fileContent_array = $fileContent ? json_decode($fileContent,true) : array();
fclose($fileStream);

// 判断用户名是否有重复的

$isrepeat = false;
$isrepeatpwd = false;
$ok = false;

foreach($fileContent_array as $key=>$val){
    if($val['username'] === $username){
        $isrepeat = true;
        if($val['userpwd'] === $userpwd){
            $isrepeatpwd = true;
            if($isrepeat & $isrepeatpwd){
                $ok = true;
            }
        }
    }
}

if($ok){
    $msg = printMsg('账户可登陆',0);
    echo json_encode($msg);
    exit();
}
if($isrepeat){
    $msg = printMsg('登录名一致',1);
    echo json_encode($msg);
    exit();
}else{
    $msg = printMsg('没有这个账户',2);
    echo json_encode($msg);
    exit();
}
?>
