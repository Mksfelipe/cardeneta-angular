import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cpf: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.cpf, this.password).subscribe({
      next: (response) => {
        this.errorMessage = "";
        localStorage.setItem('token-cardeneta', response);
        this.router.navigate(['/home']);
      }
    })

    this.errorMessage = 'Invalid username or password';
  }
}
