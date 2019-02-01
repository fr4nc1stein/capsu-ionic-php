<?php
header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

require_once('con.php');

// $full_name = $_POST["full_name"];
// $campus = $_POST["campus"];
// $course = $_POST["course"];
// $birthday = $_POST["birthday"];
// $address = $_POST["address"];

// $post_data = json_encode(array('data' => $_POST), JSON_FORCE_OBJECT);
$postdata = file_get_contents("php://input");



if (isset($postdata)) {
    $request = json_decode($postdata);
    $full_name = filter_var($request->full_name, FILTER_SANITIZE_STRING);
    $campus = filter_var($request->campus, FILTER_SANITIZE_STRING);
    $course = filter_var($request->course, FILTER_SANITIZE_STRING);
    $birthday = filter_var($request->birthday, FILTER_SANITIZE_STRING);
    $address = filter_var($request->address, FILTER_SANITIZE_STRING);

    if($full_name != null ){
        $sql = "INSERT INTO data (full_name, campus, course, birthday, address)
        VALUES ('$full_name', '$campus', '$course', '$birthday', '$address')";
        
            if ($conn->query($sql) === TRUE) {
                $data = (object) [
                    'success' => 'true',
                    'message' => "New Data Added"
                ];
                $results = json_encode(($data), JSON_FORCE_OBJECT);
                echo $results;
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
    }else{
        $data = (object) [
            'success' => 'false',
            'message' => "Name invalid"
        ];
        $results = json_encode(($data), JSON_FORCE_OBJECT);
        echo $results;
    }
    

}
  
?>


