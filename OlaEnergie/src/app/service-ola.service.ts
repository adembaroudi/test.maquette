import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceOlaService {
  carburant =  JSON.parse(localStorage.getItem('ajout')) || [];
  gaotot: any ;

  constructor() { }
  ajout(index) {
    const tot = JSON.parse(localStorage.getItem('ajout')) || [];
    tot.map((e) => {
    this.gaotot = e.GAO1 + e.GAO2;
    });
    this.carburant.push(index);
    localStorage.setItem('ajout', JSON.stringify(this.carburant));

    console.log(this.carburant);
   }
   total() {
    const tot = JSON.parse(localStorage.getItem('ajout')) || [];
    let gaotot = Number ;
    tot.map((e) => {
   gaotot = e.GAO1 + e.GAO2;
    });


   }
}
