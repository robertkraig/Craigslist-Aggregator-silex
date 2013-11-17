#!/bin/sh
echo "Installing System"
mkdir -p cache/data/ cache/compiled
chmod -R 777 cache
echo "Downloading Composer"
wget -nc http://getcomposer.org/composer.phar
echo "Installing Dependencies"
php composer.phar install
echo "building assets css, js"
cd assets && php compile.php
