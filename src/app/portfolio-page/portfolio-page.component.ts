import { Component, OnInit } from "@angular/core";
import { ProfileDataService } from "./../services/profile-data.service";


@Component({
  selector: "app-portfolio-page",
  templateUrl: "./portfolio-page.component.html",
  styleUrls: ["./portfolio-page.component.css"]
})
export class PortfolioPageComponent implements OnInit {
  public profileDataList = [];
  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit() {
      this.getProfile();
  }

  getProfile() {
    this.profileDataService.getProfileData().subscribe((res:any) => {
      console.log(res);
      this.profileDataList = res.basics;
    });
  }
}
