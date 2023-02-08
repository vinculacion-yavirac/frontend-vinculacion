import { Injectable } from '@angular/core';
import { Firmas } from '../../../models/pestanias/firmas';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirmasService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/firmas"

  public save(firmas: Firmas): Observable<Firmas>{
    return this.http.post<Firmas>(this.url+"/save", firmas, this.httpOptions);
  }

  public findById(id: number): Observable<Firmas>{
    return this.http.get<Firmas>(this.url+"/"+id, this.httpOptions);
  }
}
