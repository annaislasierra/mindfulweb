import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage(): string {
    return 'Recuerda lo que importa: el momento presente, aquí y ahora. El pasado ya no está, el futuro aún no ha llegado.';
  }
}
