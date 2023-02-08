import { Injectable } from '@angular/core';
import { Observaciones } from '../../../models/pestanias/observaciones';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservacionesService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/observaciones"

  public save(observaciones: Observaciones): Observable<Observaciones>{
    return this.http.post<Observaciones>(this.url+"/save", observaciones, this.httpOptions);
  }

  public findById(id: number): Observable<Observaciones>{
    return this.http.get<Observaciones>(this.url+"/"+id, this.httpOptions);
  }
}
