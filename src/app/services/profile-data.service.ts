import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

constructor(private http: HttpClient) { }

getProfileData(){
   return this.http.get('https://gitconnected.com/v1/portfolio/fab210');
  }

}
