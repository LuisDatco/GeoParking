import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const ITEMS_KEY = 'my-items';

export interface Des {
  id: number,
  nombre: string,
  coordenadas:string,
  mapa:string
}

@Injectable({
  providedIn: 'root'
})

export class StorageService {

constructor(private storage: Storage) { }

addItem(): Promise<Des[]>{
  ///conecta api o servicio
  let destino = [];
  destino.push({
    id: 6,
    nombre: 'PARKING - 6',
    coordenadas: '{"x" : 192},{"y" : 163},{"x" : 163}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 42,
    nombre: 'PARKING - 42',
    coordenadas: '{"x" : 320},{"y" : 113},{"x" : 350}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  });
  this.storage.set(ITEMS_KEY,destino);
  return this.storage.get(ITEMS_KEY);
}

loadItem(): Promise<Des[]>{
  return this.storage.get(ITEMS_KEY);
}
};
