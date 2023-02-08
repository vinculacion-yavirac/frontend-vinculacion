import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VistaListaRoles } from 'src/app/models/vista/vistaListaRoles';

@Injectable({
  providedIn: 'root'
})
export class VistaListaRolesHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/vistaCoordinadorCarrera";

  public save(vistaListaRoles: VistaListaRoles): Observable<VistaListaRoles>{
    return this.http.post<VistaListaRoles>(this.url+"/save",vistaListaRoles, this.httpOption);
  }

  public findById(id: number): Observable<VistaListaRoles>{
    return this.http.get<VistaListaRoles>(this.url+"/"+id, this.httpOption);
  }

  public update(vistaListaRoles: VistaListaRoles): Observable<VistaListaRoles>{
    return this.http.put<VistaListaRoles>(this.url+"/update"+vistaListaRoles.id,vistaListaRoles, this.httpOption);
  }

  public deleteById(id: number): Observable<VistaListaRoles>{
    return this.http.delete<VistaListaRoles>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<VistaListaRoles[]>{
    return this.http.get<VistaListaRoles[]>(this.url+"/findAll",this.httpOption);
  }

  public findByDescription(term: string):Observable<VistaListaRoles[]>{
    return this.http.get<VistaListaRoles[]>(this.url+"/findByTipoSolicitud/"+term,this.httpOption);
  }
}
