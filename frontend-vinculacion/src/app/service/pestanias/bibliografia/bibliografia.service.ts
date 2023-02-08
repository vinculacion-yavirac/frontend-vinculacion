import { Injectable } from '@angular/core';
import { Bibliografia } from '../../../models/pestanias/bibliografia';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliografiaService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/bibliografia"

  public save(bibliografia: Bibliografia): Observable<Bibliografia>{
    return this.http.post<Bibliografia>(this.url+"/save", bibliografia, this.httpOptions);
  }

  public findById(id: number): Observable<Bibliografia>{
    return this.http.get<Bibliografia>(this.url+"/"+id, this.httpOptions);
  }
}
