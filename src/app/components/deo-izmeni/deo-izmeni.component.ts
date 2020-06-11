import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Deo } from "src/app/model/Deo";
import { DeoService } from "src/app/services/deo.service";

@Component({
  selector: "app-deo-izmeni",
  templateUrl: "./deo-izmeni.component.html",
  styleUrls: ["./deo-izmeni.component.css"],
})
export class DeoIzmeniComponent implements OnInit {
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
    this.deoService
      .dobaviJednog(this.route.snapshot.params["id"])
      .subscribe((response) => (this.deo = response));
  }

  izmeni() {
    this.deoService.izmeni(this.deo).subscribe(() => {
      this.router.navigate(["/deo"]);
    });
  }
}
