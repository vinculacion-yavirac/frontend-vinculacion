import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthHttpService } from 'src/app/service/auth/auth-http.service';
import { UserHttpService } from 'src/app/service/user/user-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
//  user: User;

 loading: boolean = true;

 
 constructor(
   public authHttpService: AuthHttpService,
   private userHttpService: UserHttpService,
 ) {}

 
 ngOnInit(): void {
  //  this.getCurrentUser();
 }

//  getCurrentUser() {
//    this.authHttpService.getUser().subscribe((user: User) => (this.user = user));
//  }
}
