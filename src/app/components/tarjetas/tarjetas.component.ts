import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() elementos:any[] = [];
  @Input() loading:boolean;

  constructor() { }

  ngOnInit() {
  }

}
