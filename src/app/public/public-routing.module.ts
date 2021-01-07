import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {path: 'sobre', component: SobreComponent},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
