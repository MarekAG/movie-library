import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
    getMovies() {
        return Promise.resolve(MOVIES);
    }

    getMovie(id: number) {
        return this.getMovies()
            .then(movies => movies.filter(movie => movie.id === id)[0]);
    }
}