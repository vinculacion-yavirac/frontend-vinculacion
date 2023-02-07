import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectoVinculacion } from 'src/app/models/docente-vinculacion/proyecto-vinculacion';

@Injectable({
  providedIn: 'root'
})
export class ProyectoVinculacionHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/proyecto";

  public save(proyectoVinculacion: ProyectoVinculacion): Observable<ProyectoVinculacion>{
    return this.http.post<ProyectoVinculacion>(this.url+"/save",proyectoVinculacion.id, this.httpOption);
  }

  public update(proyectoVinculacion: ProyectoVinculacion): Observable<ProyectoVinculacion>{
    return this.http.put<ProyectoVinculacion>(this.url+"/update",proyectoVinculacion.id, this.httpOption);
  }

  public findById(id: number): Observable<ProyectoVinculacion>{
    return this.http.get<ProyectoVinculacion>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<ProyectoVinculacion>{
    return this.http.delete<ProyectoVinculacion>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<ProyectoVinculacion[]>{
    return this.http.get<ProyectoVinculacion[]>(this.url+"/findAll",this.httpOption);
  }

  public findByNombre(term: string):Observable<ProyectoVinculacion[]>{
    return this.http.get<ProyectoVinculacion[]>(this.url+"/findByNombre/"+term,this.httpOption);
  }
}
