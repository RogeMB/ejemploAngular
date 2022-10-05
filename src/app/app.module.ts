import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './components/lista/lista.component';
import { StorageComponent } from './storage/storage.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HeaderComponent,
    ListaComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,                 
    HttpClientModule, //import HttpClientModule after BrowserModule. Con ello tendremos acceso a un objeto HttpClient
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
