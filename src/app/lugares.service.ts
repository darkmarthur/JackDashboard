import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'esta1'},
    {id: 2, plan: 'gratuito', cercania: 2, distancia: 5, active: false, nombre: 'esta2'},
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 6, active: true, nombre: 'esta3'},
    {id: 4, plan: 'pagado', cercania: 1, distancia: 2, active: true, nombre: 'esta4'},
    {id: 5, plan: 'pagado', cercania: 1, distancia: 3, active: false, nombre: 'esta5'},
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: 'esta6'},
    {id: 7, plan: 'pagado', cercania: 1, distancia: 4, active: true, nombre: 'esta7'},
    {id: 8, plan: 'gratuito', cercania: 3, distancia: 12, active: false, nombre: 'esta8'},
    {id: 9, plan: 'pagado', cercania: 2, distancia: 18, active: true, nombre: 'esta9'},
  ];
  constructor() { }

  public getLugares() {
    return this.lugares;
  }

  public buscarLugar(id) {
    return this.lugares.filter(lugar => lugar.id == id)[0] || null;
  }
}
