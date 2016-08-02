import { provideRouter } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReadArticlesComponent } from './components/read-articles/read-articles.component';
import { AuthGuard } from './services/auth.guard';

export const APP_ROUTES = [
  provideRouter([
    { path: '', redirectTo:'/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'read', component: ReadArticlesComponent, canActivate: [AuthGuard] }
  ])
];
