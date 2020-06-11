import { Component, OnInit } from "@angular/core";
import { Namestaj } from "src/app/model/Namestaj";
import { NamestajService } from "src/app/services/namestaj.service";

@Component({
  selector: "app-namestaji",
  templateUrl: "./namestaji.component.html",
  styleUrls: ["./namestaji.component.css"],
})
export class NamestajiComponent implements OnInit {
  constructor(private namestajiService: NamestajService) {}

  namestaji: Namestaj[];

  ngOnInit(): void {
    this.dobaviNamestaj();
  }

  dobaviNamestaj() {
    this.namestajiService
      .dobaviSve()
      .subscribe((response) => (this.namestaji = response));
  }

  obrisi(id: number) {
    this.namestajiService.obrisi(id).subscribe(() => {
      this.dobaviNamestaj();
    });
  }

  dodajNamestaj(noviNamestaj: Namestaj) {
    this.namestajiService.dodaj(noviNamestaj).subscribe((response) => {
      this.dobaviNamestaj();
    });
  }
}
