# IE Bank frontend

- [IE Bank backend](#ie-bank-backend)
  - [Overview](#overview)
  - [Requirements](#requirements)
  - [Recommended tutorials](#recommended-tutorials)
  - [Configure your local environment](#configure-your-local-environment)
    - [Install Prerequisites](#install-prerequisites)
    - [Set up your local environment with VSCode](#set-up-your-local-environment-with-vscode)
  - [Run and debug the backend locally](#run-and-debug-the-backend-locally)
  - [Configuration variables](#configuration-variables)
  - [Continuos Delivery](#continuos-delivery)


## Overview

This is the repository for the frontend code of the IE Bank web app

![IE Bank app logical view](images/ie-bank-app.png)

## Requirements

This source code works under the following technologies:
- [Node v18.17.1](https://nodejs.org/en/download)
- [npm 9.6.7 (comes with Node)](https://www.npmjs.com/package/npm)

## Recommended tutorials
- HTML
- CSS
- JavaScript
- [Node.js]
- [Vue.js](https://vuejs.org/guide/introduction.html)
- [Node.js in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
- [Using Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial)

## Configure your local environment

### Install Prerequisites

- **Install Node.js**. Install Node.js from [here](https://nodejs.org/en/download). Make sure to select the option to add Node to your PATH while installing.
- **Install VSCode**. Install VSCode from [here](https://code.visualstudio.com/download).
- **Install Vetur VSCode extension**. Install the Vetur VSCode extension from [here](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

### Install node dependencies

> Learn more: [Using Vue in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial)

1. **Install node dependencies**. Open a terminal and run the following command on the root folder of this project:

```bash
$ npm install
```

This will create a `node_modules` folder with all the dependencies needed to run the application configured in the `package.json` file.

## Run and debug the backend locally

> Learn more: [Vue.js debugging in Chrome and VS Code](https://github.com/microsoft/vscode-recipes/tree/main/vuejs-cli#configure-launchjson-file)

1. **Configure the `launch.json` and `tasks.json` files**. Click on the Debugging icon in the Activity Bar to bring up the Debug view. Then click on the gear icon to configure a `launch.json` file, selecting Chrome for the environment:

![Configure launch.json on VS Code](https://github.com/microsoft/vscode-recipes/raw/main/vuejs-cli/config_add.png)

2. Replace content of the generated `launch.json` with the following configurations:

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "msedge",
            "request": "launch",
            "name": "IE Bank Frontend",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}",
            "breakOnLoad": true,
            "pathMapping": {
              "/_karma_webpack_": "${workspaceFolder}"
            },
            "sourceMapPathOverrides": {
              "webpack:/*": "${webRoot}/*",
              "/./*": "${webRoot}/*",
              "/src/*": "${webRoot}/*",
              "/*": "*",
              "/./~/*": "${webRoot}/node_modules/*"
            },
            "preLaunchTask": "vuejs: start"
        }
    ]
}
```

2. Replace content of the generated `tasks.json` with the following configurations:

```json
{
    "version": "2.0.0",
    "tasks": [
      {
        "label": "vuejs: build",
        "type": "npm",
        "script": "install",
        "isBackground": true
      },
      {
        "label": "vuejs: start",
        "type": "npm",
        "script": "serve",
        "isBackground": true
      }
    ]
  }
```

## Configuration variables

> Learn more: 


## Continuos Delivery

> Learn more:

