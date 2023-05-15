import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'personal-tabs',
  templateUrl: './personal.tabs.component.html',
  styleUrls: ['./personal.tabs.component.css']
})
export class PersonalTabsComponent implements OnInit {
  @Input() route: string = '';

  constructor() {}

  ngOnInit(): void {}
}
