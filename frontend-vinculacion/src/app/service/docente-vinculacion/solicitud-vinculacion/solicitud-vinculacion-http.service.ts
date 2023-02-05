import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitdVinculacion } from 'src/app/models/docente-vinculacion/solicitud-vinculacion';

@Injectable({
  providedIn: 'root'
})
export class SolicitudVinculacionHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/solicitud";

  public save(solicitdVinculacion: SolicitdVinculacion): Observable<SolicitdVinculacion>{
    return this.http.post<SolicitdVinculacion>(this.url+"/save",solicitdVinculacion, this.httpOption);
  }

  public findById(id: number): Observable<SolicitdVinculacion>{
    return this.http.get<SolicitdVinculacion>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<SolicitdVinculacion>{
    return this.http.delete<SolicitdVinculacion>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<SolicitdVinculacion[]>{
    return this.http.get<SolicitdVinculacion[]>(this.url+"/findAll",this.httpOption);
  }

  public findByTipoSolicitud(term: string):Observable<SolicitdVinculacion[]>{
    return this.http.get<SolicitdVinculacion[]>(this.url+"/findByTipoSolicitud/"+term,this.httpOption);
  }

}
