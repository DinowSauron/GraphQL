
- GraphQL:
  - Resolve:
    - Overfetching
    - Underfetching
    - Query language
  - dificulta:
    - Cache
    - Erros


- Rest: 
  - cache control: 5 segundos?


## comandos:

### Backend:
* yarn init -y
* yarn add type-graphql graphql@^15.3.0 apollo-server class-validator reflect-metadata
* yarn add typescript @types/node ts-node-dev -D
* npx tsc --init
  * Colocar as config como true no tsconfig.json:
    - experimentalDecorators
    - emitDecoratorMetadata
  * Target es2018 
  * "lib": ["es2018", "ESNext.AsyncIterable"]
  * "strictPropertyInitialization": false

### Frontend:
* npm create vite@latest
* yarn add @apollo/client graphql

## Notas:
* RestFull Controllers?
  * GraphQL Resolvers?
* playground: https://studio.apollographql.com/sandbox/explorer
* mutation, operações de alteração, remoção e criação de dados
* fetchMore - paginação