export class InMemoryDataService {
    createDb() {
        let movies = [
            {id: 1, name: 'Titanic', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 2, name: 'Matrix', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 3, name: 'Django', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 4, name: 'Fight Club', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 5, name: 'Avatar', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 6, name: 'Spiderman', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 7, name: 'Robocop', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 8, name: 'X-Men', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 9, name: 'The Godfather', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3},
            {id: 10, name: 'Forrest Gump', year: 1999, genre: "sci-fi", director: "Adam Nowak", rate: 3}
        ];
        return {movies};
    }
}
