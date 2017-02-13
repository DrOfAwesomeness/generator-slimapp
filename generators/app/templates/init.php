<?php
require_once "vendor/autoload.php";
$config = parse_ini_file("config.ini", true);

$devMode = ($config["Application"]["mode"] === "development");
$dbConfig = \Doctrine\ORM\Tools\Setup::createAnnotationMetadataConfiguration([__DIR__ . "/app/Models"], $devMode);
$em = \Doctrine\ORM\EntityManager::create([
    "driver" => "pdo_mysql",
    "host" => $config["Database"]["host"],
    "user" => $config["Database"]["user"],
    "password" => $config["Database"]["password"],
    "dbname" => $config["Database"]["database"]

], $dbConfig);
$em->getConfiguration()->addEntityNamespace("models", "\\<=% projectNs %>\\Models");