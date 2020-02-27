import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  constructor() { }
  backgroundUrl ="https://img.freepik.com/free-photo/center-milky-way-galaxy-night-sky_101276-143.jpg?size=626&ext=jpg";
  ngOnInit() {}
}
