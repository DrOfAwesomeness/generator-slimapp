<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;

require_once __DIR__."/../init.php";

return ConsoleRunner::createHelperSet($em);
