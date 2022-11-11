import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./technologies/list/list.component";
import {TechnologiesComponent} from "./technologies/technologies.component";

const routes: Routes = [
  { path: '', redirectTo: 'tech', pathMatch: 'full' },
  { path:"tech", component:TechnologiesComponent, pathMatch: "full" },
  { path:"tech/list", component:ListComponent, pathMatch: "full" },
  { path:"tech/details",
    children: [
      // { path: '', redirectTo: '/apps', pathMatch: 'full' },
      { path: '', loadChildren: () => import('../../../pages/src/lib/pages.module').then(m => m.PagesModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
