## To run the dev
npx nx run lda:serve

## storybook

### Start the component explorer on port 6006: (inside the taskbox inside the lib)
ng run taskbox:storybook

### Unit Test
npm run test-storybook -- --watch

### Chromatic Deployment (example, no need to hardcode project token)
npx chromatic --project-token=chpt_9b3f03b92ad80fb

# Run the frontend app proper on port 4200:
ng serve

### to add new storybook into another app else above lib will do
nx g @nrwl/storybook:configuration

## To create library
nx g @nrwl/angular:lib <lib-name>


## NPM - NX
npm install --global @angular/cli@latest

npm install --global nx@latest

nx migrate latest

npx add-nx-to-monorepo

npx nx migrate --run-migrations

nx g @nx/workspace:fix-configuration
