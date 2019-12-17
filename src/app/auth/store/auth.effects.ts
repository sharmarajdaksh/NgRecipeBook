import { Actions, ofType, Effect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

const handleAuth = (
	expiresIn: number,
	email: string,
	userId: string,
	token: string
) => {
	const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
	const user = new User(email, userId, token, expirationDate);
	localStorage.setItem('userData', JSON.stringify(user));
	return new AuthActions.AuthSuccess({
		email,
		userId,
		token,
		expirationDate,
		redirect: true
	});
};

const handleError = (errorResponse: any) => {
	let errorMessage = 'An error occurred';
	if (!errorResponse.error || !errorResponse.error.error) {
		return of(new AuthActions.AuthFail(errorMessage));
	}
	switch (errorResponse.error.error.message) {
		case 'EMAIL_EXISTS':
			errorMessage = 'This email already exists';
			break;
		case 'EMAIL_NOT_FOUND':
			errorMessage = 'This email does not exist';
			break;
		case 'INVALID_PASSWORD':
			errorMessage = 'This password is incorrect';
			break;
		default:
	}
	return of(new AuthActions.AuthFail(errorMessage));
};

@Injectable()
export class AuthEffects {
	@Effect()
	authSignup = this.actions$.pipe(
		ofType(AuthActions.SIGNUP_START),
		switchMap((authData: AuthActions.SignupStart) => {
			return this.http
				.post<AuthResponseData>(
					'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
						environment.firebaseAPIKey,
					{
						email: authData.payload.email,
						password: authData.payload.password,
						returnSecureToken: true
					}
				)
				.pipe(
					tap(resData => {
						this.authService.setLogoutTimer(
							+resData.expiresIn * 1000
						);
					}),
					map(resData =>
						handleAuth(
							+resData.expiresIn,
							resData.email,
							resData.localId,
							resData.idToken
						)
					),
					catchError(errorResponse => handleError(errorResponse))
				);
		})
	);

	@Effect()
	authLogin = this.actions$.pipe(
		ofType(AuthActions.LOGIN_START),
		switchMap((authData: AuthActions.LoginStart) => {
			return this.http
				.post<AuthResponseData>(
					'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
						environment.firebaseAPIKey,
					{
						email: authData.payload.email,
						password: authData.payload.password,
						returnSecureToken: true
					}
				)
				.pipe(
					tap(resData => {
						this.authService.setLogoutTimer(
							+resData.expiresIn * 1000
						);
					}),
					map(resData =>
						handleAuth(
							+resData.expiresIn,
							resData.email,
							resData.localId,
							resData.idToken
						)
					),
					catchError(errorResponse => handleError(errorResponse))
				);
		})
	);

	@Effect({ dispatch: false })
	authLogout = this.actions$.pipe(
		ofType(AuthActions.LOGOUT),
		tap(() => {
			this.authService.clearLogoutTimer();
			localStorage.removeItem('userData');
			this.router.navigate(['/auth']);
		})
	);

	@Effect()
	autoLogin = this.actions$.pipe(
		ofType(AuthActions.AUTO_LOGIN),
		map(() => {
			const userData: {
				email: string;
				id: string;
				_token: string;
				_tokenExpirationDate: string;
			} = JSON.parse(localStorage.getItem('userData'));
			if (!userData) {
				return { type: 'DUMMY' };
			}
			// console.log('USERDATA IS TRUISH');
			const loadedUser = new User(
				userData.email,
				userData.id,
				userData._token,
				new Date(userData._tokenExpirationDate)
			);
			if (loadedUser.token) {
				const expirationDuration =
					new Date(userData._tokenExpirationDate).getTime() -
					new Date().getTime();
				this.authService.setLogoutTimer(expirationDuration);
				// console.log(loadedUser);
				return new AuthActions.AuthSuccess({
					email: loadedUser.email,
					userId: loadedUser.id,
					token: loadedUser.token,
					expirationDate: new Date(userData._tokenExpirationDate),
					redirect: false
				});
			} else {
				return { type: 'DUMMY' };
			}
		})
	);

	@Effect({ dispatch: false })
	authRedirect = this.actions$.pipe(
		ofType(AuthActions.AUTH_SUCCESS),
		tap((authSuccessAction: AuthActions.AuthSuccess) => {
			if (authSuccessAction.payload.redirect) {
				this.router.navigate(['/']);
			}
		})
	);

	constructor(
		private actions$: Actions,
		private http: HttpClient,
		private router: Router,
		private authService: AuthService
	) {}
}

export interface AuthResponseData {
	kind: string;
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}
