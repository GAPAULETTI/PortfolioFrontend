import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  
  constructor(private Http:HttpClient) {}
  getExperiencia(): Observable<object>{
    return this.Http.get("Http://localhost:8080/ver/experiencia");
  }
  saveExperiencia(experiencia: Experiencia):Observable<any>{
    return this.Http.post("Http://localhost:8080/new/experiencia", experiencia);
  }
  
}

export interface experiencia{
    id: number;
    cargo: string;
    empresa: string;
    ciudad: string;
    inicio: Date;
    finalizacion: Date;
    tareasRealizadas: string;
}
