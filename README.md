# cocon-backend-coding-test
for coding test



## 사용한 Library


#### express.js

  ```import express from 'express';```
  
ref : https://expressjs.com/ko/


#### open-graph-scraper

  ```import og from 'open-graph-scraper';```

ref : https://github.com/jshemas/openGraphScraper



## eslint / prettier 적용

  ``` module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks'],
    extends: [
      'airbnb', 
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      'prettier/prettier': 0,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  };
  ```
  
  ```
  {
    "singleQuote": true,
    "parser": "typescript",
    "semi": true,
    "useTabs": false,
    "tabWidth": 2,
    "trailingComma": "all",
    "printWidth": 120,
    "arrowParens": "always"
  }
  ```
  
  ## node.js 사용시
  ``` yarn dev ``` 로 실행
  
  ## docker 실행
  node -version 17.4 이미지에서 빌드 및 
  
