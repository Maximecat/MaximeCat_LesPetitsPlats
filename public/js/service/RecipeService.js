import { Recipe } from "../models/Recipe.js";

export class RecipeService {
    constructor() { }

    getRecipes() {
        return fetch('public/datas/datas.json')
            .then(res => res.json())
            .then(datas => datas.recipes.map(recipe => new Recipe(recipe)))
            .catch(err => console.error(err))
    }

    getIngredients(recipes, filterText) {

        let ingredients = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ingredients.map(ingredient => {
                        return ingredient.ingredient;
                    });
                }).flat()
            )
        )

        console.log(filterText);

        if (filterText) {
            ingredients = ingredients.filter(ingredient => {
                return ingredient.includes(filterText);
            })
        }

        return ingredients;
    }

    getAppareils(recipes, filterText) {

        let appareils = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.appliance;
                })
            )
        )

        console.log(filterText);

        if (filterText) {
            appareils = appareils.filter(appareil => {
                return appareil.includes(filterText);
            })
        }

        return appareils;
    }

    getUstensiles(recipes, filterText) {

        let ustensiles = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ustensils;
                }).flat()
            )
        )

        console.log(filterText);

        if (filterText) {
            ustensiles = ustensiles.filter(ustensile => {
                return ustensile.includes(filterText);
            })
        }

        return ustensiles;
    }
}