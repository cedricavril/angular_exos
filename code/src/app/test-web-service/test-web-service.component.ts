import { Component, OnInit } from '@angular/core';
import { UserWebService } from '../shared/webservices/user.webservice';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-test-web-service',
  templateUrl: './test-web-service.component.html',
  styleUrls: ['./test-web-service.component.scss']
})
export class TestWebServiceComponent implements OnInit {

  constructor(private userWebService: UserWebService) { }

  ngOnInit() {
  }

  getUser() {
    this.userWebService.getUsers().subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent getUsers', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  addUser() {
    const userToAdd = new User('Erwan', 'Baccon', 29);
    this.userWebService.addUser(userToAdd).subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent addUser', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  updateUser() {
    const userToUpdate = new User('Erwan2', 'Baccon2', 29);
    this.userWebService.updateUser(userToUpdate, 16).subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent updateUser', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  deleteUser() {
    this.userWebService.deleteUser(16).subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent deleteUser', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

}
