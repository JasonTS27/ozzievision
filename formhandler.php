<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $homeCountry = htmlspecialchars($_POST["homeCountry"]);
   $points12 = htmlspecialchars($_POST["points12"]);
   $points10 = htmlspecialchars($_POST["points10"]);
   $points8 = htmlspecialchars($_POST["points8"]);
   $points7 = htmlspecialchars($_POST["points7"]);
   $points6 = htmlspecialchars($_POST["points6"]);
   $points5 = htmlspecialchars($_POST["points5"]);
   $points4 = htmlspecialchars($_POST["points4"]);
   $points3 = htmlspecialchars($_POST["points3"]);
   $points2 = htmlspecialchars($_POST["points2"]);
   $points1 = htmlspecialchars($_POST["points1"]);
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
