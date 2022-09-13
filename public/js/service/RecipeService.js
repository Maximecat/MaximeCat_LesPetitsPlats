import { Recipe } from "../models/Recipe.js";

export class RecipeService {
    constructor() { }

    getRecipes() {
        return fetch('public/datas/datas.json')
            .then(res => res.json())
            .then(datas => datas.recipes.map(recipe => new Recipe(recipe)))
            .catch(err => console.error(err))
    }

    getIngredients(recipes) {

        return new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ingredients.map(ingredient => {
                        return ingredient.ingredient;
                    });
                }).flat()
            )
        )
    }

    getAppareils(recipes) {

        return new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.appliance;
                })
            )
        )
    }

    getUstensiles(recipes) {

        return new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ustensils.map(ustensils => {
                        return ustensils;
                    });
                }).flat()
            )
        )
    }
}