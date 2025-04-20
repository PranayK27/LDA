import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechnologiesComponent} from "./technologies/technologies.component";
import {ListComponent} from "./technologies/list/list.component";

const routes: Routes = [
  { path: "", redirectTo: "tech", pathMatch: "full" },
  { path:"tech", component:TechnologiesComponent, pathMatch: "full" },
  { path:"tech/list", component:ListComponent, pathMatch: "full" },
  //{ path:"tech/counter", component:MyCounterComponent, pathMatch: "full" }, or BooksComponent
  { path:"tech/blog",
    children: [
      { path: "", loadChildren: () => import('../../../pages/src/lib/pages.module').then(m => m.PagesModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
