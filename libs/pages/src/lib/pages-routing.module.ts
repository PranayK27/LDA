import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { FullComponent } from './layout/full/full.component';
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {Page404Component} from "./page404/page404.component";
import {Page500Component} from "./page500/page500.component";
import {BlogDetailsComponent} from "./blog/blog-details/blog-details.component";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", component: BlogComponent },
      { path: "blogDetail/:id", component: BlogDetailsComponent },
      { path: "tech/about", component: AboutComponent },
      { path: "tech/login", component: LoginComponent },
      { path: "tech/register", component: RegistrationComponent },
      { path: "tech/pagenotfound", component: Page404Component },
      { path: "tech/internalserver", component: Page500Component },
      { path: "**", component: Page404Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
