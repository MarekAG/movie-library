import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
    getMovies() {
        return Promise.resolve(MOVIES);
    }
}