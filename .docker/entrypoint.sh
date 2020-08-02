#!/bin/bash

#On error no such file entrypoint.sh, execute in terminal - dos2unix .docker\entrypoint.sh

#FRONT-END
#configuração para node não ir na internet quando build container
npm config set cache /var/www/.npm-cache --global

#quando build install dinamico
cd /var/www/frontend && npm install && npm run devM

rm -rf /public/build && cd ..

#BACK-END
cd backend

chmod 755 storage/app chown && www-data:www-data storage/app

if [! -f ".env"]; then
cp .env.example .env
fi

if [! -f ".env.testing"]; then
cp .env.testing.example .env.testing

fi

composer install
php artisan cache:clear
php artisan config:clear
php artisan key:generate

php artisan storage:link

php-fpm
