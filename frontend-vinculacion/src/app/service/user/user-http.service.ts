import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/users';

  // GET /users
  public getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  // GET /users/:id
  public getUsuario(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  // POST /users/create
  public addUsuario(usuario: User): Observable<User> {
    return this.http.post<User>(
      `${this.url}/create`,
      usuario,
      this.httpOptions
    );
  }

  // POST /users/email/send-credentials
  public sendEmailCredentials(usuario: User): Observable<User> {
    return this.http.post<User>(
      `${this.url}/email/send-credentials`,
      usuario,
      this.httpOptions
    );
  }

  //PUT /users/update-password/:id
  public updatePassword(password: any, id: number): Observable<User> {
    return this.http.put<User>(
      `${this.url}/update-password/${id}`,
      password,
      this.httpOptions
    );
  }

  // PUT /users/update/:id
  public updateUsuario(usuario: User): Observable<User> {
    return this.http.put<User>(
      `${this.url}/update/${usuario.id}`,
      usuario,
      this.httpOptions
    );
  }

  // GET /users/archived/list
  public getUsuariosArchived(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/archived/list`);
  }

  // PUT /users/archive/:id
  public archiveUsuario(id: number): Observable<User> {
    return this.http.put<User>(`${this.url}/archive/${id}`, this.httpOptions);
  }

  // PUT /users/restore/:id
  public restoreUsuario(id: number): Observable<User> {
    return this.http.put<User>(`${this.url}/restore/${id}`, this.httpOptions);
  }

  // DELETE /users/delete/:id
  public deleteUsuario(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/delete/${id}`, this.httpOptions);
  }

  // GET /users/search/value/:term
  public searchUsuariosByTerm(term: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.url}/search/term/${encodeURIComponent(term)}`
    );
  }

  // GET /users/archived/search/:term
  public searchUsuariosArchivedByTerm(term: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/archived/search/term/${term}`);
  }

  // GET /users/validate/identification/:identification/:id?
  public checkIdentificationIsAvailable(
    identification: string,
    id?: number
  ): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.url}/validate/identification/${identification}/${id}`
    );
  }

  // GET /users/validate/email/:email/:id?
  public checkEmailIsAvailable(
    email: string,
    id?: number
  ): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/validate/email/${email}/${id}`);
  }

  // GET /users/validate/password/:password/:id
  public checkPasswordMatch(password: string, id: number): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.url}/validate/password/${password}/${id}`
    );
  }
}
