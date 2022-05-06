 # Webpack Configuration for React,Vue, SCSS in any peoject (PHP, Node js, Python, etc.) 
 
```
  let builder = require("bundle-master")
 
  const config = builder.webpack()
        .react('your-location/react/app.js', 'assets/js/react')
        .vue('your-location/vue/app.js', 'assets/js/vue')
        .scss('your-location/scss/app.scss', 'assets/css/app.css')
        .init();

 module.exports = config
```
 
 NPM Package need to install:
 
 Basic devDependencies:
 
   *** add Latest Version.
   ```
   "devDependencies": { 
    "webpack": "^5.72.0",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.2.1"
  }
  ```
  For React add following devDependencies & dependencies: 
  
  *** add Latest Version.
  ```
  "devDependencies": {
    "@babel/core": "^7.15.5",
    "@babel/preset-env": "^7.15.6",
    "@babel/preset-react": "^7.14.5",
    "babel-loader": "^8.2.2", 
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
  ```
  
  if you need to use SCSS or CSS in React app then:
  
  devDependencies: 
  ```
  "css-loader": "^6.7.1",  
  "sass": "^1.49.11",
  "sass-loader": "^12.6.0"
  ```
  
  
  For Vue JS, add following devDependencies & dependencies: 
  
  *** add Latest Version.
  ```
  "devDependencies": {
    "babel-loader": "^8.2.2", 
    "sass": "^1.49.11",
    "sass-loader": "^12.6.0",
    "vue-loader": "^17.0.0",
    "css-loader": "^6.7.1", 
  },
  "dependencies": {
    "@vue/compiler-sfc": "^3.2.33",
    "vue": "^3.2.31"
  }
  ```
  
  For SCSS/SASS, add following devDependencies & dependencies: 
  
    *** add Latest Version.
  ```
  "devDependencies": {
   "ignore-emit-webpack-plugin": "^2.0.6",
    "mini-css-extract-plugin": "^2.6.0", 
    "css-loader": "^6.7.1",
    "sass": "^1.49.11",
    "sass-loader": "^12.6.0"
    },
   "dependencies": { 
   }
    ```
  
  
  
