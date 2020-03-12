import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {System} from '../models/system';
import {SystemOceano} from '../models/systemOceano';
import {Thematic} from '../models/thematic';
import {Source} from '../models/source';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getAllSystem() {
    let allSystem: Observable<System[]>;
    allSystem = this.http.get<System[]>('../../assets/data/system.json');
    return allSystem;
  }

  public getAllSystemOceano() {
    let allSystemOceano: Observable<SystemOceano[]>;
    allSystemOceano = this.http.get<SystemOceano[]>('../../assets/data/systemOceano.json');
    return allSystemOceano;
  }

  public getAllThematic() {
    let allThematic: Observable<Thematic[]>;
    allThematic = this.http.get<Thematic[]>('../../assets/data/thematic.json');
    return allThematic;
  }

  public getAllSource() {
    let allSource: Observable<Source[]>;
    allSource = this.http.get<Source[]>('../../assets/data/source.json');
    return allSource;
  }
}
