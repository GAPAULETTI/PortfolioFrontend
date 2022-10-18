import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;
  constructor(private service: ExperienciaService) { }

  ngOnInit(): void {
    this.service.getExperiencia().subscribe(data=> {this.experiencia=data;
    });
  }

}
