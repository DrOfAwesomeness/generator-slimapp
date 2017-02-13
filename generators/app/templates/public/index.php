<?php
require_once "../vendor/autoload.php";
require_once "../init.php";

$app = new \Slim\App();
$app->getContainer()["settings"]["addContentLengthHeader"] = false;
if ($config["Application"]["mode"] == "development") {
    unset($app->getContainer()['errorHandler']);
    Tracy\Debugger::enable();
}

$twigLoader = new Twig_Loader_Filesystem(__DIR__ . "/../app/Views");
$twig = new Twig_Environment($twigLoader, [
    "cache" => ($config["Application"]["mode"] == "production") ? __DIR__."/../tmp/twig_cache" : false
]);

$app->getContainer()["twig"] = $twig;

require_once "../config/routes.php";
$app->run();