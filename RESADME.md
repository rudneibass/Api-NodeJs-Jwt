Rodar o comando abaixo no PowerShell aberto como administrador caso de erro ao executaa comandos de alguma dependencia
# Set-ExecutionPolicy RemoteSigned

Dependencias:
- yarn (opcional);
- typescript (opcional);
- nodemon (reiniciar servidor automaticamente);
- express (servidor);
- sequelize (ORM);
- Mysql (e mysql2);
- Postgres (pg e pghstore);
- yarn tsc --init
- yarn tsc
- Em tsconfig.json descomentar a propriedade outDir e setar para a pasta onde será transpilado o codigo.
- yarn add ts-node-dev --D (dependencia para transpilar o codigo automaticamente);
- Criar propriedade "scripts" no packege.json com "dev:server": "ts-node-dev --respae --transpileOnly"
- yarn add cors (isntalar o cors para controtlar as url's que pode acessar a api)
- yarn add @types/cors (Instalar a tipagem do cors)