import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doodle',
  templateUrl: './doodle.component.html',
  styleUrls: ['./doodle.component.scss']
})
export class DoodleComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private activated: ActivatedRoute
  ) {

    console.log(router);
    console.log(activated);
    

  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
