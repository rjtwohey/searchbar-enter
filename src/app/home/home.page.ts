import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,) {}
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  searchKeyword() {
    console.log('Enter key clicked');
  }

  

}
