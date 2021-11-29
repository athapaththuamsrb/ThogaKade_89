import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationContextComponent} from "./core/authentication/authentication-context/authentication-context.component";
import {LoginComponent} from "./core/authentication/login/login.component";
import {SignUpComponent} from "./core/authentication/sign-up/sign-up.component";

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {
    path: 'auth', component: AuthenticationContextComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
    ]
  },
  { path: 'DashBoard', loadChildren: () => import('./module/dash-board/dash-board.module').then(m => m.DashBoardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
