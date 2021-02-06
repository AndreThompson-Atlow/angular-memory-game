import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  @Input() difficulty;
  @Input() theme;
  @Input() delay;
  @Output() settingsChange = new EventEmitter();
  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggle(prop) {
    this.settingsChange.emit(prop);
  }

  toggleSettings() {
    this.open = !this.open;
  }
}
