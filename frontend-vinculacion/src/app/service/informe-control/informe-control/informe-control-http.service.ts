import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformeControl } from 'src/app/models/informe-control/informe-control';

@Injectable({
  providedIn: 'root'
})
export class InformeControlHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/informecontrol";

  public save(informeControl: InformeControl): Observable<InformeControl>{
    return this.http.post<InformeControl>(this.url+"/save",informeControl, this.httpOption);
  }

  public findById(id: number): Observable<InformeControl>{
    return this.http.get<InformeControl>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<InformeControl>{
    return this.http.delete<InformeControl>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<InformeControl[]>{
    return this.http.get<InformeControl[]>(this.url,this.httpOption);
  }

  public findByDescription(term: string):Observable<InformeControl[]>{
    return this.http.get<InformeControl[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }

}
