import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { MovieViewInterface } from 'src/app/shared/components/card/card.model';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @ViewChild('formWrapper') formWrapper!: ElementRef;
  @Output() updateComments = new EventEmitter();
  form: FormGroup;
  formDisplaySuccess: boolean = false;
  formDisplayFailure: boolean = false;
  formDisplayErrors: boolean = false;
  isFormCollapsed: boolean = true;
  @Input() movie!: MovieViewInterface;

  constructor(
    library: FaIconLibrary, 
    private formBuilder: FormBuilder, 
    private commentService: CommentService
    ) {
    library.addIcons(faMinus, faPlus);

    this.form = this.formBuilder.group({
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
    })
  }

  ngOnInit(): void {}

  onSubmit(value: any) {
    if (!this.form.valid) {
      this.formDisplayErrors = true;
      return;
    }
    
    this.commentService.postComment({
      createdAt: new Date().getTime(),
      name: value.commentName,
      value: value.commentValue,
      parentId: this.movie.id,
    }).subscribe({
      next: () => {
        this.isFormCollapsed = false;
        this.formDisplaySuccess = true;

        this.updateComments.emit("New value");
      },
      error: () => {
        this.formDisplayFailure = true;
      },
      complete: () => {
        this.form.reset();
        this.formDisplayErrors = false;

        window.scrollTo(0, this.formWrapper.nativeElement.offsetTop - 110);
      }
    })
  }

  toggleForm() {
    this.isFormCollapsed = !this.isFormCollapsed;
  }

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
}