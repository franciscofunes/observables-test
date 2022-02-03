import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Persona {
  nombre: string;
  apellido: string;
  empresa: string;
  email: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private personas: Persona[];

  // normalmente los subjects los encontraremos con el simbolo $
  // Al subject hay que decirle cuando emita que es lo que va emitir, en este caso es un array de personas
  private personas$: Subject<Persona[]>;

  // inicializamos el subject para poder emitir los cambios
  constructor() {
    this.personas = [];
    this.personas$ = new Subject();
  }

  agreagarPersona(persona: Persona) {
    // Hacemos push para agregar la persona
    this.personas.push(persona);

    // Aca tenemos que indicar a todos los componentes que se han subscripto al observable que ha habido un cambio
    // Es decir el array ha sufrido un cambio y por eso lo vamos a volver a emitir
    // Para hacer esto a traves del subject usamos el metodo next y le tenemos que decir que es lo que queremos emitir
    this.personas$.next(this.personas);
  }

  // Como el subject es privado y ademas no se puede acceder desde afuera, tenemos que crear un metodo para poder acceder a el
  getPersonas$(): Observable<Persona[]> {
    // retornamos el subject y usamos el metodo asObservable para poder subscribirnos a el desde el exterior
    return this.personas$.asObservable();
  }
}
