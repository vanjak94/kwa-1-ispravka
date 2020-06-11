import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeoNamestaja } from "../model/DeoNamestaja";

@Injectable({
  providedIn: "root",
})
export class DeoNamestajaService {
  constructor(private http: HttpClient) {}

  dobaviSve(): Observable<DeoNamestaja[]> {
    return this.http.get<DeoNamestaja[]>(`http://localhost:3004/deoNamestaja`);
  }

  dobaviJednog(id: number): Observable<DeoNamestaja> {
    return this.http.get<DeoNamestaja>(
      `http://localhost:3004/deoNamestaja/${id}`
    );
  }

  dodaj(deoNamestaja: DeoNamestaja): Observable<DeoNamestaja> {
    return this.http.post<DeoNamestaja>(
      `http://localhost:3004/deoNamestaja`,
      deoNamestaja
    );
  }

  izmeni(deoNamestaja: DeoNamestaja): Observable<DeoNamestaja> {
    return this.http.put<DeoNamestaja>(
      `http://localhost:3004/deoNamestaja/${deoNamestaja.id}`,
      deoNamestaja
    );
  }

  obrisi(id: number): Observable<DeoNamestaja> {
    return this.http.delete<DeoNamestaja>(
      `http://localhost:3004/deoNamestaja/${id}`
    );
  }
}
