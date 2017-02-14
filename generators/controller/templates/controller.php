<?php
namespace <%= projectNs %>\Controllers;

use Interop\Container\ContainerInterface;
use Slim\Http\Request;
use Slim\Http\Response;

class <%= controllerName %>
{
    /** @var ContainerInterface $container **/
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function index(Request $request, Response $response)
    {
        return $response->getBody()->write("TODO: Something here");
    }
}
