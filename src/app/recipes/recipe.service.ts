import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
	private recipes: Recipe[] = [];
	// private recipes: Recipe[] = [
	// 	new Recipe(
	// 		'A Test Recipe',
	// 		'This is simply a test',
	// 		'https://www.antarctic.tas.gov.au/__data/assets/image/0003/160365/varieties/pagetop.jpg',
	// 		[new Ingredient('Meat', 1), new Ingredient('Fries', 20)]
	// 	),
	// 	new Recipe(
	// 		'Another Test Recipe',
	// 		'This is simply a test',
	// 		'https://www.antarctic.tas.gov.au/__data/assets/image/0003/160365/varieties/pagetop.jpg',
	// 		[new Ingredient('Buns', 2), new Ingredient('Bacon', 2)]
	// 	)
	// ];

	constructor(
		// private shoppingListService: ShoppingListService,
		private store: Store<fromApp.AppState>
	) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		// this.shoppingListService.addIngredients(ingredients);
		this.store.dispatch(
			new ShoppingListActions.AddIngredients(ingredients)
		);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	recipesExist() {
		return this.recipes.length > 0 ? true : false;
	}
}
