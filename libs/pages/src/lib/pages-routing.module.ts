import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { FullComponent } from './layout/full/full.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", component: BlogComponent },
      { path: "blogDetail/:id", component: BlogDetailComponent },
      { path: "tech/about", component: AboutComponent },
      { path: "tech/login", component: LoginComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
