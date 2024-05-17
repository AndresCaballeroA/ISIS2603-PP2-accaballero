import { Component, Input, OnInit } from '@angular/core';
import { Nave } from '../nave';

@Component({
  selector: 'app-nave-detail',
  templateUrl: './nave-detail.component.html',
  styleUrls: ['./nave-detail.component.css']
})
export class NaveDetailComponent implements OnInit {

  @Input() naveDetail!: Nave;
  constructor() { }

  ngOnInit() {
  }

}
