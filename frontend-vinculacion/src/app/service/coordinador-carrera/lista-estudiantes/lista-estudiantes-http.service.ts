import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/models/coordinador-carrera/person';

@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/persona";

  public save(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url+"/save",persona, this.httpOption);
  }

  public findById(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.url+"/"+id, this.httpOption);
  }

  public update(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.url+"/update"+persona.id,persona, this.httpOption);
  }

  public deleteById(id: number): Observable<Persona>{
    return this.http.delete<Persona>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"/findAll",this.httpOption);
  }

  public findByDescription(term: string):Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"/findByTipoSolicitud/"+term,this.httpOption);
  }
}
