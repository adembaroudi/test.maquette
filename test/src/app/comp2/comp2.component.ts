import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  search = '';
  table: any;
  constructor() { }
  backgroundUrl ="https://img.freepik.com/free-photo/center-milky-way-galaxy-night-sky_101276-143.jpg?size=626&ext=jpg";

  ngOnInit() {
    this.table = [
      {name  : 'adem' , phone : '12354'},
      {name : 'naim' , phone : '56789'},
      {name : 'wael', phone : '8520258'},
      {name : 'riadh' , phone : '45663214'}];
  }

}
