# MyNewProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
==========================================================================================================================================

Angular works with components and app are divided into module. the app.component.ts is the root component which gets loaded at the start of our application. It is loaded as the root component because in the root module(app.module.ts) we have [bootstrap: [AppComponent]} ,.
app.module bootstraps the app.component which tells the app to treat app.component as the root component

1. It will generate a component named "home" in the "app" folder
=> ng generate component home (ng g c home)

2. ng serve --open

3. The two flags we added at the end specify that we want the CSS to use the Sass compiler, and --routing tells the CLI to provide us with the routing scaffolding.
=> ng new my-new-project --style=scss --routing

Service files: if we want to use same code across multiple components, instead of declaring it in multiple components, we can define it at a single place

4. It will generate a service named "data" in the "app" folder
=> ng generate service data (ng g s data)


5. Deployment of App
=> ng build //file size more
=> ng build --prod //file size reduced, used for production