import {FormGroupComponent} from './form-group.component';
import {moduleMetadata} from '@storybook/angular';
import {InputModule} from '../input/input.module';
import {FormGroupModule} from './form-group.module';
import {DefaultInput} from '../input/input.stories';

export default {
  title: 'Components/Form Group',
  component: FormGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [InputModule, FormGroupModule]
    })
  ]
};

const Template = (args) => ({
  props: args,
  template: `
      <app-form-group [columns]="columns" [heading]="heading">
        <app-input [label]="label" [placeholder]="placeholder"></app-input>
        <app-input [label]="label" [placeholder]="placeholder" type="password"></app-input>
      </app-form-group>
  `
});

export const Default = Template.bind({});

Default.args = {
  heading: 'This is a heading',
  columns: 2,
  ...DefaultInput.args
};
