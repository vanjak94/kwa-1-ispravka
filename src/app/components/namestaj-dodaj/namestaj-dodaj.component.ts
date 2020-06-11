import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Namestaj } from "src/app/model/Namestaj";

@Component({
  selector: "app-namestaj-dodaj",
  templateUrl: "./namestaj-dodaj.component.html",
  styleUrls: ["./namestaj-dodaj.component.css"],
})
export class NamestajDodajComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Namestaj> = new EventEmitter();

  noviNamestaj: Namestaj = {
    id: null,
    naziv: "",
    opis: "",
    cena: null,
  };

  constructor() {}

  ngOnInit(): void {}

  prosledi() {
    this.onSubmit.emit(this.noviNamestaj);
  }
}
