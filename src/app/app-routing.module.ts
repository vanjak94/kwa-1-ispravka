import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeloviNamestajaComponent } from "./components/delovi-namestaja/delovi-namestaja.component";
import { DeloviComponent } from "./components/delovi/delovi.component";
import { DeoIzmeniComponent } from "./components/deo-izmeni/deo-izmeni.component";
import { DeoNamestajaIzmeniComponent } from "./components/deo-namestaja-izmeni/deo-namestaja-izmeni.component";
import { DeoNamestajaComponent } from "./components/deo-namestaja/deo-namestaja.component";
import { DeoComponent } from "./components/deo/deo.component";
import { NamestajIzmeniComponent } from "./components/namestaj-izmeni/namestaj-izmeni.component";
import { NamestajComponent } from "./components/namestaj/namestaj.component";
import { NamestajiComponent } from "./components/namestaji/namestaji.component";

const routes: Routes = [
  {
    path: "namestaj",
    component: NamestajiComponent,
  },
  {
    path: "namestaj/:id",
    component: NamestajComponent,
  },
  {
    path: "namestaj/:id/izmeni",
    component: NamestajIzmeniComponent,
  },
  {
    path: "deoNamestaja",
    component: DeloviNamestajaComponent,
  },
  {
    path: "deoNamestaja/:id",
    component: DeoNamestajaComponent,
  },
  {
    path: "deoNamestaja/:id/izmeni",
    component: DeoNamestajaIzmeniComponent,
  },
  {
    path: "deo",
    component: DeloviComponent,
  },
  {
    path: "deo/:id",
    component: DeoComponent,
  },
  {
    path: "deo/:id/izmeni",
    component: DeoIzmeniComponent,
  },
  {
    path: "",
    component: NamestajiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
