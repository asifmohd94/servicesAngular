import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 title:string | undefined;

@Output() myEvent=new EventEmitter();



clicked(){
  // console.log("Button clicked in child component")
  this.myEvent.emit('Event handeled')
}

 @Input()
 set setData(m:string){
 this.title=m +" appended the data"
 }

get getData(){
  return this.title;
}

  constructor() { }

  ngOnInit(): void {
  }
 
}
