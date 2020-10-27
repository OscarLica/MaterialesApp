import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ListadoComponent } from './Components/Materiales/listado/listado.component';
import { FormularioComponent } from './Components/Materiales/formulario/formulario.component';
import { ListadoComponent as ListadoTipoMateriales } from './Components/Catalogos/Materiales/listado/listado.component'
import { FormularioComponent as FormularioTipoMateriales } from './Components/Catalogos/Materiales/formulario/formulario.component'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire'
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BreadCrumsComponent } from './Components/Shared/bread-crums/bread-crums.component';
import { HomeComponent } from './Components/home/home.component';

const route:Routes = [ 

  { path:'', component : HomeComponent },
  { path : 'catalogos/listado-tipo-materiales', component: ListadoTipoMateriales},
  { path : 'catalogos/formulario/:id', component: FormularioTipoMateriales},

  { path : 'materiales/listado', component: ListadoComponent},
  { path : 'materiales/formulario/:id', component: FormularioComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    FormularioComponent,
    ListadoTipoMateriales,
    FormularioTipoMateriales,
    BreadCrumsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(route),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
