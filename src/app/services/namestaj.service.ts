import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Namestaj } from "../model/Namestaj";

@Injectable({
  providedIn: "root",
})
export class NamestajService {
  constructor(private http: HttpClient) {}

  dobaviSve(): Observable<Namestaj[]> {
    return this.http.get<Namestaj[]>(`http://localhost:3004/namestaj`);
  }

  dobaviJednog(id: number): Observable<Namestaj> {
    return this.http.get<Namestaj>(`http://localhost:3004/namestaj/${id}`);
  }

  dodaj(namestaj: Namestaj): Observable<Namestaj> {
    return this.http.post<Namestaj>(`http://localhost:3004/namestaj`, namestaj);
  }

  izmeni(namestaj: Namestaj): Observable<Namestaj> {
    return this.http.put<Namestaj>(
      `http://localhost:3004/namestaj/${namestaj.id}`,
      namestaj
    );
  }

  obrisi(id: number): Observable<Namestaj> {
    return this.http.delete<Namestaj>(`http://localhost:3004/namestaj/${id}`);
  }
}
