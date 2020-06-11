import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Namestaj } from "src/app/model/Namestaj";
import { NamestajService } from "src/app/services/namestaj.service";

@Component({
  selector: "app-namestaj-izmeni",
  templateUrl: "./namestaj-izmeni.component.html",
  styleUrls: ["./namestaj-izmeni.component.css"],
})
export class NamestajIzmeniComponent implements OnInit {
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
    this.namestajService
      .dobaviJednog(this.route.snapshot.params["id"])
      .subscribe((response) => (this.namestaj = response));
  }

  izmeni() {
    this.namestajService.izmeni(this.namestaj).subscribe(() => {
      this.router.navigate(["/namestaj"]);
    });
  }
}
