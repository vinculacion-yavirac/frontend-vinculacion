import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RespuestaModel } from 'src/app/models/encuesta/respuesta.model';



@Injectable({
  providedIn: 'root'
})
export class RespuestaHttpService {

  constructor(private httpClient: HttpClient) {

   }

   private httpOptions={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }


   private url: string = "http://localhost:8080/api/respuesta";

   getAll():Observable<RespuestaModel[]> {

    return this.httpClient.get<RespuestaModel[]>(this.url+"/findAll", this.httpOptions);
  }

  create(respuesta: RespuestaModel):Observable<RespuestaModel> {

    return this.httpClient.post<RespuestaModel>(this.url+"/save",respuesta, this.httpOptions);
  }

  public findById(id: number): Observable<RespuestaModel>{
    return this.httpClient.get<RespuestaModel>(this.url+"/findById/"+id, this.httpOptions);
  }

  deleteById(id: number): Observable<RespuestaModel>{
    return this.httpClient.delete<RespuestaModel>(this.url+"/deleteById/"+id,this.httpOptions)
  }

  // destroy(id:PreguntaModel['id']):Observable<any> {
  //   const url_ = `${this.url}/${id}`;
  //   return this.httpClient.delete<any>(url_).
  //   pipe(map((response:{rta:boolean})=>{return response.rta;})
  //   );}








}
