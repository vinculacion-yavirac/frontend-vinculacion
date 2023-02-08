import { Injectable } from '@angular/core';
import { PlanDeTrabajo } from '../../../models/pestanias/plan-de-trabajo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanDeTrabajoService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: String = "http://localhost:8080/api/plan-de-trabajo"

  public save(planDeTrabajo: PlanDeTrabajo): Observable<PlanDeTrabajo>{
    return this.http.post<PlanDeTrabajo>(this.url+"/save", planDeTrabajo, this.httpOptions);
  }

  public findById(id: number): Observable<PlanDeTrabajo>{
    return this.http.get<PlanDeTrabajo>(this.url+"/"+id, this.httpOptions);
  }
}
