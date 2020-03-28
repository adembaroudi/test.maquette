import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceOlaService } from '../service-ola.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  index: FormGroup;
  total: any ;
  constructor(private Service: ServiceOlaService) { }

  ngOnInit() {
    this.index = new FormGroup({
      GAO1 : new FormControl(''),
      GAO2 : new FormControl(''),
      GAO3 : new FormControl(''),
      GAO4 : new FormControl(''),
      GAO5 : new FormControl(''),
      SP1 : new FormControl(''),
      SP2 : new FormControl(''),
      SP3 : new FormControl(''),
      SP4 : new FormControl(''),
      GSC1: new FormControl(''),
      GSC2: new FormControl(''),
      GSC3: new FormControl(''),
      GSC4: new FormControl(''),
      PET: new FormControl(''),
       BONS : new FormControl(''),
       ROLO : new FormControl(''),
       PIECES : new FormControl(''),
       BILLETS : new FormControl(''),
    });
    }
    ADD() {
      this.Service.ajout(this.index.value);
      console.log(this.index);
      console.log(this.Service.carburant);
    }
}
