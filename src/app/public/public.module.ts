import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PrincipalComponent } from './views/principal/principal.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  declarations: [PrincipalComponent, SobreComponent, LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
