import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: [ './search-bar.component.scss' ]
} )
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;
  query = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const query = this.searchForm.value.query;
    this.router.navigateByUrl( `result/${query}` );
  }

  private createForm(): void {
    this.searchForm = this.formBuilder.group( {
      query: [ '' ],
    } );
  }

}
