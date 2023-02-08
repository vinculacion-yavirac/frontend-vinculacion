import { Injectable } from '@angular/core';
import { Integrantes } from '../../../models/pestanias/integrantes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/integrantes"

  public save(integrantes: Integrantes): Observable<Integrantes>{
    return this.http.post<Integrantes>(this.url+"/save", integrantes, this.httpOptions);
  }

  public findById(id: number): Observable<Integrantes>{
    return this.http.get<Integrantes>(this.url+"/"+id, this.httpOptions);
  }
}
