import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  @Input() heading: string;
  @Input() columns = 2;

  constructor() { }

  ngOnInit(): void {
  }

  public get columnsTemplate(): string {
    return `repeat(${this.columns}, 1fr)`;
  }
}
