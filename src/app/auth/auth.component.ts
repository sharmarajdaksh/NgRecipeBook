import {
	Component,
	ComponentFactoryResolver,
	ViewChild,
	OnDestroy,
	OnInit
} from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
	isLoginMode = true;
	isLoading = false;
	error: string = null;
	@ViewChild(PlaceholderDirective, { static: false })
	alertHost: PlaceholderDirective;
	private closedSub: Subscription;
	private storeSub: Subscription;

	constructor(
		// private authService: AuthService,
		// private router: Router,
		private componentFactoryResolver: ComponentFactoryResolver,
		private store: Store<fromApp.AppState>
	) {}

	ngOnInit() {
		this.storeSub = this.store.select('auth').subscribe(authState => {
			this.isLoading = authState.loading;
			this.error = authState.authError;
			if (this.error) {
				this.showErrorAlert(this.error);
			}
		});
	}
	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	onSubmit(authForm: HTMLFormElement) {
		if (!authForm.valid) {
			return;
		}
		const email = authForm.value.email;
		const password = authForm.value.password;
		this.isLoading = true;

		// let authObs: Observable<AuthResponseData>;

		if (this.isLoginMode) {
			// authObs = this.authService.login(email, password);
			this.store.dispatch(
				new AuthActions.LoginStart({ email, password })
			);
		} else {
			this.store.dispatch(
				new AuthActions.SignupStart({ email, password })
			);
		}

		// authObs.subscribe(
		// 	responseData => {
		// 		console.log(responseData);
		// 		this.isLoading = false;
		// 		this.router.navigate(['/recipes']);
		// 	},
		// 	errorMessage => {
		// 		this.error = errorMessage;
		// 		this.isLoading = false;
		// 		this.showErrorAlert(errorMessage);
		// 	}
		// );

		authForm.reset();
	}

	onHandleError() {
		// this.error = null;
		this.store.dispatch(new AuthActions.ClearError());
	}

	private showErrorAlert(message: string) {
		// INCORRECT WAY: const alertComponent = new AlertComponent();

		const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
			AlertComponent
		);
		const hostViewContainerRef = this.alertHost.viewContainerRef;
		hostViewContainerRef.clear();

		const componentRef = hostViewContainerRef.createComponent(
			alertComponentFactory
		);
		componentRef.instance.message = message;
		this.closedSub = componentRef.instance.closed.subscribe(() => {
			this.closedSub.unsubscribe();
			hostViewContainerRef.clear();
			this.error = null;
		});
	}

	ngOnDestroy() {
		if (this.closedSub) {
			this.closedSub.unsubscribe();
		}
		if (this.storeSub) {
			this.storeSub.unsubscribe();
		}
	}
}
