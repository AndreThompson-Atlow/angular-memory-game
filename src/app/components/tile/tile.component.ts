import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class TileComponent implements OnInit, OnChanges {
  @Input() tileData;
  @Input() clicked;
  @Input() flippedKeys;
  @Output() clickedTile = new EventEmitter<any>();
  icon = '';
  keyPair = 0;
  flipped: boolean = false;
  icons = [
    'far fa-code',
    'fas fa-brackets-curly',
    'far fa-coffee',
    'far fa-laptop-code',
    'far fa-terminal',
    'fal fa-file-code',
    'far fa-bug',
    'fas fa-brackets',
    'fas fa-code-commit',
  ];
  constructor() {}

  ngOnChanges() {
    if (this.flippedKeys.includes(this.tileData.key)) {
      this.flipped = true;
    } else {
      this.flipped = false;
    }
  }

  ngOnInit(): void {
    if (this.tileData.key < 9) {
      this.icon = this.icons[this.tileData.key];
      this.keyPair = this.tileData.key;
    } else {
      this.icon = this.icons[this.tileData.key - 9];
      this.keyPair = this.tileData.key - 9;
    }
  }

  flipCard() {
    if (this.clicked < 2 && this.flipped === false) {
      this.clickedTile.emit([this.tileData.key, this.keyPair]);
    }
  }
}
