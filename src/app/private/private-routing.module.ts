import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent},
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
