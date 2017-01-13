<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Include config.php
require_once('config.php');
require_once('JSendResponse.php');


//$obj = new Model("tantor.db.elephantsql.com", "5432", "hxrnzqnh", "hxrnzqnh", "xMhZTJrVOz9zI6MU46M1sGFfyE1JkBlf");
$obj = new Model("localhost", "5432", "filmweb", "postgres", "postgres");

$path = '/filmweb/api/index.php';
$pathreg = '\/filmweb\/api\/index.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);


if($uri === $path.'/films') {
	$result =  $obj->listall();
	if(pg_fetch_all($result)){
		$tab = array();
		$iter = 0;
		while ($row = pg_fetch_assoc($result)) {
			$row['gatunki'] = pg_fetch_all($obj->listGenres($row['film_id']));
			$row['kraje'] = pg_fetch_all($obj->listCOuntries($row['film_id']));
			$tab[$iter] = $row;
			$iter++;
		}
		$status = new JSendResponse('success', $tab);
	}else 
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
	echo json_encode($status);

}elseif($uri === $path.'/countries') {
	$result = $obj->listAllCountries();
	$tab = pg_fetch_all($result);
	if($tab){
		$status = new JSendResponse('success', $tab);
	}else 
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
	echo json_encode($status);

}elseif($uri === $path.'/genres') {
	$result = $obj->listAllGenres();
	$tab = pg_fetch_all($result);
	if($tab){
		$status = new JSendResponse('success', $tab);
	}else 
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
	echo json_encode($status);

}elseif(preg_match("/^".$pathreg."\/films\/[0-9]{1,}$/", $uri, $match)) {
	preg_match('!\d+!', $uri, $matches);
	$result = $obj->listMovie($matches[0]);

	$tab = array();

	if(pg_fetch_all($result)){

		$row = pg_fetch_assoc($result);
		$row['gatunki'] = pg_fetch_all($obj->listGenres($row['film_id']));
		$row['kraje'] = pg_fetch_all($obj->listCOuntries($row['film_id']));
		$tab = $row;
		$status = new JSendResponse('success', $row);
	}else{ 
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
	}
	echo json_encode($status);

}elseif($uri === $path.'/films/add'){
	$data_from_json = json_decode(file_get_contents('php://input'), true);

	$response = $obj->addMovie($data_from_json);	

	if($response == 1){ 
		$status = new JSendResponse('success', array("message"=>"Film dodano poprawnie"));
	}
	elseif($response == 0){
		$status = new JSendResponse('error', array("message"=>"Film o takim tytule juz istnieje"), 'Not cool.');		
	}
	elseif($response == 2){
		$status = new JSendResponse('error', array("message"=>"Błąd walidacji"), 'Not cool.');		
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
	}
	echo json_encode($status);
}elseif($uri === $path.'/countries/add'){

	$response = $obj->addCountry($_POST);

	if($response == 1){ // za $_POST ma isc $data
		$status = new JSendResponse('success', array("message"=>"Kraj dodano poprawnie"));
	}
	elseif($response == 0){
		$status = new JSendResponse('error', array("message"=>"Taki kraj już istnieje"), 'Not cool.');		
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));		
	}
	echo json_encode($status);
}elseif($uri === $path.'/genres/add'){

	$response = $obj->addGenre($_POST);

	if($response == 1){ // za $_POST ma isc $data
		$status = new JSendResponse('success', array("message"=>"Gatunek dodano poprawnie"));
	}
	elseif($response == 0){
		$status = new JSendResponse('error', array("message"=>"Taki gatunek już istnieje"), 'Not cool.');		
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));		
	}
	echo json_encode($status);
}elseif(preg_match("/^".$pathreg."\/films\/remove\/[0-9]{1,}$/", $uri, $match)){
	preg_match('!\d+!', $uri, $matches);
//	echo $matches[0];

	if($obj->removeMovie($matches[0])){
		$status = new JSendResponse('success', array("message"=>"Usunięto film"));
	}
	else{
        $status = new JSendResponse('error', array("message"=>"Nie udalo sie usunac filmu"), 'Not cool.');
	}
	echo json_encode($status); 
}elseif($uri === $path.'/users/add'){
	$data_from_json = json_decode(file_get_contents('php://input'), true);

	$response = $obj->addUser($data_from_json);	

	if(is_array($response)){
		$status = new JSendResponse('success', $response);
	}
	elseif($response == 0){
		$status = new JSendResponse('error', array("message"=>"Użytkownik o podanym nicku już istnieje"), 'Not cool.');		
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));		
	}
	echo json_encode($status); 
}elseif($uri === $path.'/users/login'){
	$data_from_json = json_decode(file_get_contents('php://input'), true);

	$response = $obj->login($data_from_json);	

	if(is_array($response)){
		$status = new JSendResponse('success', $response);
	}
	elseif($response == 0){
		$status = new JSendResponse('error', array("message"=>"Błędne dane"), 'Not cool.');		
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));		
	}
	echo json_encode($status);
}elseif(preg_match("/^".$pathreg."\/films\/edit\/[0-9]{1,}$/", $uri, $match)) {
	preg_match('!\d+!', $uri, $matches);

	$data_from_json = json_decode(file_get_contents('php://input'), true);
	$response = $obj->updateMovie($matches[0], $data_from_json);

	if($response == 1){
		$status = new JSendResponse('success', array("message"=>"Edycja filmu przebiegła pomyślnie"));
	}	
	elseif($response == 2){
		$status = new JSendResponse('error', array("message"=>"Błąd walidacji"), 'Not cool.');		
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
	}
	echo json_encode($status);


}elseif($uri === $path.'/users/islogged') {

	$response = $obj->islogged();

	if(is_array($response)){
		$status = new JSendResponse('success', $response);
	}	
	else{
		$status = new JSendResponse('error', array("message"=>"Nie jesteś zalogowany"), 'Not cool.');		
	}
	echo json_encode($status);


}
elseif($uri === $path.'/users/logout') {

	$response = $obj->logout();

	if($response){
		$status = new JSendResponse('success', array("message"=>"Sesja została zamknięta pomyślnie"));
	}	
	else{
		$status = new JSendResponse('error', array("message"=>"Sesja nie została zamknięta"), 'Not cool.');		
	}
	echo json_encode($status);


}elseif($uri === $path.'/filteredfilms') {
    $data_from_json = json_decode(file_get_contents('php://input'), true);
//print_r($data_from_json);
//echo $_POST['gatunek'];
    $result =  $obj->filteredlist($data_from_json);
    if(pg_fetch_all($result)){
        $tab = array();
        $iter = 0;
        while ($row = pg_fetch_assoc($result)) {
            $row['gatunki'] = pg_fetch_all($obj->listGenres($row['film_id']));
            $row['kraje'] = pg_fetch_all($obj->listCOuntries($row['film_id']));
            $tab[$iter] = $row;
            $iter++;
        }
        $status = new JSendResponse('success', $tab);
    }else {
        $status = new JSendResponse('error', array("message"=>"Nie znaleziono rekordów"), 'Not cool.');
    }

    echo json_encode($status);

}elseif(preg_match("/^".$pathreg."\/films\/[0-9]{1,}\/rate$/", $uri, $match)){
    preg_match('!\d+!', $uri, $matches);

    $data_from_json = json_decode(file_get_contents('php://input'), true);
    print_r($data_from_json);
    $result = $obj->rate($matches[0], $data_from_json);

    if($result==1){
        $status = new JSendResponse('success', array("message"=>"Film zostal oceniony poprawnie"));
    }
    elseif($result==0){
        $status = new JSendResponse('error', array("message"=>"Nie udalo sie ocenic filmu"), 'Not cool.');
    }
    else{
        $status = new JSendResponse('fail', array("message"=>"Błąd serwera"));
    }
    echo json_encode($status);
}else{
	header('HTTP/1.1 404 Not Found');
	echo '<html><body><h1>Page Not Found</h1></body></html>';
}


?>


