echo "Running composer"
composer install --no-dev --working-dir=/var/www/html
echo "this is the version of your composer"
composer --version

echo "npm install"
npm install 

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force
