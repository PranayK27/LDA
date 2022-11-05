import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./technologies/list/list.component";
import {TechnologiesComponent} from "./technologies/technologies.component";
import {CategoryDetailsComponent} from "./technologies/category-details/category-details.component";
import {BlogComponent} from "../../../pages/src/lib/blog/blog.component";
import {BlogDetailComponent} from "../../../pages/src/lib/blog/blog-detail/blog-detail.component";
import {AboutComponent} from "../../../pages/src/lib/about/about.component";
import {FullComponent} from "../../../pages/src/lib/layout/full/full.component";

const routes: Routes = [
  { path: '', redirectTo: 'tech', pathMatch: 'full' },
  { path:"tech", component:TechnologiesComponent, pathMatch: "full" },
  { path:"tech/list", component:ListComponent, pathMatch: "full" },
  { path:"tech/details",
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
    ],
    pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }
