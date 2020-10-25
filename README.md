# Boost Error Plugin
This plugin is designed to add abstracted error reporting capabilities to the boost system.

# Installation
```sh
npm install --save github:epicdev-za/boost-error-plugin
```

Register it in **server.config.js**
```js
...
sanctum: {
    project_key: ''
},
plugins: ['boost-error-plugin'], //Or use boost-error-plugin/gc for Google Cloud Error Reporting
endpoints: {
...
```
