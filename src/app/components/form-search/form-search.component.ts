import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // onSearch(value :string){
  //   if(value && value.length > 3){
  //     this.router.navigate(['/character-list'],{
  //       queryParams : { q: value},
  //     })
  //   }
  // }

}
