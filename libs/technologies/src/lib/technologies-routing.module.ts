import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechnologiesComponent} from "./technologies/technologies.component";
import {MyCounterComponent} from "../../../my-counter/src/lib/my-counter-comp/my-counter-comp.component";

const routes: Routes = [
  { path: "", redirectTo: "tech", pathMatch: "full" },
  { path:"tech", component:TechnologiesComponent, pathMatch: "full" },
  { path:"tech/list", component:MyCounterComponent, pathMatch: "full" },
  //{ path:"tech/counter", component:MyCounterComponent, pathMatch: "full" },
  { path:"tech/details",
    children: [
      { path: "", loadChildren: () => import('../../../pages/src/lib/pages.module').then(m => m.PagesModule) }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
