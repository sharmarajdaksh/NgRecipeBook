// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Store } from '@ngrx/store';

// import { RecipeService } from '../recipes/recipe.service';
// import { map, tap } from 'rxjs/operators';
// import { Recipe } from '../recipes/recipe.model';
// import { AuthService } from '../auth/auth.service';
// import * as fromApp from '../store/app.reducer';
// import * as RecipesActions from '../recipes/store/recipes.actions';

// @Injectable({
// 	providedIn: 'root'
// })
// export class DataStorageService {
// 	constructor(
// 		private http: HttpClient,
// 		// private recipesService: RecipeService,
// 		// private authService: AuthService
// 		private store: Store<fromApp.AppState>
// 	) {}

// storeRecipes() {
// 	const recipes = this.recipesService.getRecipes();
// 	this.http
// 		.put(
// 			'https://ng-course-recipe-book-c6746.firebaseio.com/recipes.json',
// 			recipes
// 		)
// 		.subscribe(
// 			response => {
// 				// console.log(response);
// 			},
// 			error => {
// 				console.log(error);
// 			}
// 		);
// }

// fetchRecipes() {
// 	return this.http
// 		.get<Recipe[]>(
// 			'https://ng-course-recipe-book-c6746.firebaseio.com/recipes.json'
// 		)
// 		.pipe(
// 			map(recipes => {
// 				return recipes.map(recipe => {
// 					return {
// 						...recipe,
// 						ingredients: recipe.ingredients
// 							? recipe.ingredients
// 							: []
// 					};
// 				});
// 			}),
// 			tap(recipes => {
// 				// console.log(recipes);
// 				// this.recipesService.setRecipes(recipes);
// 				this.store.dispatch(new RecipesActions.SetRecipes(recipes));
// 			})
// 		);
// }
// }
