import { query } from '@angular/animations';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieComment } from 'src/models/MovieComment';
import { MovieFav } from 'src/models/MovieFavor';
import { MovieListTMDB } from 'src/models/MovieListTMDB';
import { MovieRating } from 'src/models/MovieRating';
import { AuthenticationService } from 'src/service/authentication.service';
import { BackendService } from 'src/service/backend.service';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';


@Component({
  selector: 'app-C',
  templateUrl: './list-film-and-history.component.html',
  styleUrls: ['./list-film-and-history.component.scss']
})
export class ListFilmAndHistoryComponent implements OnInit {

  movieFavourList: MovieFav[] | null = null;
  allComments: MovieComment [] | null = null;
  moviesTMDB: MovieListTMDB | null = null;
  data1: string | null =  null;
  data2: string | null = null;
  flag: boolean | null = null;
  moviefav: MovieFav | null = null;
  user_id: number = Number(sessionStorage.getItem('user_id'));
  
 

  
 
  constructor(private backendService:BackendService, private route: ActivatedRoute, public loginService: AuthenticationService) { 

  }
  

  ngOnInit(): void {
    console.log(this.user_id);
    this.backendService.getListaPreferiti().subscribe(res => this.movieFavourList = res);
    this.backendService.getAllMovieComment().subscribe(res => {
      this.allComments = res
      console.log(this.allComments)
    });
    this.route.params.subscribe((params) => this.data1 = params['date1']);
    this.route.params.subscribe((params) => this.data2 = params['date2']);
    this.backendService.getPopularFilm(this.data1, this.data2).subscribe({
      next: (res) => this.moviesTMDB = res,
      error: () => console.log('Error!'),
      complete: () => console.log(this.data1, this.data2)
    });

  }



  addMoviefavour(movieId: number){
    let newMovie: MovieFav ={movie_Id: movieId, user_Id: this.user_id};
    this.backendService.postFilmPreferito(newMovie).subscribe({
      next: (res) => newMovie = res,
      error: () => console.log('Error!'),
      complete: () => console.log(newMovie)
    });
    window.location.href=`http://localhost:4200/addRatingAndComment/${newMovie.movie_Id}/${this.data1}/${this.data2}`;
  }

  setTrue() {
    this.flag = true
  }

  setFalse() {
    this.flag = false
  }

  isFavourite(movieId: number){
    return this.movieFavourList?.find(x => x.movie_Id == movieId && x.user_Id == this.user_id)
  }

  findComments(movieId: number){
    return  this.allComments?.find(c => c.movie_id == movieId)  
  }

}
