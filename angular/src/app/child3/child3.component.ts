import { Component, OnInit } from '@angular/core';
import { UpdatedlogService } from '../updatedlog.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  message:string | undefined;
  constructor(private udatedlogservice:UpdatedlogService) { 

  }

  ngOnInit(): void {
  this.message=this.udatedlogservice.sayHello("Child 3")
  }

}
