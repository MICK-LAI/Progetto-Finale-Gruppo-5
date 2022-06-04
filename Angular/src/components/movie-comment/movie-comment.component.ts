import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggedUser } from 'src/models/LoggedUser';
import { MovieComment } from 'src/models/MovieComment';
import { MovieTMDB } from 'src/models/MovieTMDB';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-comment',
  templateUrl: './movie-comment.component.html',
  styleUrls: ['./movie-comment.component.scss']
})
export class MovieCommentComponent implements OnInit {


  commentsByMovieId: MovieComment []= [];
  notFoundComment: boolean | null = null;
  user: LoggedUser | null = null;
  arrayUser: LoggedUser [] | null= [];
  provaUser: boolean | null = null;
  arrayUsername: string [] = [];
  movieTMDB: MovieTMDB | null = null;
  movieId: number | null = null;
  data1: string | null =  null;
  data2: string | null = null;

  constructor( 
    private backendAPIService:BackendService, private route: ActivatedRoute ) { 

    }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.movieId = params['movieId'])
    this.route.params.subscribe((params) => this.data1 = params['date1']);
    this.route.params.subscribe((params) => this.data2 = params['date2']);
    this.backendAPIService.getMovieById(this.movieId).subscribe({
      next: (res) => {
        this.movieTMDB = res,
        console.log(res, "film trovato")
      },
      error: (err) => {
        console.log(err, "film non trovato")
      }
    })
    this.getCommentsByMovieId();
  }

 
  getCommentsByMovieId(){
    this.backendAPIService.getAllMovieCommentsByMovieId(this.movieId).subscribe({
      next: (res) => {
        this.commentsByMovieId = res,
        console.log(res, "commenti trovati")
        this.notFoundComment = false 
        for(let index=0; index< this.commentsByMovieId.length; index++)
          this.getUsernameByComment(this.commentsByMovieId[index].user_id);
          
        console.log(this.arrayUsername);
      },
      error: (err) => {
        console.log(err),
        this.notFoundComment = true;
      }
    })
  }

  getUsernameByComment(userId: number ){
    this.backendAPIService.getUserByuserId(userId).subscribe({
      next: (res) => {
        this.user = res,
        this.arrayUsername.push(res.username);
        this.provaUser = true;
      },
      error: (err) => {
        console.log(err),
        this.provaUser = false;
      }
    })
  }

  goBack(){
    window.location.href=`http://localhost:4200/listFilm-listHistory/${this.data1}/${this.data2}`;
  }



}




