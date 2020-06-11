import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DeoNamestaja } from "src/app/model/DeoNamestaja";
import { DeoNamestajaService } from "src/app/services/deo-namestaja.service";

@Component({
  selector: "app-deo-namestaja",
  templateUrl: "./deo-namestaja.component.html",
  styleUrls: ["./deo-namestaja.component.css"],
})
export class DeoNamestajaComponent implements OnInit {
  constructor(
    private deoNamestajaService: DeoNamestajaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deoNamestaja: DeoNamestaja = {
    id: null,
    namestajId: null,
    deoId: null,
    komada: null,
  };

  ngOnInit(): void {
    this.dobaviDeo();
  }

  dobaviDeo() {
    this.deoNamestajaService
      .dobaviJednog(this.route.snapshot.params["id"])
      .subscribe((response) => (this.deoNamestaja = response));
  }

  otvoriIzmenu() {
    this.router.navigate(["/deoNamestaja", this.deoNamestaja.id, "izmeni"]);
  }
}
