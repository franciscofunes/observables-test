import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  // Inyectamos el servicio en el constructor
  constructor(private personaService: PersonasService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      empresa: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
    });
  }

  ngOnInit(): void {}

  // Le paso los valores del formulario que tienen la misma estructura que cualquier persona que podamos insertar
  // Estos valores irian directamente en el array de personas y luego emitiriamos hacia fuera
  onSubmit() {
    this.personaService.agreagarPersona(this.formulario.value);
  }
}
