import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Deo } from "src/app/model/Deo";
import { DeoNamestaja } from "src/app/model/DeoNamestaja";
import { Namestaj } from "src/app/model/Namestaj";
import { DeoNamestajaService } from "src/app/services/deo-namestaja.service";
import { DeoService } from "src/app/services/deo.service";
import { NamestajService } from "src/app/services/namestaj.service";

@Component({
  selector: "app-deo-namestaja-izmeni",
  templateUrl: "./deo-namestaja-izmeni.component.html",
  styleUrls: ["./deo-namestaja-izmeni.component.css"],
})
export class DeoNamestajaIzmeniComponent implements OnInit {
  constructor(
    private deoNamestajaService: DeoNamestajaService,
    private route: ActivatedRoute,
    private router: Router,
    private namestajService: NamestajService,
    private deoService: DeoService
  ) {}

  delovi: Deo[];
  namestaji: Namestaj[];

  izabranNamestajId: number;
  izabranDeoId: number;

  deoNamestaja: DeoNamestaja = {
    id: null,
    namestajId: null,
    deoId: null,
    komada: null,
  };

  ngOnInit(): void {
    this.deoNamestajaService
      .dobaviJednog(this.route.snapshot.params["id"])
      .subscribe((response) => (this.deoNamestaja = response));
    this.namestajService
      .dobaviSve()
      .subscribe((response) => (this.namestaji = response));
    this.deoService
      .dobaviSve()
      .subscribe((response) => (this.delovi = response));
  }

  izmeni() {
    this.deoNamestaja.namestajId = this.izabranNamestajId;
    this.deoNamestaja.deoId = this.izabranDeoId;
    this.deoNamestajaService.izmeni(this.deoNamestaja).subscribe(() => {
      this.router.navigate(["/deoNamestaja"]);
    });
  }
}
