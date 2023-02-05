import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservacionAvance } from 'src/app/models/informe-control/observacion-avance';
import { ObservacionAvanceComponent } from 'src/app/pages/informe-control/observacion-avance/observacion-avance.component';

@Injectable({
  providedIn: 'root'
})
export class ObservacionAvanceHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/observacionesavance/";

  public save(observacionAvance: ObservacionAvance): Observable<ObservacionAvance>{
    return this.http.post<ObservacionAvance>(this.url+"save",observacionAvance, this.httpOption);
  }

  public findById(id: number): Observable<ObservacionAvance>{
    return this.http.get<ObservacionAvance>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<ObservacionAvance>{
    return this.http.delete<ObservacionAvance>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<ObservacionAvance[]>{
    return this.http.get<ObservacionAvance[]>(this.url,this.httpOption);
  }

  public findByDescription(term: string):Observable<ObservacionAvance[]>{
    return this.http.get<ObservacionAvance[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }

}
