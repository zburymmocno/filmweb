<?php
 
// Include config.php
require_once('config.php');
require_once('JSendResponse.php');


$obj = new Model("127.0.0.1", "5432", "filmweb", "postgres", "postgres");

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
		$status = new JSendResponse('error', array("message"=>"Film o takim tytule juz istnieje"), 'Not cool.', 9001);		
	}
	elseif($response == 2){
		$status = new JSendResponse('error', array("message"=>"Błąd walidacji"), 'Not cool.', 9001);		
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
		$status = new JSendResponse('error', array("message"=>"Taki kraj już istnieje"), 'Not cool.', 9001);		
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
	//echo $matches[0];

	if($obj->removeMovie($matches[0])){
		$status = new JSendResponse('success', array("message"=>"Usunięto film"));
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Nie usunięto filmu"));		
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

	if($obj->updateMovie($matches[0], $_POST)){
		$status = new JSendResponse('success', array("message"=>"Edycja filmu przebiegła pomyślnie"));
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd edycji filmu"));		
	}
	echo json_encode($status);

}else{
	header('HTTP/1.1 404 Not Found');
	echo '<html><body><h1>Page Not Found</h1></body></html>';
}


?>


