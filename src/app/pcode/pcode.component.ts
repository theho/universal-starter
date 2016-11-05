import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { prebootComplete } from "angular2-universal";


@Component({
  selector: 'pcode',
  template: 'PostCode Lat/Log for {{id}}: {{ (data |async)?.latitude  }} {{ (data |async)?.longitude  }}'
})
export class PCodeComponent {
  data: any;
  constructor(private route: ActivatedRoute, private http: Http) {
    this.data = this.route.params
      .switchMap(params => this.http.get('http://api.postcodes.io/postcodes/' + params['id']))
      .share()
      .map(res => res.json().result)
      .do(()=>{
        if (typeof prebootComplete != 'undefined') {
          prebootComplete();
        }
      })
      
  }

  ngOnInit() {

    
  }
}
