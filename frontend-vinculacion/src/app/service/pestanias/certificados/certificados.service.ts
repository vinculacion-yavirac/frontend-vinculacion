import { Injectable } from '@angular/core';
import { Certificados } from '../../../models/pestanias/certificados';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/certificados"

  public save(certificados: Certificados): Observable<Certificados>{
    return this.http.post<Certificados>(this.url+"/save", certificados, this.httpOptions);
  }

  public findById(id: number): Observable<Certificados>{
    return this.http.get<Certificados>(this.url+"/"+id, this.httpOptions);
  }
}

