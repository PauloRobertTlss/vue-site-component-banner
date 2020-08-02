# vue-site-component-banner
FRONTEND - SITE - JSON - BANNER

- Gerar página de boot do SPA (single page application).
```shell
npm run prod --production
```
```shell
$ npm run prod --production

> webpack --config=./webpack-build/webpack.prod.conf.js

Hash: 31ab099ee5bc76c9a747
Version: webpack 3.10.0
Time: 66799ms
                                   Asset     Size  Chunks                    Chunk Names
../build/fonts/element-icons.6f0a763.ttf    11 kB          [emitted]
              ../build/js/vendor.prod.js  1.22 MB       0  [emitted]  [big]  vendor
                 ../build/js/spa.prod.js   434 kB       1  [emitted]  [big]  spa
            ../build/js/manifest.prod.js   1.4 kB       2  [emitted]         manifest
[+Wvm] ./resources/assets/_store/sass/index.scss 568 bytes {1} [built]

```

### Modo Produção

 - No arquivo `.env` altere para APP_ENV=production.
 - No arquivo `.env` altere para APP_DEBUG=false.
