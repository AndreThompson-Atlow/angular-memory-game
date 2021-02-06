import { TitleCasePipe } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
})
export class GameboardComponent implements OnInit {
  tiles = [];
  gameActive = true;
  flippedKeys = [];
  clicked = 0;
  lastClicked = [];
  tilesRemaining = 0;
  score = 0;
  wins = 0;
  difficulty = 'easy';
  theme = 'light';
  delay = 'short';
  numOfTiles = 0;
  constructor() {}

  ngOnInit(): void {
    this.generateTiles();
    this.tilesRemaining = this.tiles.length;
  }

  reset(win: boolean) {
    this.tiles = [];
    this.score = 0;
    this.gameActive = true;
    this.flippedKeys = [];
    this.clicked = 0;
    this.lastClicked = [];
    this.tilesRemaining = 0;
    this.difficulty = 'easy';
    this.numOfTiles = 0;
    this.generateTiles();
    this.tilesRemaining = this.tiles.length;
  }

  toggleSettings(e: string) {
    console.log(e);
    switch (e) {
      case 'Difficulty':
        if (this.difficulty === 'easy') {
          this.difficulty = 'hard';
        } else {
          this.difficulty = 'easy';
        }
        break;
      case 'Theme':
        if (this.theme === 'light') {
          this.theme = 'dark';
        } else {
          this.theme = 'light';
        }
        break;
      default:
        if (this.delay === 'short') {
          this.delay = 'long';
        } else {
          this.delay = 'short';
        }
        break;
    }
  }

  handleClick(e) {
    this.clicked += 1;
    if (this.clicked === 1) {
      // First Click
      this.lastClicked = e;
      this.flippedKeys.push(e[0]);
    } else {
      // Second Click
      this.flippedKeys.push(e[0]);
      if (this.lastClicked[1] === e[1]) {
        // Same Key
        this.tilesRemaining -= 2;
        this.clicked = 0;
        this.score += 3;
        if (this.tilesRemaining <= 0) {
          setTimeout(() => {
            this.gameActive = false;
          }, 1000);
        }
      } else {
        // Different Keys
        setTimeout(() => {
          if (this.score > 0) {
            this.score -= 1;
          }
          this.flippedKeys = this.flippedKeys.slice(
            0,
            this.flippedKeys.length - 2
          );
          this.clicked = 0;
        }, 1000);
      }
    }
  }

  shuffleArray(arr) {
    //Imported 'function' converted to a method used to shuffle an array
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  generateTiles() {
    switch (this.difficulty) {
      case 'easy':
        this.numOfTiles = 18;
        break;
      case 'medium':
        this.numOfTiles = 40;
        break;
      default:
        this.numOfTiles = 50;
        break;
    }
    for (let i = 0; i < this.numOfTiles; i++) {
      this.tiles.push({ key: i });
    }
    this.shuffleArray(this.tiles);
  }
}
