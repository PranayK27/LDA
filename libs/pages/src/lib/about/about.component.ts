import { Component } from '@angular/core';
import { BlogService } from '../services/blog-service.service';
import { ToastService } from '../services/toast-service.service';
import { Router } from '@angular/router';
import {RelayOnComponent} from "./About-Components/relay-on/relay-on.component";
import {TopContentComponent} from "./About-Components/top-content/top-content.component";

@Component({
  standalone: true,
  selector: 'lda-about',
  imports: [RelayOnComponent, TopContentComponent],
  template: `
    <div
      class="banner-innerpage"
    >
      <div class="container layout_padding">
        <!-- Row  -->
        <div class="row justify-content-center">
          <!-- Column -->
          <div class="col-lg-9 col-md-6 no-trans align-self-center text-center">
            <div class="title">ABOUT PAGE</div>
          </div>
          <!-- Column -->
        </div>
      </div>
    </div>

    <!-- ============================================================== -->
    <!-- Feature 22  -->
    <!-- ============================================================== -->

    <div class="feature22">
      <div class="container">
        <lda-top-content></lda-top-content>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Feature 22  -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Feature 1  -->
    <!-- ============================================================== -->
    <div class="bg-light spacer feature1">
      <div class="container">
        <!-- Row  -->
        <div class="row justify-content-center">
          <div class="col-md-7 text-center no-trans">
            <h2 class="title">Purpose is to create websites in Record Time</h2>
            <h6 class="subtitle">
              As a technology enthusiast, I excel in full-stack development, specializing in [mention specific technologies and languages you're proficient in, e.g., Java, Angular, etc.].
              My proficiency extends to designing scalable and efficient architectures, ensuring optimal performance and user experience.
            </h6>
          </div>
        </div>
        <lda-relay-on></lda-relay-on>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Feature 1  -->
    <!-- ============================================================== -->

    <!-- ============================================================== -->
    <!-- Call to action -->
    <!-- ============================================================== -->
    <div class="spacer">
      <div class="container">
        <div class="row justify-content-center m-b-30">
          <div class="col-md-7 text-center no-trans">
            <h2 class="title">
              Are you happy with what I offer?
            </h2>
            <h6 class="subtitle">
              Grab an opportunity to collaborate
              and make websites worth maintaining and work showcasing!!!
            </h6>
            <a
              class="btn btn-info-gradiant btn-md btn-arrow m-t-20"
              data-toggle="collapse"
              (click)="toggleInfoPanel()"
            ><span>View Details <i class="ti-arrow-circle-down"></i></span
            ></a>
            @if (infoPanelVisible){
              <span></span>
              <br/>
              Pranay Kekre <i class="ti-arrow-right"></i> pranay.2012k&#64;gmail.com
              <!-- Add more content as needed -->
            }
          </div>
        </div>
      </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Call to action -->
    <!-- ============================================================== -->
  `,
  styles: [``]
})
export class AboutComponent {

  infoPanelVisible = false;

  constructor(public router: Router, public service:BlogService, public toastService: ToastService) {
    this.service.showEdit=false;
  }

  toggleInfoPanel() {
    this.infoPanelVisible = !this.infoPanelVisible;
  }
}
