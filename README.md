# Angular 17 Labs

This is a Git repository for exploring and testing the new features of Angular 17, NgRx, and Nx.

## Commands

- Create Nx Workspace `nxp create-nx-workspace@latest`

```
  √ Where would you like to create your workspace? · angular-17-labs
  √ Which stack do you want to use? · none
  √ Package-based monorepo, integrated monorepo, or standalone project? · integrated
  √ Set up CI with caching, distribution and test deflaking · skip
  √ Would you like remote caching to make your build faster? · skip
```

- Add Angular plugin `nx add @nx/angular`
- Add NestJs plugin `nx add @nx/nest`
- Create the Angular App, using esbuild

  ```
  npx nx generate @nx/angular:application --name=angular-17 --bundler=esbuild --directory=apps/angular-17 --addTailwind=true --prefix=labs --projectNameAndRootFormat=as-provided --tags=type:app --no-interactive
  ```

  - `npx nx generate`: Invokes Nx to generate something within the workspace.
  - `@nx/angular:application`: Specifies the generator to use. In this case, it's for creating an Angular application.
  - `--name=angular-17`: Sets the name of the application to "angular-17".
  - `--bundler=esbuild`: Specifies the bundler to use. Here, it's set to "esbuild", which is a fast JavaScript bundler.
  - `--directory=apps/angular-17`: Specifies the directory where the application will be created. In this case, it's "apps/angular-17".
  - `--addTailwind=true`: Adds Tailwind CSS to the generated application. Tailwind CSS is a utility-first CSS framework.
  - `--prefix=labs`: Sets the prefix to be used for the generated Angular components. For example, if you generate a component named "my-component", it will have a selector like `<labs-my-component>`.
  - `--projectNameAndRootFormat=as-provided`: Specifies the format for naming the project and root. In this case, it keeps the provided format.
  - `--tags=type:app`: Assigns tags to the generated application. In this case, it adds the tag "type:app".
  - `--no-interactive`: Disables interactive mode, meaning the command won't prompt for user input.

- 👀 Check inferred tasks ([Nx Project Crystal](https://nx.dev/concepts/inferred-tasks) 💎) `nx show project angular-17 --web`

  ![alt text](https://github.com/arias9306/angular-17-labs/blob/main/docs/imgs/project-crystal.png?raw=true 'Logo Title Text 1')

- Create the Api project

  ```
  npx nx generate @nx/nest:application --name=api --frontendProject=angular-17 --directory=apps/api --projectNameAndRootFormat=as-provided --strict=true --tags=type:api --no-interactive
  ```

  - `npx nx generate`: This initiates the generation process using Nx.
  - `@nx/nest:application`: Specifies the generator to use, in this case, the NestJS application generator provided by Nx.
  - `--name=api`: Sets the name of the NestJS application to be generated as "api".
  - `--frontendProject=angular-17`: Specifies the frontend project to be associated with the NestJS application. In this case, it's set to "angular-17".
    see more [Angular config: Proxying to a backend server](https://angular.dev/tools/cli/serve#proxying-to-a-backend-server)
  - `--directory=apps/api`: Specifies the directory where the NestJS application will be created. Here, it's set to "apps/api".
  - `--projectNameAndRootFormat=as-provided`: This option specifies the format for naming the project and root. In this case, it retains the provided format.
  - `--strict=true`: Enables strict mode for TypeScript within the generated NestJS application. This enforces stricter type checking rules.
  - `--tags=type:api`: Assigns tags to the generated NestJS application. In this case, it adds the tag "type:api".
  - `--no-interactive`: Disables interactive mode, meaning the command won't prompt for user input during the generation process.

- 👀 Check inferred tasks ([Nx Project Crystal](https://nx.dev/concepts/inferred-tasks) 💎) `nx show project api --web`
