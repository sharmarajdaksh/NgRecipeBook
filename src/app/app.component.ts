import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
// import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import * as RecipeActions from './recipes/store/recipes.actions';
import { isPlatformBrowser } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(
		// private authService: AuthService,
		private store: Store<fromApp.AppState>,
		private loggingService: LoggingService,
		@Inject(PLATFORM_ID) private platformId
	) {}
	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.store.dispatch(new AuthActions.AutoLogin());
			let stateUser = null;
			this.store
				.select('auth')
				.pipe(take(1))
				.subscribe(state => {
					stateUser = state.user;
				});
			if (stateUser) {
				console.log(stateUser);
				this.store.dispatch(new RecipeActions.GetRecipes());
			}
		}
		this.loggingService.printLog('Hello from AppComponent');
	}
}
