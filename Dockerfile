FROM richarvey/nginx-php-fpm:1.7.2

COPY . .

/bin/sh -c sudo apt install php8.0-cli php8.0-common php8.0-imap php8.0-redis php8.0-xml php8.0-zip php8.0-mbstring


# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["/start.sh"]
