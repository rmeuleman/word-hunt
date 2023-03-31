import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridConfigurationFormComponent } from './word-hunt/grid-configuration-form/grid-configuration-form.component';
import { GridViewComponent } from './word-hunt/grid-view/grid-view.component';

const routes: Routes = [
  { path: 'grid-configuration', component: GridConfigurationFormComponent},
  { path: 'grid-view', component: GridViewComponent},
  { path: '', redirectTo: '/grid-configuration', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
