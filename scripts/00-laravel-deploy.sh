#!/usr/bin/env bash
echo "Running composer"
composer self-update --2
composer global require hirak/prestissimo
composer install --optimize-autoloader --no-dev

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

echo "Running seeding ..."
php artisan db:seed