<?php

class Model

{

	function __construct($host, $port, $dbname, $user, $pass){
		$conn = pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$pass);
		if (!$conn) {
		    echo "An error occured.\n";
		    exit;
		}
	}

	function listCountries($id){
		$result = pg_query("SELECT k.nazwa FROM kraj k JOIN film_kraj fk ON fk.film_id = '" . $id . "' AND k.kraj_id=fk.kraj_id");
		return $result;
	}

	function listGenres($id){
		$result = pg_query("SELECT g.nazwa FROM gatunek g JOIN film_gatunek fg ON fg.film_id = '" . $id . "' AND g.gatunek_id=fg.gatunek_id");
		return $result;
	}

	function listall(){
		$result = pg_query("SELECT f.film_id, f.tytul, f.rok_premiery, f.opis, fp.url as url_p, fz.url as url_z FROM film f LEFT JOIN film_plakat fp ON f.film_id = fp.film_id LEFT JOIN film_zwiastun fz ON f.film_id = fz.film_id");
		return $result;
	}

	function listMovie($id){
		$result = pg_query("SELECT f.film_id, f.tytul, f.rok_premiery, f.opis, fp.url as url_p, fz.url as url_z FROM film f LEFT JOIN film_plakat fp ON f.film_id = fp.film_id LEFT JOIN film_zwiastun fz ON f.film_id = fz.film_id WHERE f.film_id = '$id'");
		return $result;
	}

	function addMovie($data){

		if(pg_fetch_array(pg_query("SELECT * from film WHERE tytul = '". $data['tytul'] ."'"))){
			return 0;
		}

		pg_query("BEGIN") or die("Could not start transaction\n");

		$res1 = pg_query("INSERT into film (tytul, rok_premiery, opis) values ('" . $data['tytul'] . "' , '" . $data['rok_premiery'] . "', '" . $data['opis'] . "' )");

		$f_id = pg_fetch_array( pg_query("SELECT film_id from film WHERE tytul = '" . $data['tytul'] . "'"))['film_id'];

		$res2 = true;
		foreach ($data['gatunki'] as &$value) {

		    	$g_id = pg_fetch_array( pg_query("SELECT gatunek_id from gatunek WHERE nazwa = '" . $value['nazwa'] . "'"))['gatunek_id'];
			if(!pg_query("INSERT into film_gatunek values ('$f_id' , '$g_id' )")){
				$res2 = false;
			}
		}

		$res3 = true;
		foreach ($data['kraje'] as &$value) {
		    	$k_id = pg_fetch_array( pg_query("SELECT kraj_id from kraj WHERE nazwa = '" . $value['nazwa'] . "'"))['kraj_id'];

			if(!pg_query("INSERT into film_kraj values ('$f_id' , '$k_id' )")){
				$res3 = false;
			}
		}

		$res4 = pg_query("INSERT into film_zwiastun values ('" . $data['url_z'] . "', " . $f_id . ")");
		$res5 = pg_query("INSERT into film_plakat values ('" . $data['url_p'] . "', " . $f_id . ")");

		if ($res1 and $res2 and $res3 and $res4 and $res5) {
		    	pg_query("COMMIT") or die("Transaction commit failed\n");
			return 1;
		} else {
		    	pg_query("ROLLBACK") or die("Transaction rollback failed\n");
			return 2;
		}
	}

	function removeMovie($id){
		$result = pg_query("DELETE FROM film WHERE film_id = " . $id);

		if(!$result){
		  echo "fail";
			return 0;

		} else {
		  echo "Deleted successfully\n";
			return 1;
		}

		//return (pg_query("DELETE FROM film WHERE film_id =" . $id));
	}

	function addUser($data){

		if(pg_fetch_array(pg_query("SELECT * from uzytkownicy WHERE nick = '". $data['nick'] ."'"))){
			return 0;
		}

		$encodedpass = md5($data['haslo']);

		if (pg_query("INSERT into uzytkownicy (nick, haslo, email) values ('" . $data['nick'] . "' , '" . $encodedpass . "', '" . $data['email'] . "' )")) {
			return array("nick"=>$data['nick']);
		} else {
			return 2;
		}
	}

	function login($data){

		$res = pg_fetch_array(pg_query("SELECT * FROM uzytkownicy WHERE  nick = '" . $data['nick'] . "' AND haslo = '" . md5($data['haslo']) . "'"));

		if ($res){
			$privilege = pg_fetch_array(pg_query("SELECT * from uzytkownicy WHERE nick = '". $data['nick'] ."'"))['admin'];
        		session_start();
			$_SESSION["ident"] = $data['nick'];
			
			if($privilege=="YES"){
				$_SESSION['privileges'] = array("edit"=>1, "add"=>1);
				return array("nick"=>$data['nick'], "privileges"=>$_SESSION['privileges']);
			}
			else{
				$_SESSION['privileges'] = array("edit"=>0, "add"=>0);
				return array("nick"=>$data['nick'], "privileges"=>$_SESSION['privileges']);
			}
		}
		else {
			return 0;
		}
	}

	function listAllCountries(){
		$result = pg_query("SELECT nazwa FROM kraj");
		return $result;
	}

	function listAllGenres(){
		$result = pg_query("SELECT nazwa FROM gatunek");
		return $result;
	}

	function addCountry($data){

		if(pg_fetch_array(pg_query("SELECT * from kraj WHERE nazwa = '". $data['nazwa'] ."'"))){
			return 0;
		}
		elseif(pg_query("INSERT into kraj (nazwa) values ('" . $data['nazwa'] . "' )")){
			return 1;
		}
		else{
			return 2;
		}
	}

	function addGenre($data){
		if(pg_fetch_array(pg_query("SELECT * from gatunek WHERE nazwa = '". $data['nazwa'] ."'"))){
			return 0;
		}
		elseif(pg_query("INSERT into gatunek (nazwa) values ('" . $data['nazwa'] . "' )")){
			return 1;
		}
		else{
			return 2;
		}
	}

	function updateMovie($id, $data){

		pg_query("BEGIN") or die("Could not start transaction\n");

		$res1 = pg_query("UPDATE film SET tytul='" . $data['tytul'] . "', rok_premiery='" . $data['rok_premiery'] . "', opis='" . $data['opis'] . "' WHERE film_id = " . $id);

		$result2 = pg_query("DELETE FROM film_gatunek where film_id = " . $id);
		$result3 = pg_query("DELETE FROM film_kraj where film_id = " . $id);

		$res2 = true;
		foreach ($data['gatunki'] as &$value) {
		    	$g_id = pg_fetch_array( pg_query("SELECT gatunek_id from gatunek WHERE nazwa = '" . $value['nazwa'] . "'"))['gatunek_id'];

			if(!pg_query("INSERT into film_gatunek values ('$id' , '$g_id' )")){
				$res2 = false;
			}
		}

		$res3 = true;
		foreach ($data['kraje'] as &$value) {
		    	$k_id = pg_fetch_array( pg_query("SELECT kraj_id from kraj WHERE nazwa = '" . $value['nazwa'] . "'"))['kraj_id'];

			if(!pg_query("INSERT into film_kraj values ('$id' , '$k_id' )")){
				$res3 = false;
			}
		}

		$res4 = pg_query("UPDATE film_zwiastun SET url='" . $data['url_z'] . "', film_id='" . $id . "' WHERE film_id = " . $id);
		$res5 = pg_query("UPDATE film_plakat SET url='" . $data['url_p'] . "', film_id='" . $id . "' WHERE film_id = " . $id);


		if ($res1 and $res2 and $res3 and $res4 and $res5) {
		    	pg_query("COMMIT") or die("Transaction commit failed\n");
			return 1;
		} else {
		    	pg_query("ROLLBACK") or die("Transaction rollback failed\n");
			return 2;
		}
		
	}

	function islogged(){
		session_start();

		if ($_SESSION['ident']){
			return array("nick"=>$_SESSION["ident"], "privileges"=>$_SESSION['privileges']);
		}
		return 0;
	}

}


?>



