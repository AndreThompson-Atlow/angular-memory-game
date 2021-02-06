import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { TileComponent } from './components/tile/tile.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    GameboardComponent,
    TileComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
