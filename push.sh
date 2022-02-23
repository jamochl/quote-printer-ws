#!/bin/bash
rsync --chown www-data:www-data -rv --delete css/ *.html *.js root@jamochl.com:/var/www/quote-printer

