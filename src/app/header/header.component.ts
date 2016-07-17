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
    trigger('rotate',[
       state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ])
      ])
  ]
})
export class HeaderComponent implements OnInit {

  animationState: string;
  constructor() {
    this.collapse();
  }

  ngOnInit() {
  }

  expand() {
    this.animationState = 'expanded';
  }

  collapse() {
    this.animationState = 'collapsed';
  }
}
