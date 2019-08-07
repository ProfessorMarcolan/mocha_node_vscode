# O que é testes automaticos
Testes automaticos permitem que seu codigo possa ser refatorado. ISso é bom porque provavelmente seu código inicial não é trao tranbsparente como você pensa. Ele permite que você melhore sua base de código mantendo a mesma funcionalidade.


# Usando o node
O node é um aplicativo que permite usar a linguagem JS no lado do servidor . É necessário inicializar o projeto
```
npm init
```


# Usando o Mocha
[Mocha](https://mochajs.org/) é uma biblioteca que permite escrever testes automaticos no VScode

## Para intalar o MOCHA
```
npm install --save-dev mocha
```



# Configurango o VSCode

Para configurar o debuger do VScode é necessário.
```
{
            "name": "Run mocha",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
        "stopOnEntry": false,
        "args": ["test/**/*.js", "--no-timeouts"],
        "cwd": "${workspaceRoot}",
        "runtimeExecutable": null,
        "env": { "NODE_ENV": "testing"}
    }
```
[Fonte, forum obscuro.](https://gist.github.com/paambaati/54d33e409b4f7cf059cc)


Precisamos melhorar esse texto.