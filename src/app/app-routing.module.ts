import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardTemplateComponent } from './dashboard-template/dashboard-template.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DragDropTemplateComponent } from './drag-drop-template/drag-drop-template.component';
import { TreeTemplateComponent } from './tree-template/tree-template.component';
import { TableTemplateComponent } from './table-template/table-template.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { Tuto1Component } from './tuto1/tuto1.component';
import { DetallesComponent } from './detalles/detalles.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {
    path: '',
    // component: MainNavigationComponent
    redirectTo: 'tuto1',
    pathMatch: 'full'
  }, {
    path: 'contact',
    component: ContactFormComponent
  }, {
    path: 'detalles/:id',
    component: DetallesComponent
  }, {
    path: 'drag',
    component: DragDropTemplateComponent
  }, {
    path: 'tree',
    component: TreeTemplateComponent
  }, {
    path: 'dashboard',
    component: DashboardTemplateComponent
  }, {
    path: 'table',
    component: TableTemplateComponent
  }, {
    path: 'tuto1',
    component: Tuto1Component
  }, {
    path: 'crear',
    component: CrearComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
