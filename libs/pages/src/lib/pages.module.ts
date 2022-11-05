import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./blog/blog.component";
import {BlogDetailComponent} from "./blog/blog-detail/blog-detail.component";
import {AboutComponent} from "./about/about.component";
import {RelayOnComponent} from "./about/About-Components/relay-on/relay-on.component";
import {TopContentComponent} from "./about/About-Components/top-content/top-content.component";
import {FullComponent} from "./layout/full/full.component";
import {BannerComponent} from "./shared/banner/banner.component";
import {BannerNavigationComponent} from "./shared/banner-navigation/banner-navigation.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";

@NgModule({
  imports: [CommonModule, RouterLinkActive, RouterOutlet],
  exports: [
    FullComponent,
    FooterComponent,
    BannerComponent,
    PagesRoutingModule
  ],
  declarations: [
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
  ]
})
export class PagesModule {}
