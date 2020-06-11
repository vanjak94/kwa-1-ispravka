import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Deo } from "src/app/model/Deo";
import { DeoNamestaja } from "src/app/model/DeoNamestaja";
import { Namestaj } from "src/app/model/Namestaj";
import { DeoService } from "src/app/services/deo.service";
import { NamestajService } from "src/app/services/namestaj.service";

@Component({
  selector: "app-deo-namestaja-dodaj",
  templateUrl: "./deo-namestaja-dodaj.component.html",
  styleUrls: ["./deo-namestaja-dodaj.component.css"],
})
export class DeoNamestajaDodajComponent implements OnInit {
  @Output() onSubmit: EventEmitter<DeoNamestaja> = new EventEmitter();

  noviDeoNamestaja: DeoNamestaja = {
    id: null,
    namestajId: null,
    deoId: null,
    komada: null,
  };

  namestaji: Namestaj[];
  delovi: Deo[];

  izabranNamestajId: number = null;
  izabranDeoId: number = null;

  constructor(
    private namestajService: NamestajService,
    private deoService: DeoService
  ) {}

  ngOnInit(): void {
    this.namestajService.dobaviSve().subscribe((response) => {
      this.namestaji = response;
    });
    this.deoService.dobaviSve().subscribe((response) => {
      this.delovi = response;
    });
  }

  prosledi() {
    this.noviDeoNamestaja.namestajId = this.izabranNamestajId;
    this.noviDeoNamestaja.deoId = this.izabranDeoId;
    this.onSubmit.emit(this.noviDeoNamestaja);
  }
}
