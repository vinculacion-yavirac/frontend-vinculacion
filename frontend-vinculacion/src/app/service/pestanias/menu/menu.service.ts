import { Injectable } from '@angular/core';
import { Menu } from '../../../models/pestanias/menu';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/datos-generales"

  public save(menu: Menu): Observable<Menu>{
    return this.http.post<Menu>(this.url+"/save", menu, this.httpOptions);
  }

  public findAll(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.url+"/findAll", this.httpOptions);
  }

  public findById(id: number): Observable<Menu>{
    return this.http.get<Menu>(this.url+"/"+id, this.httpOptions);
  }
}
