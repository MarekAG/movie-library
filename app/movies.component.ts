import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from './movie.service';
import { Router } from '@angular/router-deprecated';
@Component({
    selector: 'my-movies',
    templateUrl: 'app/movies.component.html',
    styleUrls: ['app/movies.component.css'],
    directives: [MovieDetailComponent]
})
export class MoviesComponent implements OnInit {
    movies: Movie[];
    selectedMovie: Movie;
    constructor(private movieService: MovieService,
                private router: Router) { }

    getMovies() {
        this.movieService.getMovies().then(movies => this.movies = movies);
    }
    ngOnInit() {
        this.getMovies();
    }
    onSelect(movie: Movie) { this.selectedMovie = movie; }

    gotoDetail() {
        this.router.navigate(['MovieDetail', { id: this.selectedMovie.id }]);
    }
}
