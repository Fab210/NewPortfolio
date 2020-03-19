import { Component, OnInit } from "@angular/core";
import { ProfileDataService } from "./../services/profile-data.service";
import { trigger, style, animate, transition, query } from '@angular/animations';


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
  
  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit() {
      this.getProfile();
  }

   getProfile() {
     this.profileDataService.getProfileData().subscribe((res:any) => {
      console.log(res);
       this.profileDataList = res;
       this.isloading = true;
    });
   }


  addAnimationInContainer() {
   
    let element = document.getElementById("animationContainer");
    element.classList.remove("scale-in-hor-center");
    void element.offsetWidth; // trigger a DOM reflow
    element.classList.add("scale-in-hor-center");
    
  }

}
