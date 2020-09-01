import {LoginComponent} from './login.component';
import {ButtonModule} from '../button/button.module';
import {FormGroupModule} from '../form-group/form-group.module';
import {InputModule} from '../input/input.module';
import {moduleMetadata} from '@storybook/angular';

export default {
  title: 'Components/Login',
  decorators: [
    moduleMetadata({
      imports: [InputModule, FormGroupModule, ButtonModule]
    })
  ]
};

export const Default = () => ({
  component: LoginComponent
});
