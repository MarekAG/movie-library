import { Component } from '@angular/core';
export class Movie {
    id: number;
    name: string;
}
@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{movie.name}} details!</h2>
    <div><label>id: </label>{{movie.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="movie.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
    title = 'Movie Library';
    movie: Movie = {
        id: 1,
        name: 'Titanic'
    };
}
