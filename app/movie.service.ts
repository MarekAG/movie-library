import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';

@Injectable()
export class MovieService {

    private moviesUrl = 'app/movies';

    constructor(private http: Http) { }

    getMovies(): Promise<Movie[]> {
        return this.http.get(this.moviesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getMovie(id: number) {
        return this.getMovies()
            .then(movies => movies.filter(movie => movie.id === id)[0]);
    }

    save(movie: Movie): Promise<Movie>  {
        if (movie.id) {
            return this.put(movie);
        }
        return this.post(movie);
    }

    delete(movie: Movie) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.moviesUrl}/${movie.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private post(movie: Movie): Promise<Movie> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.moviesUrl, JSON.stringify(movie), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(movie: Movie) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.moviesUrl}/${movie.id}`;

        return this.http
            .put(url, JSON.stringify(movie), {headers: headers})
            .toPromise()
            .then(() => movie)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
