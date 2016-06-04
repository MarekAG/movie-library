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
    addingMovie = false;
    error: any;
    

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

    addMovie() {
        this.addingMovie= true;
        this.selectedMovie= null;
    }

    close(savedMovie: Movie) {
        this.addingMovie = false;
        if (savedMovie) { this.getMovies(); }
    }

    delete(movie: Movie, event: any) {
        event.stopPropagation();
        this.movieService
            .delete(movie)
            .then(res => {
                this.movies = this.movies.filter(h => h !== movie);
                if (this.selectedMovie === movie) { this.selectedMovie = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
}
