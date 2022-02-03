import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  // Creo una propiedad que va a contener el numero de personas que estan en el array
  numPersonas: number;

  // Primero inyecto el servicio
  constructor(private personasService: PersonasService) {
    this.numPersonas = 0;
  }

  // En el hook ngOnInit me suscribo al observable que esta en el servicio
  ngOnInit(): void {
    this.personasService.getPersonas$().subscribe((personas) => {
      // Voy a recibir todo el array de personas que esta en el servicio pero solo me interesa el numero de personas por eso lo guardo en una variable
      this.numPersonas = personas.length;
    });
  }
}
