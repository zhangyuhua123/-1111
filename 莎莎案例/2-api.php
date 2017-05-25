<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/3/18
 * Time: 15:58
 */
$keywords  = $_REQUEST['keywords'];
//从数据看获取结果
$res  = array('我的美丽日记','我的喷雾','我的雅漾','我的SKII');
$res1  = array('你的美丽日记','你的喷雾','你的雅漾','你的SKII');
if($keywords=='你'){
    echo json_encode($res1);
}else{
    echo json_encode($res);
}