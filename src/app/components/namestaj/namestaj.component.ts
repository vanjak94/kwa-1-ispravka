import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Namestaj } from "src/app/model/Namestaj";
import { NamestajService } from "src/app/services/namestaj.service";

@Component({
  selector: "app-namestaj",
  templateUrl: "./namestaj.component.html",
  styleUrls: ["./namestaj.component.css"],
})
export class NamestajComponent implements OnInit {
  constructor(
    private namestajService: NamestajService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  namestaj: Namestaj = {
    id: null,
    naziv: "",
    opis: "",
    cena: null,
  };

  ngOnInit(): void {
    this.dobaviNamestaj();
  }

  dobaviNamestaj() {
    this.namestajService
      .dobaviJednog(this.route.snapshot.params["id"])
      .subscribe((response) => {
        this.namestaj = response;
      });
  }

  otvoriIzmenu() {
    this.router.navigate(["/namestaj", this.namestaj.id, "izmeni"]);
  }
}
