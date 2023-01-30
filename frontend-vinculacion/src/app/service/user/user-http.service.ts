import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://127.0.0.1:8000/api/users/";

  public save(user: User): Observable<User>{
    return this.http.post<User>(this.url+"/save",user, this.httpOption);
  }

  public findById(id: number): Observable<User>{
    return this.http.get<User>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<User>{
    return this.http.delete<User>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<User[]>{
    return this.http.get<User[]>(this.url,this.httpOption);
  }

  public findByDescription(term: string):Observable<User[]>{
    return this.http.get<User[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }
}
