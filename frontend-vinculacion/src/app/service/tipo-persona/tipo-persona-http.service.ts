import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoPersona } from 'src/app/models/catalogo/TipoPersona';
@Injectable({
  providedIn: 'root'
})
export class TipoPersonaHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/tipo-persona";

  public save(tipoPersona: TipoPersona): Observable<TipoPersona>{
    return this.http.post<TipoPersona>(this.url+"/save",tipoPersona, this.httpOption);
  }

  public findById(id: number): Observable<TipoPersona>{
    return this.http.get<TipoPersona>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<TipoPersona>{
    return this.http.delete<TipoPersona>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<TipoPersona[]>{
    return this.http.get<TipoPersona[]>(this.url+"/findAll",this.httpOption);
  }

  public findByDescription(term: string):Observable<TipoPersona[]>{
    return this.http.get<TipoPersona[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }
}
