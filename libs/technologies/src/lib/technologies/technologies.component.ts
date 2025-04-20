import { Component, OnInit } from '@angular/core';
import {BannerComponent} from "@lda/pages";
import PageComponent from "../../../../components/src/pages/page.component";

@Component({
  standalone: true,
  selector: 'lda-technologies',
  imports: [BannerComponent, PageComponent],
  template: `
  <!DOCTYPE html>
<html>
<head>
  <link rel="shortcut icon" href="./assets/images/icon-book.jpeg" type="icon">

  <title> LDA </title>

</head>

<body>
<div class="hero_area">
  <div class="bg-box">
    <img alt="image" src="./assets/images/stack-books.jpg">

  </div>
<!--   header section starts-->
  <lda-banner></lda-banner>
<!--   end header section-->
</div>

<!-- about section -->

<section class="about_section layout_padding">
  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
              Technology Stack
            </h2>
          </div>
          <p>
            A Full Stack Developer trying to build my own website where I am trying to merge few technologies.
            The Website itself is made up of Frontend, Backend Technologies and also uses some cloud and ops practices.
          </p>
          <p>
            <lda-storybook-page></lda-storybook-page>
          </p>
          <a
            class="btn btn-info-gradiant btn-md btn-arrow m-t-20"
            data-toggle="collapse"
            href="/tech/blog"
          ><span>View Details <i class="ti-arrow-right"></i></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- end about section -->

<!-- footer section -->
<footer class="footer_section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 footer-col">
        <div class="footer_detail">
          <a href="" class="footer-logo">
            LDA By Pranay
          </a>
          <p>
            First Technology Web App that will give you context of the Technologies that you have been using and limitations that exists while using them.
          </p>
          <div class="footer_social">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://ie.linkedin.com/" target="_blank">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.pinterest.com/" target="_blank">
              <i class="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-info">
      <p>
        &copy;  All Rights Reserved by
        Pranay Kekre<br><br>
      </p>
    </div>
  </div>
</footer>
<!-- footer section -->

</body>

</html>

  `,
  styleUrls: ['./technologies.component.css',
    './assets/css/bootstrap.css',
    './assets/css/style.css',
    './assets/css/responsive.css',
    './assets/css/style.scss',
    './assets/css/font-awesome.min.css'
  ]
})
export class TechnologiesComponent {}
