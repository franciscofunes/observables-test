import { Component, OnInit } from '@angular/core';
import { Persona, PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass'],
})
export class ListaComponent implements OnInit {
  //Como es propiedad de la clase lo voy a poder usar en el html
  arrPersonas: Persona[];

  // Inyectamos el servicio en el constructor
  constructor(private personasService: PersonasService) {
    this.arrPersonas = [];
  }

  // desde el ng on init me voy a suscribir al observable que esta en el servicio, ya que ahi estaran los cambios que se producen dentro del servicio
  ngOnInit(): void {
    // en la suscripcion voy a recibir el array de personas que esta en el servicio desde cualquier lugar
    this.personasService.getPersonas$().subscribe((personas) => {
      //Definimos que array de personas sera igual a lo que me devuelva ese observable
      this.arrPersonas = personas;
    });
  }
}
