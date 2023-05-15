import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role/rol';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RolHttpService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/roles';

  // GET /roles
  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.url);
  }

  // GET /roles/:id
  public getRol(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.url}/${id}`);
  }

  // POST /roles/create
  public addRol(rol: Role): Observable<Role> {
    return this.http.post<Role>(`${this.url}/create`, rol, this.httpOptions);
  }

  // PUT /roles/update/:id
  public updateRol(rol: Role): Observable<Role> {
    return this.http.put<Role>(`${this.url}/update/${rol.id}`, rol, this.httpOptions);
  }
  // GET /roles/archived/list
  public getRolesArchived(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.url}/archived/list`);
  }

  // PUT /roles/archive/:id
  public archiveRol(id: number): Observable<Role> {
    return this.http.put<Role>(`${this.url}/archive/${id}`, this.httpOptions);
  }
  // PUT /roles/restore/:id
  public restoreRol(id: number): Observable<Role> {
    return this.http.put<Role>(`${this.url}/restore/${id}`, this.httpOptions);
  }
  // DELETE /roles/delete/:id
  public deleteRol(id: number): Observable<Role> {
    return this.http.delete<Role>(`${this.url}/delete/${id}`);
  }

  // GET /roles/search/term/:term
  public searchRolesByTerm(term: string): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.url}/search/term/${term}`);
  }

  // GET /roles/archived/search/term/:term
  public searchRolesArchivedByTerm(term: string): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.url}/archived/search/term/${term}`);
  }

  // GET /roles/validate/name/:name/:id?
  public checkRolNameIsAvailable(name: string, id?: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/validate/name/${name}/${id}`);
  }
}
