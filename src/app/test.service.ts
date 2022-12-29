import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objectivemodel, testinp } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  getDt() : Observable<any>{
    return this.h.get('http://localhost:8085/users');
  }

  public getObj(vals : testinp) : Observable<any>{
    return this.h.post('http://localhost:8085/getProjects',vals,{responseType:'json'})
  }

  // getObj() : Observable<any>{
  //   return this.h.get('http://localhost:8085/getobjs');
  // }

  constructor(private h :HttpClient) { }
}
