import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignarFundacionVinculacion } from 'src/app/models/docente-vinculacion/asignar-fundacion-vinculacion';

@Injectable({
  providedIn: 'root'
})
export class AsignarFundacionVinculacionHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/fundacion";



  public save(asignarFundacionVinculacion: AsignarFundacionVinculacion): Observable<AsignarFundacionVinculacion>{
    return this.http.post<AsignarFundacionVinculacion>(this.url+"/save",asignarFundacionVinculacion, this.httpOption);
  }

  public findById(id: number): Observable<AsignarFundacionVinculacion>{
    return this.http.get<AsignarFundacionVinculacion>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<AsignarFundacionVinculacion>{
    return this.http.delete<AsignarFundacionVinculacion>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<AsignarFundacionVinculacion[]>{
    return this.http.get<AsignarFundacionVinculacion[]>(this.url+"/findAll",this.httpOption);
  }

  public findByName(term: string):Observable<AsignarFundacionVinculacion[]>{
    return this.http.get<AsignarFundacionVinculacion[]>(this.url+"/findByNombre/"+term,this.httpOption);
  }
}
