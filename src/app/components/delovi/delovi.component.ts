import { Component, OnInit } from "@angular/core";
import { Deo } from "src/app/model/Deo";
import { DeoService } from "src/app/services/deo.service";

@Component({
  selector: "app-delovi",
  templateUrl: "./delovi.component.html",
  styleUrls: ["./delovi.component.css"],
})
export class DeloviComponent implements OnInit {
  constructor(private deoService: DeoService) {}

  delovi: Deo[];

  ngOnInit(): void {
    this.dobaviDelove();
  }

  dobaviDelove() {
    this.deoService
      .dobaviSve()
      .subscribe((response) => (this.delovi = response));
  }

  obrisi(id: number) {
    this.deoService.obrisi(id).subscribe(() => {
      this.dobaviDelove();
    });
  }

  dodajDeo(noviDeo) {
    this.deoService.dodaj(noviDeo).subscribe((response) => {
      this.dobaviDelove();
    });
  }
}
