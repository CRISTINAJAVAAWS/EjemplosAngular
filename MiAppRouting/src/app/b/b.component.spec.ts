import { Component, OnInit } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';
import { User } from '../models/User';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class AComponent implements OnInit {
  usuarios:User[]=null

  constructor() { }

  ngOnInit() {
    this.usuarios=[
      new User (1,'Camiseta','roja', 23),
      new User (2,'Pantalones','verdes', 32),
      new User (1,'faldas','azules', 73),
      new User (1,'vestiditos','chulis', 23),

    ]
  }

}

