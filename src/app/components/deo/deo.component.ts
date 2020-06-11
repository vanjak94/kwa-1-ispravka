import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Deo } from "src/app/model/Deo";
import { DeoService } from "src/app/services/deo.service";

@Component({
  selector: "app-deo",
  templateUrl: "./deo.component.html",
  styleUrls: ["./deo.component.css"],
})
export class DeoComponent implements OnInit {
  constructor(
    private deoService: DeoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deo: Deo = {
    id: null,
    naziv: "",
    dimenzije: "",
  };

  ngOnInit(): void {
    this.dobaviDeo();
  }

  dobaviDeo() {
    this.deoService
      .dobaviJednog(this.route.snapshot.params["id"])
      .subscribe((response) => (this.deo = response));
  }

  otvoriIzmenu() {
    this.router.navigate(["/deo", this.deo.id, "izmeni"]);
  }
}
