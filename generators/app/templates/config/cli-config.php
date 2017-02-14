<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;

require_once __DIR__."/../init.php";

$helperSet = ConsoleRunner::createHelperSet($em);
$cli = ConsoleRunner::createApplication($helperSet, [
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\DiffCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\ExecuteCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\GenerateCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\MigrateCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\StatusCommand(),
    new \Doctrine\DBAL\Migrations\Tools\Console\Command\VersionCommand()
]);

return $cli->run();