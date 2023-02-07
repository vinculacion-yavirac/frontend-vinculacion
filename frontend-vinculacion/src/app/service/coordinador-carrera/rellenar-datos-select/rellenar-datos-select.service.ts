import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalogo } from 'src/app/models/catalogo/Catalogo';

@Injectable({
  providedIn: 'root'
})
export class RellenarDatosSelectService {

  constructor(
    private http: HttpClient
    ) { }

    private httpOption ={
      headers: new HttpHeaders({"Content-Type":"application/json"})
    }

    private url: string = "http://localhost:8080/api/catalogo";

    public save(catalogo:Catalogo): Observable<Catalogo>{
      return this.http.post<Catalogo>(this.url+"/save",catalogo, this.httpOption);
    }

    public findById(id: number): Observable<Catalogo>{
      return this.http.get<Catalogo>(this.url+"/"+id, this.httpOption);
    }

    public deleteById(id: number): Observable<Catalogo>{
      return this.http.delete<Catalogo>(this.url+"/deleteById/"+id,this.httpOption);
    }

    public findAll():Observable<Catalogo[]>{
      return this.http.get<Catalogo[]>(this.url,this.httpOption);
    }

    public findByDescription(term: string):Observable<Catalogo[]>{
      return this.http.get<Catalogo[]>(this.url+"/findByDescription/"+term,this.httpOption);
    }




}
