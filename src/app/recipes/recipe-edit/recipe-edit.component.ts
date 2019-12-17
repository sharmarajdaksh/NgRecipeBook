import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

// import { RecipeService } from '../recipe.service';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as RecipesActions from '../store/recipes.actions';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
	id: number;
	editMode = false;
	recipeForm: FormGroup;
	ingredientsEmpty = true;
	// dummy = 'https://www.fbi.gov/news/speeches/@@images/image';
	private storeSub: Subscription;

	get ingredientsControls() {
		return (this.recipeForm.get('ingredients') as FormArray).controls;
	}

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		// private recipeService: RecipeService,
		private store: Store<fromApp.AppState>
	) {}

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = +params.id;
			this.editMode = params.id != null;
			this.initForm();
			if ((this.recipeForm.get('ingredients') as FormArray).length > 0) {
				this.ingredientsEmpty = false;
			} else {
				this.ingredientsEmpty = true;
			}
		});
	}

	onSubmit() {
		if (this.editMode) {
			// this.recipeService.updateRecipe(this.id, this.recipeForm.value);
			this.store.dispatch(
				new RecipesActions.UpdateRecipe({
					index: this.id,
					newRecipe: this.recipeForm.value
				})
			);
		} else {
			// this.recipeService.addRecipe(this.recipeForm.value);
			this.store.dispatch(
				new RecipesActions.AddRecipe(this.recipeForm.value)
			);
		}
		this.onCancel();
	}

	onCancel() {
		this.router.navigate(['../'], { relativeTo: this.route });
	}

	onAddIngredient() {
		(this.recipeForm.get('ingredients') as FormArray).push(
			new FormGroup({
				ingName: new FormControl(null, Validators.required),
				amount: new FormControl(null, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		);
		this.ingredientsEmpty = false;
	}

	onDeleteIngredient(index: number) {
		(this.recipeForm.get('ingredients') as FormArray).removeAt(index);
	}

	private initForm() {
		let name = '';
		let imagePath = '';
		let description = '';
		const ingredients = new FormArray([]);
		if (this.editMode) {
			// const recipe = this.recipeService.getRecipe(this.id);
			this.storeSub = this.store
				.select('recipes')
				.pipe(
					map(recipeState =>
						recipeState.recipes.find(
							(recipe, index) => index === this.id
						)
					)
				)
				.subscribe(recipe => {
					name = recipe.name;
					description = recipe.description;
					imagePath = recipe.imagePath;
					if (recipe.ingredients) {
						for (const ing of recipe.ingredients) {
							ingredients.push(
								new FormGroup({
									ingName: new FormControl(ing.ingName, [
										Validators.required
									]),
									amount: new FormControl(ing.amount, [
										Validators.required,
										Validators.pattern(/^[1-9]+[0-9]*$/)
									])
								})
							);
						}
					}
				});
		}
		this.recipeForm = new FormGroup({
			name: new FormControl(name, [Validators.required]),
			imagePath: new FormControl(imagePath, Validators.required),
			description: new FormControl(description, Validators.required),
			ingredients
		});
	}

	ngOnDestroy() {
		if (this.storeSub) {
			this.storeSub.unsubscribe();
		}
	}
}
