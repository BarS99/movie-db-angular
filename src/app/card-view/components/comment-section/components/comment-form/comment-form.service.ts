import { Injectable, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentFormService {
  isFormDirty$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  private formConfig = {
    commentName: new FormControl('', Validators.required),
    commentEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
    ]),
    commentPhone: new FormControl('', [
      Validators.pattern('^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$')
    ]),
    commentValue: new FormControl('', [
      Validators.required,
      this.commentValueValidation
    ]),
  };

  constructor() {}

  commentValueValidation(control: AbstractControl) {
    if (control.value?.trim().length === 0) {
      return null;
    }

    const minLength = 10;

    if (control.value?.length < minLength) {
      return { minLength: `Your comment should have at least ${minLength} characters!` }
    }
    
    return null;
  }

  getFormConfig(): Object {
    return this.formConfig;
  }
}
