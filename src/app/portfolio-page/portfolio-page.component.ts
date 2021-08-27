import { Component, OnInit } from "@angular/core";
import { animate, query, style, transition, trigger } from '@angular/animations';

import { ProfileDataService } from "./../services/profile-data.service";

declare var require: any
const FileSaver = require('file-saver');


@Component({
  selector: "app-portfolio-page",
  templateUrl: "./portfolio-page.component.html",
  styleUrls: ["./portfolio-page.component.css"],

})
export class PortfolioPageComponent implements OnInit {
  public profileDataList: any = [];
  public isloading = false;
  public animate = false;
  public routeTransitionAnimations = trigger('triggerName', []);

  constructor(private profileDataService: ProfileDataService) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileDataService.getProfileData().subscribe((res: any) => {
      console.log(res);
      this.profileDataList = res;
      this.isloading = true;
    });
  }


  addAnimationInContainer() {
    let element = document.getElementById("animationContainer");
    /*element.classList.remove("fade-in-left");
    void element.offsetWidth; // trigger a DOM reflow
    element.classList.add("fade-in-left");*/
    element.classList.remove("fade-in-left");
    setTimeout(() => element.classList.add("fade-in-left"), 0);
    
  }

  goLinkedIn() {
    window.open('https://www.linkedin.com/in/fabio-santos88', "_blank");
  }

  downloadPdf() {
    window.open('https://github.com/Fab210/NewPortfolio/raw/master/docs/assets/CV_Fabio_Santos.pdf', "_blank");
  }
}
