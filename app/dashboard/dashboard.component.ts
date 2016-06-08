import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie/movie.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    movies: Movie[] = [];
    constructor(private movieService: MovieService,
                private router: Router) { }
    ngOnInit() {
        this.movieService.getMovies()
            .subscribe(movies => this.movies = movies.filter(movie => movie.rate > 3));
    }

    gotoDetail(movie: Movie) {
        let link = ['MovieDetail', { id: movie.id }];
        this.router.navigate(link);
    }
}
