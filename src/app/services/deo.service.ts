import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Deo } from "../model/Deo";

@Injectable({
  providedIn: "root",
})
export class DeoService {
  constructor(private http: HttpClient) {}

  dobaviSve(): Observable<Deo[]> {
    return this.http.get<Deo[]>(`http://localhost:3004/deo`);
  }

  dobaviJednog(id: number): Observable<Deo> {
    return this.http.get<Deo>(`http://localhost:3004/deo/${id}`);
  }
  dodaj(deo: Deo): Observable<Deo> {
    return this.http.post<Deo>(`http://localhost:3004/deo`, deo);
  }

  izmeni(deo: Deo): Observable<Deo> {
    return this.http.put<Deo>(`http://localhost:3004/deo/${deo.id}`, deo);
  }

  obrisi(id: number): Observable<Deo> {
    return this.http.delete<Deo>(`http://localhost:3004/deo/${id}`);
  }
}
