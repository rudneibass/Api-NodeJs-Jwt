# Sobre o Projeto
- REST API construida com Node.js, Typescript, servidor Express, TypeOrm para persistênci banco de dados Sqlite e autenticação JWT.  

## Instalação do Node.js no Windows
- Baixar e instalar a versão LTS do Node disponivel em https://nodejs.org/en/.

- Mesmo instalando alumas dependencias globalmente o Windows ainda pode bloquear a execução de alguns scripts de fontes desconhecidas o que ele julgue inseguras. Caso isso aconteça temos que informa ao Windows que desejamos permitir a execução desses scripts. Para isso basta executar o PowerShell como administrador e executar o comando "Set-ExecutionPolicy RemoteSigned
"

## Dependencias:
- Abaixo a listagem de dependencias do projeto à ser instaladas antes de "startar" o programa.

    - typescript;
    - bcryptjs;
    - cors;
    - express;
    - express-async-errors;
    - jsonwebtoken;
    - reflect-metadata;
    - sqlite3;
    - ts-node-dev;
    - typeorm;
    - uuid;
    - @types/bcryptjs;
    - @types/cors;
    - @types/express;
    - @types/jsonwebtoken;
    - @types/uuid;
- Feita a instalação das dependências,basta iniciaR o programa com o comando "npm run dev:server" ou "yarn dev:server", de acordo com o gerenciaodor de dependências de sua prefeirência.