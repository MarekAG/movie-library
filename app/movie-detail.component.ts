import {Component, Input, OnInit} from '@angular/core';
import { Movie } from './movie';
import {RouteParams} from "@angular/router-deprecated";
import {MovieService} from "./movie.service";
@Component({
    selector: 'my-movie-detail',
    templateUrl: 'app/movie-detail.component.html',
    styleUrls: ['app/movie-detail.component.css']

})
export class MovieDetailComponent implements OnInit {

    @Input()
    movie: Movie;

    constructor(
        private movieService: MovieService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.movieService.getMovie(id)
            .then(movie => this.movie = movie);
    }

    goBack() {
        window.history.back();
    }
}
