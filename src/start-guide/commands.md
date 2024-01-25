# Basic commands for Typescript
## Installation
### Installation Node v21.6.1 
reference: https://github.com/nodesource/distributions/blob/master/README.md#debian-and-ubuntu-based-distributions
```BASH
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&sudo apt-get install -y nodejs
```
### TypeScript Installation
You might need administrator permission
```BASH
  tsc -v
```

Verify installation:
```BASH
  tsc -v
```
### TSnode Installation

```BASH
  npm init -y # Create a new project of Node.js
  npm install -g -ts-node
```

Verify installation:
```BASH
  ts-node -v
```


## First steps

1. Create a node js project if not already created.
```BASH
  npm init -y
```

2. Create a compilation file of TypeScript
```BASH
  tsc --init
```

## Compile

### Compile to JavaScript

1. This will generated a file.js
```BASH
  tsc <file>.ts
```

### Compile and execute

1. This won´t generated a file.js but will execute the program
```BASH
  ts-node <file>.ts
```


### Install modules

```BASH
  npm install moduleName
```