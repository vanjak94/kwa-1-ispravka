import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Deo } from "src/app/model/Deo";

@Component({
  selector: "app-deo-dodaj",
  templateUrl: "./deo-dodaj.component.html",
  styleUrls: ["./deo-dodaj.component.css"],
})
export class DeoDodajComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<Deo> = new EventEmitter();

  noviDeo: Deo = {
    id: null,
    naziv: "",
    dimenzije: "",
  };

  constructor() {}

  ngOnInit(): void {}

  prosledi() {
    this.onSubmit.emit(this.noviDeo);
  }
}
