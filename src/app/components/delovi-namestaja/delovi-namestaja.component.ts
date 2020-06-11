import { Component, OnInit } from "@angular/core";
import { DeoNamestaja } from "src/app/model/DeoNamestaja";
import { DeoNamestajaService } from "src/app/services/deo-namestaja.service";

@Component({
  selector: "app-delovi-namestaja",
  templateUrl: "./delovi-namestaja.component.html",
  styleUrls: ["./delovi-namestaja.component.css"],
})
export class DeloviNamestajaComponent implements OnInit {
  constructor(private deoNamestajaService: DeoNamestajaService) {}

  deloviNamestaja: DeoNamestaja[];

  ngOnInit(): void {
    this.dobaviDeloveNamestaja();
  }

  dobaviDeloveNamestaja() {
    this.deoNamestajaService
      .dobaviSve()
      .subscribe((response) => (this.deloviNamestaja = response));
  }

  obrisi(id: number) {
    this.deoNamestajaService.obrisi(id).subscribe(() => {
      this.dobaviDeloveNamestaja();
    });
  }

  dodajDeoNamestaja(noviDeo) {
    this.deoNamestajaService.dodaj(noviDeo).subscribe(() => {
      this.dobaviDeloveNamestaja();
    });
  }
}
