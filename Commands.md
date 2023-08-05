### To run the dev
npx nx run lda:serve

### storybook
nx run lda:storybook

nx g @nrwl/storybook:configuration

### To create library
nx g @nrwl/angular:lib <lib-name>


### NPM - NX
npm install --global @angular/cli@latest

npm install --global nx@latest

nx migrate latest

npx add-nx-to-monorepo

npx nx migrate --run-migrations

nx g @nx/workspace:fix-configuration
