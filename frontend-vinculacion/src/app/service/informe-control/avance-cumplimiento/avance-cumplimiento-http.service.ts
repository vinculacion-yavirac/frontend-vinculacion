import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvanceCumplimiento } from 'src/app/models/informe-control/avance-cumplimiento';

@Injectable({
  providedIn: 'root'
})
export class AvanceCumplimientoHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/avancecumplimiento/";

  public save(avancesCumplimiento: AvanceCumplimiento): Observable<AvanceCumplimiento>{
    return this.http.post<AvanceCumplimiento>(this.url+"save",avancesCumplimiento, this.httpOption);
  }

  public findById(id: number): Observable<AvanceCumplimiento>{
    return this.http.get<AvanceCumplimiento>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<AvanceCumplimiento>{
    return this.http.delete<AvanceCumplimiento>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<AvanceCumplimiento[]>{
    return this.http.get<AvanceCumplimiento[]>(this.url,this.httpOption);
  }

  public findByDescription(term: string):Observable<AvanceCumplimiento[]>{
    return this.http.get<AvanceCumplimiento[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }

}
