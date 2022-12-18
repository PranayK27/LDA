import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('../../../../libs/technologies/src/lib/technologies.module').then(m => m.TechnologiesModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
