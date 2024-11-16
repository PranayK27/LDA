import { Component } from '@angular/core';
import {BannerComponent} from "../../shared/banner/banner.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'lda-full',
  imports: [BannerComponent, FooterComponent, RouterOutlet],
  template: `
    <div id="main-wrapper">
      <div class="page-wrapper">
        <!-- ============================================================== -->
        <!-- Container fluid  -->
        <!-- ============================================================== -->
        <div class="container-fluid">

          <div class="blog-home2">
            <div>
              <lda-banner></lda-banner>
              <router-outlet></router-outlet>
              <lda-footer></lda-footer>
            </div>
          </div>
        </div>
        <!-- ============================================================== -->
        <!-- End Container fluid  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Back to top -->
        <!-- ============================================================== -->
      </div>

    </div>

  `,
  styles: [`
    lda-banner{
      height: 100px;
    }
  `]
})
export class FullComponent  {}
