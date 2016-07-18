import { Component, OnInit, trigger, state, style, AUTO_STYLE, transition, animate, keyframes } from '@angular/core';
import { EmailPageComponent } from '../email-page/';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ EmailPageComponent ],
  animations: [
        trigger('openClose', [
          state('collapsed, void',
            style({ opacity: 0, height: '0px', color: 'white' })),
          state('expanded',
            style({ opacity: 1, height: AUTO_STYLE, color: 'black' })),
          transition('collapsed <=> expanded', [
            animate(1000)
          ])
        ]),
        trigger('state', [
         state('active',
           style({ transform: 'rotate(0deg)' })),
         state('hidden',
           style({ transform: 'rotate(360deg)' })),
         transition('active => hidden', [animate('250ms')]),
         transition('hidden => active', [animate('250ms')]),
        ]),
    ]
})
export class HeaderComponent implements OnInit {

  rotateState: string ="hidden";
  animationState: string;
  constructor() {
    this.collapse();
  }

  ngOnInit() {
   setTimeout(() => {
      this.rotateState = "active";
   }, 0);
}


  expand() {
    this.animationState = 'expanded';
  }

  collapse() {
    this.animationState = 'collapsed';
  }
}
