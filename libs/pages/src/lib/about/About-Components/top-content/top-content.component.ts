import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'lda-top-content',
  template: `<div class="row wrap-feature-22">
    <!-- Column -->
    <!-- Column -->
    <div class="col-lg-6">
      <div class="text-box">
        <p class="text-info">
          Full Stack Developer
          <br>
          Cloud: Amazon Web Services, Openshift, PCF
          <br>
          Certification: AWS Solutions Architect
          <br>
          Technology: Java 8/11, Javascript / ES 6 / Typescript
          <br>
          Framework: Angular 17, NgRx, RxJS, Spring 5+, Spring Boot 3+, Hibernate 5, Struts 2.x, Spring MVC, Microservices, React, Junit, Jasmine/Karma, Selenium, Nx (MonoRepo), Cypress Unit/Integration
          <br>
          Web Services: REST API / SOAP
          <br>
          Database: Oracle DB, MySQL, MongoDB
          <br>
          VCS Tools: Github, Gitlab, SVN, BitBucket
          <br>
          Organization Tool: Jira, Rally
          <br>
          Artifactory: JFrog, NPM, Chef Habitat
          <br>
          Wiki: Confluence
          <br>
          Servers: Apache Tomcat 9+, Glassfish, Weblogic 12+, Node 12/14/16/18
          <br>
          Orchestration: Redhat Openshift, Docker, Kubernetes, Chef
          <br>
          Automation: Jenkins, Bamboo
          <br>
          Event-Driven Tool: Kafka, Rabbit MQ
          <br>
          Service Gateways: Zuul
          <br>
          Fault Resiliency Tool: Hystrix
          <br>
          Service Discovery: Eureka and Ribbon
        </p>

        <a
          class="btn btn-info-gradiant btn-md btn-arrow m-t-20"
          data-toggle="collapse"
          target="_blank"
          href="https://ie.linkedin.com/in/pranay-kekre?trk=people-guest_people_search-card"
        >
        <span
        >LinkedIn!
          <i class="ti-arrow-right"></i>
        </span>
        </a>
      </div>
    </div>
    <!-- Column -->
  </div>
  `,
  styles: [``]
})
export class TopContentComponent  {

  imagePath='apps/lda/src/assets/images/innerpage/about-us.jpg';

}
