import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VistaFundacionEstudiante } from 'src/app/models/vista/vistaFundacionEstudiante';

@Injectable({
  providedIn: 'root'
})
export class VistaFundacionEstudianteHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/vistaFundacionEstudiante";

  public findAll():Observable<VistaFundacionEstudiante[]>{
    return this.http.get<VistaFundacionEstudiante[]>(this.url+"/findAll",this.httpOption);
  }

  public findByTipoSolicitud(term: string):Observable<VistaFundacionEstudiante[]>{
    return this.http.get<VistaFundacionEstudiante[]>(this.url+"/findByNombre/"+term,this.httpOption);
  }

}
