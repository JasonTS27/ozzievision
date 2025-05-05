<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
   $homeCountry = htmlspecialchars($_GET["homeCountry"]);
   $points12 = htmlspecialchars($_GET["points12"]);
   $points10 = htmlspecialchars($_GET["points10"]);
   $points8 = htmlspecialchars($_GET["points8"]);
   $points7 = htmlspecialchars($_GET["points7"]);
   $points6 = htmlspecialchars($_GET["points6"]);
   $points5 = htmlspecialchars($_GET["points5"]);
   $points4 = htmlspecialchars($_GET["points4"]);
   $points3 = htmlspecialchars($_GET["points3"]);
   $points2 = htmlspecialchars($_GET["points2"]);
   $points1 = htmlspecialchars($_GET["points1"]);
   echo "for the country";
   echo "<br>";
   echo $homeCountry;
   cho "<br>";
   echo "these are the submitted countries:";
   cho "<br>";
   echo $points12;
   echo $points10;
   echo $points8;
   echo $points7;
   echo $points6;
   echo $points5;
   echo $points4;
   echo $points3;
   echo $points2;
   echo $points1;
}
