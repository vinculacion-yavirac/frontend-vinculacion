import { Injectable } from '@angular/core';
import { Empresa } from '../../../models/pestanias/empresa';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/empresa"

  public save(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url+"/save", empresa, this.httpOptions);
  }

  public findById(id: number): Observable<Empresa>{
    return this.http.get<Empresa>(this.url+"/"+id, this.httpOptions);
  }
}
