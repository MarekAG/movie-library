import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieService } from '../movie/movie.service';
import { Router } from '@angular/router-deprecated';
@Component({
    selector: 'my-movies',
    templateUrl: 'app/movies/movies.component.html',
    styleUrls: ['app/movies/movies.component.css'],
    directives: [MovieDetailComponent]
})
export class MoviesComponent implements OnInit {
    movies: Movie[];
    selectedMovie: Movie;
    addingMovie = false;
    error: any;
    mode = 'Observable';
    

    constructor(private movieService: MovieService,
                private router: Router) { }

    getMovies() {
        this.movieService.getMovies().subscribe(movies => this.movies = movies);
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
            .subscribe(res => {
                this.movies = this.movies.filter(h => h !== movie);
                if (this.selectedMovie === movie) { this.selectedMovie = null; }
            }, error => this.error = error);
    }
}
