import { Injectable } from '@angular/core';
import { DatosGenerales } from '../../../models/pestanias/datos-generales';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/datos-generales"

  public save(datosGenerales: DatosGenerales): Observable<DatosGenerales>{
    return this.http.post<DatosGenerales>(this.url+"/save", datosGenerales, this.httpOptions);
  }

  public findById(id: number): Observable<DatosGenerales>{
    return this.http.get<DatosGenerales>(this.url+"/"+id, this.httpOptions);
  }
}
