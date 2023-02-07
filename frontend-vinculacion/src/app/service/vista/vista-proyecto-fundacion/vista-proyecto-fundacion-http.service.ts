import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VistaProyectoFundacion } from 'src/app/models/vista/vista-proyecto-fundacion';

@Injectable({
  providedIn: 'root'
})
export class VistaProyectoFundacionHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/vista-proyecto";

  public findAll():Observable<VistaProyectoFundacion[]>{
    return this.http.get<VistaProyectoFundacion[]>(this.url+"/findAll",this.httpOption);
  }

  public findByNombre(term: string):Observable<VistaProyectoFundacion[]>{
    return this.http.get<VistaProyectoFundacion[]>(this.url+"/findByNombre/"+term,this.httpOption);
  }
}
