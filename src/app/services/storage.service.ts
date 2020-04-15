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
    id: 1,
    nombre: 'PARKING - 1',
    coordenadas: '{"x" : 200},{"y" : 36},{"x" : 160}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 6,
    nombre: 'PARKING - 6',
    coordenadas: '{"x" : 192},{"y" : 163},{"x" : 163}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 12,
    nombre: 'PARKING - 12',
    coordenadas: '{"x" : 192},{"y" : 315},{"x" : 163}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 15,
    nombre: 'PARKING - 15',
    coordenadas: '{"x" : 192},{"y" : 390},{"x" : 163}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 18,
    nombre: 'PARKING - 18',
    coordenadas: '{"x" : 192},{"y" : 467},{"x" : 163}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 21,
    nombre: 'PARKING - 21',
    coordenadas: '{"x" : 192},{"y" : 545},{"x" : 163}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 24,
    nombre: 'PARKING - 24',
    coordenadas: '{"x" : 192},{"y" : 140},{"x" : 240}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 27,
    nombre: 'PARKING - 27',
    coordenadas: '{"x" : 192},{"y" : 215},{"x" : 240}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 30,
    nombre: 'PARKING - 30',
    coordenadas: '{"x" : 320},{"y" : 113},{"x" : 290}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 33,
    nombre: 'PARKING - 33',
    coordenadas: '{"x" : 320},{"y" : 190},{"x" : 283}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 36,
    nombre: 'PARKING - 36',
    coordenadas: '{"x" : 320},{"y" : 266},{"x" : 290}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 41,
    nombre: 'PARKING - 41',
    coordenadas: '{"x" : 320},{"y" : 390},{"x" : 290}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 42,
    nombre: 'PARKING - 42',
    coordenadas: '{"x" : 320},{"y" : 113},{"x" : 350}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 45,
    nombre: 'PARKING - 45',
    coordenadas: '{"x" : 320},{"y" : 190},{"x" : 350}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 50,
    nombre: 'PARKING - 50',
    coordenadas: '{"x" : 320},{"y" : 315},{"x" : 350}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 51,
    nombre: 'PARKING - 51',
    coordenadas: '{"x" : 320},{"y" : 345},{"x" : 420}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 54,
    nombre: 'PARKING - 54',
    coordenadas: '{"x" : 320},{"y" : 365},{"x" : 380},{"y" : 420},{"x" : 420}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  },{
    id: 57,
    nombre: 'PARKING - 57',
    coordenadas: '{"x" : 320},{"y" : 365},{"x" : 380},{"y" : 498},{"x" : 420}',
    mapa:'../../../src/assets/img/ParkingDatco.png'
  });
  this.storage.set(ITEMS_KEY,destino);
  return this.storage.get(ITEMS_KEY);
}

loadItem(): Promise<Des[]>{
  return this.storage.get(ITEMS_KEY);
}
};
