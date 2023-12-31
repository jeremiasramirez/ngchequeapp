import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { expRoutes } from './app.route';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VerifiedtokenComponent } from './pages/verifiedtoken/verifiedtoken.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSolicPipe } from './pipes/search-solic.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagosComponent,
    ProveedoresComponent,
    SolicitudComponent,
    VerifiedtokenComponent,
    LoginComponent,
    SearchFilterPipe,
    SearchSolicPipe
  ],
  imports: [
    BrowserModule,expRoutes,
    CommonModule ,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
