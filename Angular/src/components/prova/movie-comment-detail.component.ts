import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/models/LoggedUser';
import { MovieComment } from 'src/models/MovieComment';
import { BackendService } from 'src/service/backend.service';

@Component({
  selector: 'app-movie-comment-detail',
  templateUrl: './movie-comment-detail.component.html',
  styleUrls: ['./movie-comment-detail.component.scss']
})
export class MovieCommentDetailComponent implements OnInit {


  constructor( 
    private backendAPIService:BackendService ) { 

    }

  ngOnInit(): void {
 
  }




}
