import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieViewInterface } from 'src/app/shared/components/card/card.model';
import { commentsApi } from 'src/environments/environment';
import { CommentInterface } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(parentId: number): Observable<CommentInterface[]> {
    const params = new HttpParams().set('parentId', parentId);

    return this.http.get<CommentInterface[]>(`${commentsApi.url}/comments`, {params});
  }

  postComment(data: CommentInterface): Observable<MovieViewInterface> {
    return this.http.post<MovieViewInterface>(`${commentsApi.url}/comments`, data);
  }
}
