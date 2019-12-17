import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as RecipesActions from './recipes.actions';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipesEffects {
	@Effect()
	fetchRecipes = this.actions$.pipe(
		ofType(RecipesActions.GET_RECIPES),
		switchMap(() =>
			this.http.get<Recipe[]>(
				'https://ng-course-recipe-book-c6746.firebaseio.com/recipes.json'
			)
		),
		map(recipes =>
			recipes.map(recipe => {
				return {
					...recipe,
					ingredients: recipe.ingredients ? recipe.ingredients : []
				};
			})
		),
		map(recipes => new RecipesActions.SetRecipes(recipes))
	);

	@Effect({ dispatch: false })
	storeRecipes = this.actions$.pipe(
		ofType(RecipesActions.STORE_RECIPES),
		withLatestFrom(this.store.select('recipes')),
		switchMap(([actionData, recipesState]) => {
			return this.http.put(
				'https://ng-course-recipe-book-c6746.firebaseio.com/recipes.json',
				recipesState.recipes
			);
		})
	);

	constructor(
		private actions$: Actions,
		private http: HttpClient,
		private store: Store<fromApp.AppState>
	) {}
}
