import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission } from 'src/app/models/permiso/permiso';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PermissionHttpService {

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url = environment.API_URL + '/permissions';

  // GET /permissions
  public getPermisos(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.url);
  }

  // GET /permissions/role/:id
  public getPermisosByRol(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(`${this.url}/role/${roleId}`);
  }
}
