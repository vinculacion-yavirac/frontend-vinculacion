import { Injectable } from '@angular/core';
import { Documentos } from '../../../models/pestanias/documentos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/documentos"

  public save(documentos: Documentos): Observable<Documentos>{
    return this.http.post<Documentos>(this.url+"/save", documentos, this.httpOptions);
  }

  public findById(id: number): Observable<Documentos>{
    return this.http.get<Documentos>(this.url+"/"+id, this.httpOptions);
  }
}
