import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ QuestionControlService, QuestionService ]
})

export class DynamicFormComponent implements OnInit {

  // @Input() questions: QuestionBase<any>[] = [];
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, private qs: QuestionService) { }

  ngOnInit() {
      this.questions = this.qs.getQuestions();
      this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
      this.payLoad = JSON.stringify(this.form.value);
  }
}
