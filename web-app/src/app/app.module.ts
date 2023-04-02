import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';

import { FormsModule } from '@angular/forms';
// import { RouterModule }   from '@angular/router';
// import { MusicasComponent } from './musicas/musicas.component';
// import { MusicaService } from './musicas/musicas.service';
import { ListaMusicasComponent } from './lista-musicas/lista-musicas.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MusicaService } from './musicas/musicas.service';
import { MusicasComponent } from './musicas/musicas.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserComponent } from './user/user.component';
import { ArtistaComponent } from './artista/artista.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditpopupComponent } from './editpopup/editpopup.component';
import { AddpopupComponent } from './addpopup/addpopup.component';
import { DeletepopupComponent } from './deletepopup/deletepopup.component';
import { UserSeDeletapopupComponent } from './user-se-deletapopup/user-se-deletapopup.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserlistingComponent,
    UpdatepopupComponent,
    ListaMusicasComponent,
    InitialPageComponent,
    MusicasComponent,
    UserAdminComponent,
    UserComponent,
    ArtistaComponent,
    UserEditComponent,
    EditpopupComponent,
    AddpopupComponent,
    DeletepopupComponent,
    UserSeDeletapopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [MusicaService],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
