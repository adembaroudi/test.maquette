import { Component, OnInit } from '@angular/core';
import { ServiceOlaService } from '../service-ola.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  mazout = [];
  flous = [];
  total = [];
  constructor(private Service: ServiceOlaService) { }

  ngOnInit() {
    this.mazout = this.Service.carburant;
    this.flous = this.Service.carburant;
    this.total = this.Service.carburant;
  }

}
