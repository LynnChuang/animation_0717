import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {Http, Request} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-email-page',
  templateUrl: 'email-page.component.html',
  styleUrls: ['email-page.component.css'],
  animations: [
    trigger('state', [
     state('active',  style({ height: '*', background: 'blue' })),
      state('hidden',  style({ height: '0px', opacity: 0 })),
      transition('active <=> hidden', [animate('350ms')])
    ]),
  ]
})
export class EmailPageComponent implements OnInit {

  selectedEmail = null;
  emails: any[];

  constructor(private http:Http =null) {
   this.http.get('./api/email.json')
        .map(res => res.json())
        .subscribe((value)=>{
        this.emails=value;
        this.selectedEmail = this.emails[0];
        //  console.log("show: "+ JSON.stringify(this.selectedEmail));
      });
  }

  select(email: any) {
    this.selectedEmail = null;
    setTimeout(() => {
      this.selectedEmail = email;
    }, 350);
  }

  ngOnInit() {
  }
}
