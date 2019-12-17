import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from 'src/app/shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f', { static: false }) slForm: NgForm;
	subscription: Subscription;
	editMode = false;
	editItemIndex: number;
	editItem: Ingredient;

	constructor(
		// private shoppingListService: ShoppingListService,
		private store: Store<fromApp.AppState>
	) {}

	ngOnInit() {
		this.store.select('shoppingList').subscribe(stateData => {
			if (stateData.editedIngredientIndex > -1) {
				this.editMode = true;
				this.editItem = stateData.editedIngredient;
				this.slForm.setValue({
					name: this.editItem.ingName,
					amount: this.editItem.amount
				});
			} else {
				this.editMode = false;
			}
		});
		// this.subscription = this.shoppingListService.startedEditing.subscribe(
		// 	(index: number) => {
		// 		this.editItemIndex = index;
		// 		this.editMode = true;
		// 		this.editItem = this.shoppingListService.getIngredient(index);
		// 		this.slForm.setValue({
		// 			name: this.editItem.ingName,
		// 			amount: this.editItem.amount
		// 		});
		// 	}
		// );
	}

	onSubmit() {
		const value = this.slForm.value;
		const newIngredient = new Ingredient(value.name, value.amount);
		if (this.editMode) {
			// this.shoppingListService.updateIngredient(
			// 	this.editItemIndex,
			// 	newIngredient
			// );
			this.store.dispatch(
				new ShoppingListActions.UpdateIngredient(newIngredient)
			);
		} else {
			// this.shoppingListService.addIngredient(newIngredient);
			this.store.dispatch(
				new ShoppingListActions.AddIngredient(newIngredient)
			);
		}
		this.editMode = false;
		this.slForm.reset();
	}

	onClear() {
		this.slForm.reset();
		this.editMode = false;
		this.store.dispatch(new ShoppingListActions.StopEdit());
	}

	onDelete() {
		// this.shoppingListService.deleteIngredient(this.editItemIndex);
		this.store.dispatch(new ShoppingListActions.DeleteIngredient());
		this.onClear();
	}

	ngOnDestroy() {
		this.store.dispatch(new ShoppingListActions.StopEdit());
		// this.subscription.unsubscribe();
	}
}
