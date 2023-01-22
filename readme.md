# dkrv CLI

* CLI para a criação de components, template e style global

## mais informações sobre a CLI

* Check out the documentation at [Documentação](https://www.npmjs.com/package/dkrv)

## Prerequisites

1. [Node.js](https://nodejs.org) and [npm](https://npmjs.com) installed (verified with npm version 7.0.5 and Node 14.4.0).

## install
```shell
$ npm install dkrv
```
## Uses
* cria pasta base ```src```

## Comandos

#### Cria componentes
* a criação em `typescript` e [default]() para `javascript` user `create-js`
```shell 
$ dkrv create <name_folder>
```
#### Cria pages
* a criação em `typescript` e [default]()
```shell 
$ dkrv pages <name_folder>
```

#### Cria style global em
* template e usado para [Reactjs](https://reactjs.com) com [styled-components.com](https://styled-components.com/)

```shell 
$ dkrv template
```
* template global base
```shell
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --primary: #019fcf;
   --secondary: #191923;
   --third:#252430;
}

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body, html{
    background: #353535;
    overflow: visible;
}

a{
    text-decoration: none;
    text-decoration-color: red;
}

    
`
```
