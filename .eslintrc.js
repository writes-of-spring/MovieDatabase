module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    "extends": [
        "airbnb",
        "prettier"
    ],
    "rules": {
        "react/jsx-filename-extension": 0,
        "implicit-arrow-linebreak": 0,
        "no-console": 0,
        "prettier/prettier": "error",
        "react/jsx-one-expression-per-line" : 0,
    },
   

};