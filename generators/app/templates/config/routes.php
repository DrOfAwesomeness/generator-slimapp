<?php

function registerRoute($method, $path, $controller, $function)
{
    /** @var \Slim\App $app */
    global $app;
    $controller_base = "\\<%= projectNs %>\\Controllers\\";
    $app->map([$method], $path, $controller_base.$controller.":".$function);
}

function setupRoutes()
{
    registerRoute("GET", "/", "HelloController", "index");
}
