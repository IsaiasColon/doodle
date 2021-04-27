import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsList: any[] = [
    {
      icon: 'task_alt',
      title: 'Yes, no, if need be',
      text: 'Participants can indicate if an option is not ideal for them.'
    },
    {
      icon: 'people',
      title: 'Limit the number of votes per option',
      text: 'First come, first served. Once the spots are filled, the option is no longer available.'
    },
    {
      icon: 'looks_one',
      title: 'Limit participants to a single vote',
      text: 'Participants can only select one option.'
    },
    {
      icon: 'visibility_off',
      title: 'Hidden poll',
      text: 'Participants’ names, comments and votes are confidential. Only you can see the results.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
