import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaFundacionTutor } from 'src/app/models/docente-tutor/lista-fundacion-tutor';

@Injectable({
  providedIn: 'root'
})
export class ListaFundacionHttpService {
  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/fundacion";

  public save(listaFundacionTutor: ListaFundacionTutor): Observable<ListaFundacionTutor>{
    return this.http.post<ListaFundacionTutor>(this.url+"/save",listaFundacionTutor, this.httpOption);
  }

  public findById(id: number): Observable<ListaFundacionTutor>{
    return this.http.get<ListaFundacionTutor>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<ListaFundacionTutor>{
    return this.http.delete<ListaFundacionTutor>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<ListaFundacionTutor[]>{
    return this.http.get<ListaFundacionTutor[]>(this.url+"/findAll",this.httpOption);
  }

  public findByDescription(term: string):Observable<ListaFundacionTutor[]>{
    return this.http.get<ListaFundacionTutor[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }
}
