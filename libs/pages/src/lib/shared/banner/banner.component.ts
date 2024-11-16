import { Component } from '@angular/core';
import {BannerNavigationComponent} from "../banner-navigation/banner-navigation.component";

@Component({
  standalone: true,
  selector: 'lda-banner',
  imports: [BannerNavigationComponent],
  template: `
    <div class="topbar" id="top">
      <div class="header6">

        <div class="container">
          <nav class="navbar-expand-sm h6-nav-bar">
            <a class="navbar-brand" href="#">
                <span>
                  LDA
                </span>
            </a>

            <lda-banner-navigation></lda-banner-navigation>

          </nav>
        </div>


      </div>
    </div>

  `,
  styles: [``]
})
export class BannerComponent  {}
