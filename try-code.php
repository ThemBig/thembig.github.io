<?php

$data['author'] = "Jane Doe";

header('Content-Type: application/json');
echo json_encode($data);

?>
