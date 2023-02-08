import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VistaPortafolioEstudiante } from 'src/app/models/vista/vistaPortafolioEstudiante';

@Injectable({
  providedIn: 'root'
})
export class VistaPortafolioEstudianteHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/vistaPortafolioEstudiante";

  public findAll():Observable<VistaPortafolioEstudiante[]>{
    return this.http.get<VistaPortafolioEstudiante[]>(this.url+"/findAll",this.httpOption);
  }

  public findByTipoSolicitud(term: string):Observable<VistaPortafolioEstudiante[]>{
    return this.http.get<VistaPortafolioEstudiante[]>(this.url+"/findByNombre/"+term,this.httpOption);
  }

}
