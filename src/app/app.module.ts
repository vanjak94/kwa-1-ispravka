import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DeloviNamestajaComponent } from "./components/delovi-namestaja/delovi-namestaja.component";
import { DeloviComponent } from "./components/delovi/delovi.component";
import { DeoDodajComponent } from "./components/deo-dodaj/deo-dodaj.component";
import { DeoNamestajaDodajComponent } from "./components/deo-namestaja-dodaj/deo-namestaja-dodaj.component";
import { DeoNamestajaComponent } from "./components/deo-namestaja/deo-namestaja.component";
import { DeoComponent } from "./components/deo/deo.component";
import { NamestajDodajComponent } from "./components/namestaj-dodaj/namestaj-dodaj.component";
import { NamestajComponent } from "./components/namestaj/namestaj.component";
import { NamestajiComponent } from "./components/namestaji/namestaji.component";
import { DeoIzmeniComponent } from './components/deo-izmeni/deo-izmeni.component';
import { DeoNamestajaIzmeniComponent } from './components/deo-namestaja-izmeni/deo-namestaja-izmeni.component';
import { NamestajIzmeniComponent } from './components/namestaj-izmeni/namestaj-izmeni.component';

@NgModule({
  declarations: [
    AppComponent,
    NamestajComponent,
    NamestajiComponent,
    DeloviNamestajaComponent,
    DeoNamestajaComponent,
    DeloviComponent,
    DeoComponent,
    NamestajDodajComponent,
    DeoNamestajaDodajComponent,
    DeoDodajComponent,
    DeoIzmeniComponent,
    DeoNamestajaIzmeniComponent,
    NamestajIzmeniComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
