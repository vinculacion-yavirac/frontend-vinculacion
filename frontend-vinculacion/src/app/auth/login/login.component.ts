import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginHttpService } from 'src/app/service/login/login-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    public user: LoginHttpService,
    private router: Router,
    private route: ActivatedRoute) { }


  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  loading = false;
  submitted = false;
  error = '';

  ngOnInit(): void {
    //this.user.save("yavirac@gmail.com","yavirac1810").subscribe((res) => {console.log(res);});
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert("todos los campos son necesarios")
      return
    }

    this.loading = true;
    this.user
      .save(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
           const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
           this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
}
