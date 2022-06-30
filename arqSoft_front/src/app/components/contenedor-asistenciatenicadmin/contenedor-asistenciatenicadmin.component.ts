import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../services/autorizacion.service';
@Component({
  selector: 'app-contenedor-asistenciatenicadmin',
  templateUrl: './contenedor-asistenciatenicadmin.component.html',
  styleUrls: ['./contenedor-asistenciatenicadmin.component.css']
})
export class ContenedorAsistenciatenicadminComponent implements OnInit {
  mostrarCardstecnico: boolean = true;
  mostrarCardsAdmin: boolean = true;
  mostrarFormulario: boolean = true;

  constructor(
    public autorizacion: AutorizacionService
  ) { }

  ngOnInit(): void {
    this.mostrarCardstecnico = false;
  }

}
