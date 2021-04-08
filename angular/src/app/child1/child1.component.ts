import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  // styleUrls: ['./child1.component.css']
  // providers:[LogService]
})
export class Child1Component implements OnInit {
  message:string | undefined
  constructor(private logservice:LogService) { }

  ngOnInit(): void {
    this.message=this.logservice.sayHello("Child 1")
  }

}
