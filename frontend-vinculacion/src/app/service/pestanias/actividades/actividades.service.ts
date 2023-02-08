import { Injectable } from '@angular/core';
import { Actividades } from '../../../models/pestanias/actividades';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/actividades"

  public save(actividades: Actividades): Observable<Actividades>{
    return this.http.post<Actividades>(this.url+"/save", actividades, this.httpOptions);
  }

  public findById(id: number): Observable<Actividades>{
    return this.http.get<Actividades>(this.url+"/"+id, this.httpOptions);
  }
}
