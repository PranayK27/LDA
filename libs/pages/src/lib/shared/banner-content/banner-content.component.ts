import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lda-banner-content',
  template: `
  <div class="static-slider-head" style="background-image:url(apps/lda/src/assets/images/landingpage/banner-bg.jpg)">
    <div class="container">
        <!-- Row  -->
        <div class="row justify-content-center">
            <!-- Column -->
            <div class="col-lg-9 col-md-6 align-self-center text-center" data-aos="fade-up" data-aos-duration="1200">
                <h1 class="title">Angular Blog</h1>
                <h5 class="subtitle op-5">Want a real app ? Please contact the repository owner and visit the repo below.</h5>

            </div>
            <!-- Column -->
        </div>
    </div>
</div>
  `,
  styles: [``]
})
export class BannerContentComponent {}
