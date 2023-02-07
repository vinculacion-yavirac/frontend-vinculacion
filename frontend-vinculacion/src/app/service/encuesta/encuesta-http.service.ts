import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PreguntaModel } from 'src/app/models/encuesta/pregunta.model';


@Injectable({
  providedIn: 'root'
})
export class EncuestaHttpService {

  constructor(private httpClient: HttpClient) {

   }

   private httpOptions={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }


   private url: string = "http://localhost:8080/api/pregunta";

   getAll():Observable<PreguntaModel[]> {

    return this.httpClient.get<PreguntaModel[]>(this.url+"/findAll", this.httpOptions);
  }

  create(pregunta: PreguntaModel):Observable<PreguntaModel> {

    return this.httpClient.post<PreguntaModel>(this.url+"/save",pregunta, this.httpOptions);
  }

  public findById(id: number): Observable<PreguntaModel>{
    return this.httpClient.get<PreguntaModel>(this.url+"/findById/"+id, this.httpOptions);
  }

  deleteById(id: number): Observable<PreguntaModel>{
    return this.httpClient.delete<PreguntaModel>(this.url+"/deleteById/"+id,this.httpOptions)
  }



}
