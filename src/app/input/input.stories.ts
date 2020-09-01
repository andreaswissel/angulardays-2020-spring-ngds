import {InputComponent} from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent
};

const Template = (args: InputComponent) => ({
  component: InputComponent,
  props: args,
});

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  label: 'My Label',
  placeholder: 'My Placeholder'
};

DefaultInput.argTypes = {
  label: {
    name: 'Label'
  },
  placeholder: {
    name: 'Placeholder'
  },
  type: {
    name: 'Input type',
    control: {type: 'select', options: ['text', 'password']}
  }
};
