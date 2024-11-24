import { Component, inject, AfterViewInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const appStyleElement = document.getElementById("app-style") as HTMLLinkElement;

    if (appStyleElement && appStyleElement.href.includes("bootstrap.rtl.min.css")) {
      document.getElementsByTagName("html")[0].dir = "rtl";
    }
  }

  authService = inject(AuthService);
  router = inject(Router);
  
  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
