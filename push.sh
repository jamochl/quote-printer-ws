#!/bin/bash
rsync --chown www-data:www-data -rv --delete public/ root@jamochl.com:/var/www/quote-printer

