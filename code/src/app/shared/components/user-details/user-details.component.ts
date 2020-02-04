import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  @Input() userDetailsForChild: string;

  constructor() { }

  ngOnInit() {
    console.log(this.userDetailsForChild);
  }

}
