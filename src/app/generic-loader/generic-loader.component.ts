import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'generic-loader',
  templateUrl: './generic-loader.component.html',
  styleUrls: ['./generic-loader.component.scss']
})
export class GenericLoaderComponent implements OnInit {

  @Input() public myText: string = null; //parent to child communication

  @Output() public closeMeEvent = new EventEmitter(); //child to parent communication

  constructor() { }

  ngOnInit() {
  }

  closeMe() {
    this.closeMeEvent.emit(null);
  }

}