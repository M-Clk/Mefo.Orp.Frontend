import { RedirectCommand, Router, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { authGuard } from './auth/auth.guard';
import { AdminComponent } from './account/admin/admin.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  // Register da component:LayoutComponent, altına eklenmelidir. Çünkü kimse kendisi oluşturmamalıdır.
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  {
    path:'',
    component:LayoutComponent,
    canActivate: [authGuard],
    children:[
        { 
          path: '', 
          component: HomeComponent
        },
        { 
          path: 'admin', 
          component: AdminComponent
        },
        {
          path:'about',
          component:AboutComponent
        },
        {
          path: 'redirect',
          component: HomeComponent,
          canActivate: [
          () => {
                  return new RedirectCommand(inject(Router).parseUrl('/error'), {
          skipLocationChange: false,
        });
      },
    ],
  },
     ]
 }
];
