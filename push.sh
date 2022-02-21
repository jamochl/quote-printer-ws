#!/bin/bash
rsync --chown www-data:www-data -rv --delete css/ index.html index.js root@jamochl.com:/var/www/quote-printer

