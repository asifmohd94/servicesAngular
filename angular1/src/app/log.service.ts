import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

myList=[
  {id:1,name:"Bread",quantity:20,price:1,inStock:true},
  {id:1,name:"Wheat",quantity:10,price:5,inStock:true},
  {id:1,name:"Rice",quantity:0,price:7,inStock:false},
  {id:1,name:"Soap",quantity:35,price:10, inStock:true}
];

  constructor() { }
}
