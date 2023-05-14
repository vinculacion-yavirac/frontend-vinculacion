import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthHttpService } from 'src/app/service/auth/auth-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser = {} as User;

  toggle!: boolean;

  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor(private authHttpService: AuthHttpService, private router: Router
    ) {}

  ngOnInit(): void {
    this.toggle = JSON.parse(localStorage.getItem('sidebar') || 'false');
    this.toggleEvent.emit(this.toggle);
    // this.getCurrentUser();
  }

  // getCurrentUser() {
  //   this.authHttpService.getUser().subscribe((user: User) => {
  //     if (user) {
  //       this.currentUser = user;
  //     }
  //   });
  // }

  toggleSidebarEvent() {
    this.toggle = !this.toggle;
    localStorage.setItem('sidebar', JSON.stringify(this.toggle));
    let sidebar = JSON.parse(localStorage.getItem('sidebar') || 'false');
    this.toggleEvent.emit(sidebar);
  }

  // logout() {
  //   this.authHttpService.logout().subscribe((res: any) => {
  //     if (res.status === 'success') {
  //       this.router.navigate(['/auth/login']);
  //     } else {
  //       this.logout();
  //     }
  //   });
  // }

}
