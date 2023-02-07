import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vista } from 'src/app/models/vista/vista';

@Injectable({
  providedIn: 'root'
})
export class VistHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/vista";

  public findAll():Observable<Vista[]>{
    return this.http.get<Vista[]>(this.url+"/findAll",this.httpOption);
  }

  public findByTipoSolicitud(term: string):Observable<Vista[]>{
    return this.http.get<Vista[]>(this.url+"/findByTipoSolicitud/"+term,this.httpOption);
  }
}
