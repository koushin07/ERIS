echo "Running composer"
composer install --no-dev --working-dir=/var/www/html
echo "this is the version of your composer"
composer --version

echo "Running npm build..."
npm run build --prefix /var/www/html

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

echo "Seeding..."
php artisan db:seed --force
