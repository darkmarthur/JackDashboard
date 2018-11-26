import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableTemplateComponent } from './table-template/table-template.component';
import { DashboardTemplateComponent } from './dashboard-template/dashboard-template.component';
import { TreeTemplateComponent } from './tree-template/tree-template.component';
import { DragDropTemplateComponent } from './drag-drop-template/drag-drop-template.component';
import { Tuto1Component } from './tuto1/tuto1.component';
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    ContactFormComponent,
    MainNavigationComponent,
    TableTemplateComponent,
    DashboardTemplateComponent,
    TreeTemplateComponent,
    DragDropTemplateComponent,
    Tuto1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC091hI1vtQcaWqP05NZIbcxd-98OXGZyw'
    }),
    MaterialModule,
    BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatGridListModule,
    // MatMenuModule,
    // MatTreeModule,
    // DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
