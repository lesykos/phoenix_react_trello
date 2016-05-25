# PhoenixTrello

## Used commands:

```
mix phoenix.new --no-brunch phoenix_trello
cd phoenix_trello
npm init -y
sudo npm i webpack -D
... and all dependencies ...
```

Add webpack.config.js

Tell Phoenix to start Webpack every time we start our development server (config/dev.exs)

Add files:
```
web/static/css/application.sass
web/static/js/application.js

priv/static/js/phoenix.js => web/static/js/phoenix.js
```

Setup Front-end basic structure
