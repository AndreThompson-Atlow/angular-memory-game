import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
})
export class InterfaceComponent implements OnInit {
  @Input() score;
  @Input() difficulty;
  @Input() wins;
  @Output() playAgain = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
