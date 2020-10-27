import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crums',
  templateUrl: './bread-crums.component.html',
  styleUrls: ['./bread-crums.component.css']
})
export class BreadCrumsComponent implements OnInit {

  @Input() breadCrums:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
