import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>My movies</h2>
    <ul class="movies">
      <li *ngFor="let movie of movies"
        [class.selected]="movie === selectedMovie"
        (click)="onSelect(movie)">
        <span class="badge">{{movie.id}}</span> {{movie.name}}
      </li>
    </ul>
    <div *ngIf="selectedMovie">
      <h2>{{selectedMovie.name}} details!</h2>
      <div><label>id: </label>{{selectedMovie.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedMovie.name" placeholder="name"/>
      </div>
    </div>
  `,
    styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .movies {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .movies li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .movies li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .movies li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .movies .text {
      position: relative;
      top: -3px;
    }
    .movies .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
    title = 'Movie Library';
    movies = MOVIES;
    selectedMovie: Movie;
    onSelect(movie: Movie) { this.selectedMovie = movie; }
}
var MOVIES: Movie[] = [
    { "id": 1, "name": "Titanic" },
    { "id": 2, "name": "Matrix" },
    { "id": 3, "name": "Django" },
    { "id": 4, "name": "Fight Club" },
    { "id": 5, "name": "Avatar" },
    { "id": 6, "name": "Spiderman" },
    { "id": 7, "name": "Robocop" },
    { "id": 8, "name": "X-Men" },
    { "id": 9, "name": "The Godfather" },
    { "id": 10, "name": "Forrest Gump" }
];
