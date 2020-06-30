<?php

sleep(1);
$res = ['a' => '111', 'b' => '222'];
echo json_encode($res,JSON_UNESCAPED_UNICODE);
