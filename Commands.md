### To run the dev
npx nx run lda:serve

### mock server
npm run mock:server

### server API
###### gets the mocked data in the localhost:4200
###### /stores, /catagories, /products, /orders, /detailsOrders
npm run serverAPI

### To create library
nx g @nrwl/angular:lib <lib-name>

### To generate the angular component
npx nx g component <component-name> --project=LDA --export


### NPM - NX
npm install --global @angular/cli@latest

npm install --global nx@latest

nx migrate latest

npx add-nx-to-monorepo

npx nx migrate --run-migrations
