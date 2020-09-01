import {Component, Input, OnInit} from '@angular/core';
/**
 * Short description about the component.
 *
 * ### Long description about the component - this also supports [markdown](https://en.wikipedia.org/wiki/Markdown)!
 *
 * **Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Nullam sit amet lectus condimentum, _posuere velit id,
 * ornare risus_. In vitae ex eu lacus hendrerit elementum non ut massa. ~~Orci varius natoque penatibus et magnis dis
 * parturient montes~~, nascetur ridiculus mus. `Nullam vehicula lacus felis, ac aliquam nisl malesuada ac`.
 *
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /**
   * The inner text of the button.
   *
   * @required
   */
  @Input() public label: string;
  /** The background color of the button. */
  @Input() public bgColor: string = '#0085FC';
  /** The font size button of the button. */
  @Input() public fontSize: number = 13;

  constructor() { }

  ngOnInit(): void {
  }
}
