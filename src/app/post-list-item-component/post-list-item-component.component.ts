import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() postListArrays : any[];

  constructor() { }

  onIncrease() {
  	this.postListArrays.loveIts++;
  }

  onDecrease() {
  this.postListArrays.loveIts--;
  }

  ngOnInit() {
  }

}
