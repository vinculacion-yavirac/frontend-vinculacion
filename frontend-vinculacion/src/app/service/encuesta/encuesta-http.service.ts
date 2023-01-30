import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateRespuestaDto, RespuestaModel, UpdateRespuestaDto } from 'src/app/models/encuesta/respuesta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaHttpService {
  readonly API_URL = 'http://localhost:4200/encuesta';
  constructor(private httpClient: HttpClient) {

   }

   getAll():Observable<RespuestaModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<RespuestaModel[]>(url);
  }

  create(product: CreateRespuestaDto):Observable<RespuestaModel> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<RespuestaModel>(url, product);
  }
  update(id:RespuestaModel['id'], product: UpdateRespuestaDto):Observable<RespuestaModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put<RespuestaModel>(url, product);
  }
  destroy(id:RespuestaModel['id']):Observable<any> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<any>(url).
    pipe(map((response:{rta:boolean})=>{return response.rta;})
    );
  }


}
