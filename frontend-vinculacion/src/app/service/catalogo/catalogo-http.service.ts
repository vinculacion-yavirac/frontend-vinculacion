import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalogo } from 'src/app/models/catalogo/Catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoHttpService {
  
  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/catalogo";

  public save(catalogo: Catalogo): Observable<Catalogo>{
    return this.http.post<Catalogo>(this.url+"/save",catalogo, this.httpOption);
  }

  public findById(id: number): Observable<Catalogo>{
    return this.http.get<Catalogo>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<Catalogo>{
    return this.http.delete<Catalogo>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(this.url+"/findAll",this.httpOption);
  }

  public findByName(term: string):Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(this.url+"/findByNombre/"+term,this.httpOption);
  }
}
