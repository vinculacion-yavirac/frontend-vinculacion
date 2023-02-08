import { Injectable } from '@angular/core';
import { Anexos } from '../../../models/pestanias/anexos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnexosService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/anexos"

  public save(anexos: Anexos): Observable<Anexos>{
    return this.http.post<Anexos>(this.url+"/save", anexos, this.httpOptions);
  }

  public findById(id: number): Observable<Anexos>{
    return this.http.get<Anexos>(this.url+"/"+id, this.httpOptions);
  }
}
