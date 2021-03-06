import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie/movie';
import {RouteParams} from "@angular/router-deprecated";
import {MovieService} from "../movie/movie.service";

@Component({
    selector: 'my-movie-detail',
    templateUrl: 'app/movie-detail/movie-detail.component.html',
    styleUrls: ['app/movie-detail/movie-detail.component.css']

})
export class MovieDetailComponent implements OnInit {

    @Input() movie: Movie;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false;

    constructor(
        private movieService: MovieService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.movieService.getMovie(id)
                .subscribe(movie => this.movie = movie);
        } else {
            this.navigated = false;
            this.movie = new Movie();
        }
    }

    save() {
        this.movieService
            .save(this.movie)
            .subscribe(movie => {
                this.movie = movie;
                this.goBack(movie);
            }, error => this.error = error);
    }

    goBack(savedMovie: Movie = null) {
        this.close.emit(savedMovie);
        if (this.navigated) { window.history.back(); }
    }
}
