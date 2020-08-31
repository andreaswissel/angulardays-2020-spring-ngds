import {ButtonComponent} from './button.component';

const Template = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args
});

export default {
  title: 'Components/Button'
};

export const Default = Template.bind({});

Default.args = {
  label: 'Submit'
};
