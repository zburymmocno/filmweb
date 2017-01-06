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
		$status = new JSendResponse('fail', array("message"=>"Błąd bazy danych"));
	echo json_encode($status);

}elseif(preg_match("/^".$pathreg."\/films\/[0-9]{1,}$/", $uri, $match)) {
	preg_match('!\d+!', $uri, $matches);
	$result = $obj->listMovie($matches[0]);

	$tab = array();

	if(pg_fetch_all($result)){

		$row = pg_fetch_assoc($result);
		$row['genres'] = pg_fetch_all($obj->listGenres($row['film_id']));
		$row['countries'] = pg_fetch_all($obj->listCOuntries($row['film_id']));
		$tab = $row;
		$status = new JSendResponse('success', $row);
	}else{ 
		$status = new JSendResponse('fail', array("message"=>"Błąd bazy danych"));
	}
	echo json_encode($status);

}elseif($uri === $path.'/films/add'){
	//$data = json_decode($_POST, true);
	//echo $_POST["tytul"];
	//print_r($_POST);
	    
	if($obj->addMovie($_POST)){ // za $_POST ma isc $data
		$status = new JSendResponse('success', array("message"=>"Film dodano poprawnie"));
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Nie dodano filmu"));		
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
	$obj->addUser($_POST);  
}elseif($uri === $path.'/users/login'){
	if($obj->login($_POST)){
		$status = new JSendResponse('success', array("message"=>"Logowanie poprawne"));
	}
	else{
		$status = new JSendResponse('fail', array("message"=>"Błąd logowania"));		
	}
	echo json_encode($status);
}else{
	header('HTTP/1.1 404 Not Found');
	echo '<html><body><h1>Page Not Found</h1></body></html>';
}


?>

