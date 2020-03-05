import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getAllSystem() {
    let allSystem: Observable<any[]>;
    allSystem = this.http.get<any[]>('../../assets/data/system.json');
    return allSystem;
  }

  public getAllSystemOceano() {
    let allSystemOceano: Observable<any[]>;
    allSystemOceano = this.http.get<any[]>('../../assets/data/systemOceano.json');
    return allSystemOceano;
  }

  public getAllThematic() {
    let allThematic: Observable<any[]>;
    allThematic = this.http.get<any[]>('../../assets/data/thematic.json');
    return allThematic;
  }

  public getAllSource() {
    let allSource: Observable<any[]>;
    allSource = this.http.get<any[]>('../../assets/data/source.json');
    return allSource;
  }
}
