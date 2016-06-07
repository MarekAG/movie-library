import { Component }       from '@angular/core';
import { MovieService }     from './movie/movie.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {MoviesComponent} from "./movies/movies.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import "./rxjs-operators";

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
   <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Movies']">Movies</a>
   </nav>
  <router-outlet></router-outlet>
`,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        MovieService
    ]
})

@RouteConfig([
    {
        path: '/movies',
        name: 'Movies',
        component: MoviesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'MovieDetail',
        component: MovieDetailComponent
    }
])

export class AppComponent {
    title = 'Movies Library';
}
