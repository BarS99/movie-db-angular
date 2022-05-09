import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CardViewComponent } from './card-view.component';
import { CommentFormService } from './components/comment-section/components/comment-form/comment-form.service';

@Injectable({
  providedIn: 'root'
})
export class CardViewGuard implements CanDeactivate<CardViewComponent> {
  constructor(private commentFormService: CommentFormService) { }

  canDeactivate(
    component: CardViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isFormDirty: boolean = this.commentFormService.isFormDirty$.getValue();

    if (isFormDirty) {
      isFormDirty = !window.confirm("Are you sure you want to leave? All form changes will be lost!")
    }

    return !isFormDirty;
  }

}
