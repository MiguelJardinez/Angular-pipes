import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitan America';

  nombre2 = 'mIgUEl AnGeL JArDiNeZ rAmOS';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje = 0.258;

  salario = 1234.5;

  fecha: Date = new Date(); 

  idioma: string = 'es-MX';

  videoUrl: string = 'https://www.youtube.com/embed/1Nr_tqkMsJs?controls=0';

  activar: boolean = true;

  valorPromesa = new Promise<string> ((resolve) => {

  setTimeout(() => {
    resolve('Solicitud Procesada')
  }, 4500);

  });


  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'alegria',
      casa: 519
    }
  }
}