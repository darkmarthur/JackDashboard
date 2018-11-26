# JackDashboard

ng serve --host 0.0.0.0

npm install --save angular/material2-builds angular/cdk-builds angular/animations-builds

ng add @angular/material


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }


import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }


@import "~@angular/material/prebuilt-themes/indigo-pink.css";

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

ng generate module material
import { MaterialModule } from './material/material.module';
MaterialModule

ng add @angular/cdk


https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive?rq=1

npm install @angular/flex-layout --save

https://github.com/angular/flex-layout/wiki/Responsive-API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
