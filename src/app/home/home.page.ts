import { Component } from '@angular/core';
import { StorageService ,Des} from '../services/storage.service';
import { Platform } from '@ionic/angular';
export const coordenadasCarX = 469;
export const coordenadasCarY = 50;
export const token = 6;
var canvas: any;
var canvasa: any;
var iluminacion = 1;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items:Des[] = []
  est:any = 0;

  constructor(private storageService:StorageService) {
   
  }

  loadItems() {
    this.storageService.addItem().then(items =>{
      this.items = items;
      let itemCoordenada = this.items.filter(coor => coor.id == token);
      this.est = itemCoordenada[0].nombre;
    })
  }

  getItem() {
    this.storageService.loadItem();
  }  

  /*getCoordinates(event){
      let Y =(event.offsetY + 15);
      let X = (event.offsetX + 5);   
      console.log(Y);
      console.log(X);
    }*/

    redirect(){
      location.reload();
    }


  SetRuta()
  {

  let itemCoordenada = this.items.filter(coor => coor.id == token);
  draw(itemCoordenada)

  setInterval(function () {
    SetRutaAgain(itemCoordenada);
  }, 2000);

  function draw(ite) {    

    if (document.getElementById("video")) {
      document.getElementById("video").remove();
    }

    let elm = document.getElementById('auto');
    elm.setAttribute("style", "display:block");

    elm = document.getElementById('myCanvas');
    elm.setAttribute("style","display:block");

    elm = document.getElementById('footer');
    elm.setAttribute("style","display:block");

    elm = document.getElementById('header');
    elm.setAttribute("style","display:block");

    elm = document.getElementById('content');
    elm.setAttribute("style","display:none");

    elm = document.getElementById('fixed');
    elm.setAttribute("style","position: relative;height: 90%;width: 100%;overflow: scroll;");

    let coordenadaX = coordenadasCarX;
    let coordenadaY = coordenadasCarY;

    let coordenadas = ite[0].coordenadas;

    let arrCoordenadas = coordenadas.split(',');

     canvas = document.getElementById("myCanvas")
     var ctx = canvas.getContext("2d");
     ctx.clearRect(0, 0, 800, 500);
     ctx.beginPath();
     ctx.moveTo(coordenadasCarX, coordenadasCarY);  
     ctx.lineWidth = 4;
     ctx.strokeStyle = "rgba(47,71,147,1)";

     for(var ar in arrCoordenadas){
        var jsonCoordenadas = JSON.parse(arrCoordenadas[ar])

        if(jsonCoordenadas.hasOwnProperty("x")){
          if(coordenadaX > jsonCoordenadas.x){
            for (var i = coordenadaX; i >= jsonCoordenadas.x; i--){
              doSetTimeoutXNegativo(i,coordenadaY)
            }
            coordenadaX = jsonCoordenadas.x;
          }else{
            for (var i = coordenadaX; i <= jsonCoordenadas.x; i++){
              doSetTimeoutXPositivo(i,coordenadaY);
            }
            coordenadaX = jsonCoordenadas.x;
          }
        }else{
          if(coordenadaY > jsonCoordenadas.y){
            for (var i = coordenadaY; i >= jsonCoordenadas.y; i--){
              doSetTimeoutYNegativo(coordenadaX,i)
            }
            coordenadaY = jsonCoordenadas.y;
          }else{
            for (var i = coordenadaY; i <= jsonCoordenadas.y; i++){
              doSetTimeoutYPositivo(coordenadaX,i);
            }
            coordenadaY = jsonCoordenadas.y;
          }
        }
     }
     
     ctx.closePath();

     function doSetTimeoutXPositivo(x,y) {
      setTimeout(function () {
        ctx.lineTo(x, y);
        ctx.stroke();
      }, 2000);
    }

    function doSetTimeoutXNegativo(x,y) {
      setTimeout(function () {
        ctx.lineTo(x, y);
        ctx.stroke();
      }, 2000);
    }

    function doSetTimeoutYPositivo(x,y) {
      setTimeout(function() { 
        ctx.lineTo(x, y);
        ctx.stroke();
       }, 2000);
    }

    function doSetTimeoutYNegativo(x,y) {
      setTimeout(function() { 
        ctx.lineTo(x, y);
        ctx.stroke();
       }, 2000);
    }
  }

    function SetRutaAgain(ite)
    {
      let itemCoordenada = ite;
      let coordenadaX = coordenadasCarX;
      let coordenadaY = coordenadasCarY;
      let coordenadas = itemCoordenada[0].coordenadas;
  
      let arrCoordenadas = coordenadas.split(',');
  
       canvasa = document.getElementById("myCanvas")
       var ctxa = canvasa.getContext("2d");
       ctxa.beginPath();
       ctxa.moveTo(coordenadasCarX, coordenadasCarY);  
       ctxa.lineWidth = 4;
       ctxa.strokeStyle = "rgba(47,71,147,1)";

       if(iluminacion === 0){
        ctxa.shadowBlur = 2;
        ctxa.shadowColor = "#c4a300";
        iluminacion = 1;
       } else{
        ctxa.shadowBlur = 3;
        ctxa.shadowColor = "#fff";
        iluminacion = 0;
       }
  
       for(var ar in arrCoordenadas){
          var jsonCoordenadas = JSON.parse(arrCoordenadas[ar])
  
          if(jsonCoordenadas.hasOwnProperty("x")){
            if(coordenadaX > jsonCoordenadas.x){
              for (var i = coordenadaX; i >= jsonCoordenadas.x; i--){
                doSetTimeoutXNegativo(i,coordenadaY)
              }
              coordenadaX = jsonCoordenadas.x;
            }else{
              for (var i = coordenadaX; i <= jsonCoordenadas.x; i++){
                doSetTimeoutXPositivo(i,coordenadaY);
              }
              coordenadaX = jsonCoordenadas.x;
            }
          }else{
            if(coordenadaY > jsonCoordenadas.y){
              for (var i = coordenadaY; i >= jsonCoordenadas.y; i--){
                doSetTimeoutYNegativo(coordenadaX,i)
              }
              coordenadaY = jsonCoordenadas.y;
            }else{
              for (var i = coordenadaY; i <= jsonCoordenadas.y; i++){
                doSetTimeoutYPositivo(coordenadaX,i);
              }
              coordenadaY = jsonCoordenadas.y;
            }
          }
       }
  
       ctxa.closePath();
  
       function doSetTimeoutXPositivo(x,y) {
        setTimeout(function () {
          ctxa.lineTo(x, y);
          //ctxa.setLineDash([2, 2]);
          ctxa.stroke();
        }, 2000);
      }
      
  
      function doSetTimeoutXNegativo(x,y) {
        setTimeout(function () {
          ctxa.lineTo(x, y);
          //ctxa.setLineDash([2, 2]);
          ctxa.stroke();
        }, 2000);
      }
  
      function doSetTimeoutYPositivo(x,y) {
        setTimeout(function() { 
          ctxa.lineTo(x, y);
          //ctxa.setLineDash([2, 2]);
          ctxa.stroke();
         }, 2000);
      }
  
      function doSetTimeoutYNegativo(x,y) {
        setTimeout(function() { 
          ctxa.lineTo(x, y);
          //ctxa.setLineDash([2, 2]);
          ctxa.stroke();
         }, 2000);
      }
    }
  } 
}


