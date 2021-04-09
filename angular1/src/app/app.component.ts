import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logservice: LogService) { }

  title = 'angular1';
  count = 0;
  url: string | undefined = "../assets/bread.jpeg";
  ans = this.logservice.myList[this.count].name;
  price=this.logservice.myList[this.count].price;
  length=this.logservice.myList.length;
  change($event: MouseEvent) {
    this.count++;
    if (this.count % this.length == 0) {
      this.url = "../assets/bread.jpeg";
      this.ans = this.logservice.myList[this.count % this.length].name;
      this.price=this.price=this.logservice.myList[this.count % this.length].price
    } else if (this.count % this.length == 1) {
      this.url = "../assets/wheat.jpeg"
      this.ans = this.logservice.myList[this.count % this.length].name;
      this.price=this.logservice.myList[this.count % this.length].price
    } else if (this.count % this.length == 2) {
      this.url = "../assets/rice.jpeg"
      this.ans = this.logservice.myList[this.count % this.length].name;
      this.price=this.logservice.myList[this.count % this.length].price
    } else if (this.count % this.length == 3) {
      this.url = "../assets/soap.jpeg"
      this.ans = this.logservice.myList[this.count % this.length].name;
      this.price=this.logservice.myList[this.count % this.length].price
    } else
      this.count = 0;

  }
  orderedProd:[object]=[{}];
getProduct(){
this.orderedProd.push(this.logservice.myList[this.count]);
console.log(this.orderedProd[this.count])
return this.orderedProd[this.count];
}

}
