import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-details/blog-detail/blog-detail.component';
import { AboutComponent } from './about/about.component';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';
import { FullComponent } from './layout/full/full.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { BannerContentComponent } from './shared/banner-content/banner-content.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ComponentsModule } from '@lda/common';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FormControlModule } from '../../../components/src/form-control';
import { RegistrationComponent } from './registration/registration.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import ButtonComponent from "../../../components/src/button/button.component";
import {Page404Component} from "./page404/page404.component";
import {Page500Component} from "./page500/page500.component";
import {StoreModule} from "@ngrx/store";
import {BlogListComponent} from "./blog/blog-list/blog-list.component";
import {pagesReducer} from "./+state/pages.reducer";
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./services/InMemoryDataService.service";
import {EffectsModule} from "@ngrx/effects";
import {PagesEffects} from "./+state/pages.effects";
import {BlogDetailsComponent} from "./blog/blog-details/blog-details.component";

@NgModule({
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterOutlet,
    SimpleNotificationsModule,
    ComponentsModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    FormControlModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forFeature('pages', pagesReducer),
    EffectsModule.forFeature([PagesEffects])
  ],
  exports: [
    FullComponent,
    FooterComponent,
    BannerComponent,
    PagesRoutingModule,
    BannerNavigationComponent,
    ButtonComponent
  ],
  declarations: [
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    BlogDetailsComponent,
    BlogListComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    Page404Component,
    Page500Component,
  ],
})
export class PagesModule {}
