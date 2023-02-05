import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformeInicial } from 'src/app/models/docente-tutor/formulario-informe-inicial';


@Injectable({
  providedIn: 'root'
})
export class InformeInicialHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/informeinicial";

  public save(informeinicial: InformeInicial): Observable<InformeInicial>{
    return this.http.post<InformeInicial>(this.url+"/save",informeinicial, this.httpOption);
  }

  public findById(id: number): Observable<InformeInicial>{
    return this.http.get<InformeInicial>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<InformeInicial>{
    return this.http.delete<InformeInicial>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<InformeInicial[]>{
    return this.http.get<InformeInicial[]>(this.url,this.httpOption);
  }

  public findByDescription(term: string):Observable<InformeInicial[]>{
    return this.http.get<InformeInicial[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }

}