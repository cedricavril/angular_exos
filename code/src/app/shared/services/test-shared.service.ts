import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
  export class TestSharedService {

  constructor() { }

  testService() {
    console.log('testService');
  }

}
