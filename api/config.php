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
		$result = pg_query("SELECT * FROM film WHERE film_id = '$id'");
		return $result;
	}

	function addMovie($data){
		pg_query("BEGIN") or die("Could not start transaction\n");

		$res1 = pg_query("INSERT into film (tytul, rok_premiery, opis) values ('" . $data['tytul'] . "' , '" . $data['rok_premiery'] . "', '" . $data['opis'] . "' )");

		$f_id = pg_fetch_array( pg_query("SELECT film_id from film WHERE tytul = '" . $data['tytul'] . "'"))['film_id'];

		$res2 = true;
		foreach ($data['gatunki'] as &$value) {
		    	$g_id = pg_fetch_array( pg_query("SELECT gatunek_id from gatunek WHERE nazwa = '" . $value . "'"))['gatunek_id'];
			if(!pg_query("INSERT into film_gatunek values ('$f_id' , '$g_id' )")){
				$res2 = false;
			}
		}

		$res3 = true;
		foreach ($data['kraje'] as &$value) {
		    	$k_id = pg_fetch_array( pg_query("SELECT kraj_id from kraj WHERE nazwa = '" . $value . "'"))['kraj_id'];

			if(!pg_query("INSERT into film_kraj values ('$f_id' , '$k_id' )")){
				$res3 = false;
			}
		}

		$res4 = pg_query("INSERT into film_zwiastun values ('" . $data['url_z'] . "', " . $f_id . ")");
		$res5 = pg_query("INSERT into film_plakat values ('" . $data['url_p'] . "', " . $f_id . ")");

		if ($res1 and $res2 and $res3 and $res4 and $res5) {
		    	pg_query("COMMIT") or die("Transaction commit failed\n");
			return true;
		} else {
		    	pg_query("ROLLBACK") or die("Transaction rollback failed\n");
			return false;
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
		$encodedpass = md5($data['haslo']);
		pg_query("INSERT into uzytkownicy (nick, haslo, email) values ('" . $data['nick'] . "' , '" . $encodedpass . "', '" . $data['email'] . "' )");
	}

	function login($data){

		$res = pg_fetch_array(pg_query("SELECT * FROM uzytkownicy WHERE  nick = '" . $data['nick'] . "' AND haslo = '" . md5($data['haslo']) . "'"));
		if ($res){
        		session_start();
        		$_SESSION["ident"] = $data['nick'];
			return array("nick"=>$data['nick']);
		}
		else {
			return false;
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
			return false;
		}
	}

	function addGenre($data){
//echo $data['nazwa'];
//echo pg_fetch_array(pg_query("SELECT * from gatunek WHERE nazwa = '". $data['nazwa'] ."'"))['nazwa'];
echo $data['nazwa'];
		if(pg_fetch_array(pg_query("SELECT * from gatunek WHERE nazwa = '". $data['nazwa'] ."'"))){
			return 0;
		}
		elseif(pg_query("INSERT into gatunek (nazwa) values ('" . $data['nazwa'] . "' )")){
			return 1;
		}
		else{
			return false;
		}
	}

	function updateMovie($id, $data){
		$result = pg_query("UPDATE film SET tytul='" . $data['tytul'] . "', rok_premiery='" . $data['rok_premiery'] . "', opis='" . $data['opis'] . "' WHERE film_id = " . $id);

		$result2 = pg_query("DELETE FROM film_gatunek where film_id = " . $id);
		$result3 = pg_query("DELETE FROM film_kraj where film_id = " . $id);

		$res2 = true;
		foreach ($data['gatunki'] as &$value) {
		    	$g_id = pg_fetch_array( pg_query("SELECT gatunek_id from gatunek WHERE nazwa = '" . $value . "'"))['gatunek_id'];

			if(!pg_query("INSERT into film_gatunek values ('$id' , '$g_id' )")){
				$res2 = false;
			}
		}

		$res3 = true;
print_r($data['kraje']);
		foreach ($data['kraje'] as &$value) {
		    	$k_id = pg_fetch_array( pg_query("SELECT kraj_id from kraj WHERE nazwa = '" . $value . "'"))['kraj_id'];
echo $k_id;
			if(!pg_query("INSERT into film_kraj values ('$id' , '$k_id' )")){
				$res3 = false;
			}
		}

		return 1;
		
		//$res1 = pg_query("INSERT into film (tytul, rok_premiery, opis) values ('" . $data['tytul'] . "' , '" . $data['rok_premiery'] . "', '" . $data['opis'] . "' )");
		//return (pg_query("DELETE FROM film WHERE film_id =" . $id));
	}

}


?>



