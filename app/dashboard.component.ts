import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Movie } from './movie';
import { MovieService } from './movie.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    movies: Movie[] = [];
    constructor(private movieService: MovieService,
                private router: Router) { }
    ngOnInit() {
        this.movieService.getMovies()
            .then(movies => this.movies = movies.slice(1,5));
    }

    gotoDetail(movie: Movie) {
        let link = ['MovieDetail', { id: movie.id }];
        this.router.navigate(link);
    }
}
