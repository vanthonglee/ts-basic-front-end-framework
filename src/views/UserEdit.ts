import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from '../views/UserForm';
import { UserShow } from '../views/UserShow';

export class UserEdit extends View<User, UserProps> {
	regionMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}

	onRender(): void {
		//do our nesting
		new UserShow(this.regions.userShow, this.model).render();
		new UserForm(this.regions.userForm, this.model).render();
	}

	template(): string {
		return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
        <div></div>
      </div>
    `;
	}
}
