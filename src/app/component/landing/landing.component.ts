import { Component, OnInit } from '@angular/core';

declare function load(): any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    load();
  }

}
