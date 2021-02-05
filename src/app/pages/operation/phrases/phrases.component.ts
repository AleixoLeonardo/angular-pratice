import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.css']
})
export class PhrasesComponent implements OnInit {
  @Input() phrases: any;
  @Output() phrasesEmitter = new EventEmitter<string>();
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  back() {
    this.counter += 1;
    this.phrasesEmitter.emit(null);
  }

}
