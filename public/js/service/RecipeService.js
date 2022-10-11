import { Recipe } from "../models/Recipe.js";

export class RecipeService {
    constructor() { }

    // Récupération des Recipes dans les datas
    getRecipes() {
        return fetch('public/datas/datas.json')
            .then(res => res.json())
            .then(datas => datas.recipes.map(recipe => new Recipe(recipe)))
            .catch(err => console.error(err))
    }

    // Récupération des Ingredients
    getIngredients(recipes, filterText, selectedTags) {

        // Création d'un tableau
        let ingredients = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ingredients.map(ingredient => {
                        return ingredient.ingredient;
                    });
                }).flat()
            )
        )

        // Tri du tableau suivant la saisie dans l'input
        if (filterText) {
            ingredients = ingredients.filter(ingredient => {
                return ingredient.includes(filterText);
            })
        }

        // Actualisation de la liste des ingredients dans le tableau aprés sélection d'un élément
        ingredients = ingredients.filter(ingredient => {
            return !selectedTags.map(tag => tag.value).includes(ingredient);
        })

        return ingredients;
    }

    // Récupération des Appareils
    getAppareils(recipes, filterText, selectedTags) {

        // Création d'un tableau
        let appareils = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.appliance;
                })
            )
        )

        // Tri du tableau suivant la saisie dans l'input
        if (filterText) {
            appareils = appareils.filter(appareil => {
                return appareil.includes(filterText);
            })
        }

        // Actualisation de la liste des appareils dans le tableau aprés sélection d'un élément
        appareils = appareils.filter(appareil => {
            return !selectedTags.map(tag => tag.value).includes(appareil);
        })

        return appareils;
    }

    // Récupération des Ustensiles
    getUstensiles(recipes, filterText, selectedTags) {

        // Création d'un tableau
        let ustensiles = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ustensils;
                }).flat()
            )
        )

        // Tri du tableau suivant la saisie dans l'input
        if (filterText) {
            ustensiles = ustensiles.filter(ustensile => {
                return ustensile.includes(filterText);
            })
        }

        // Actualisation de la liste des ustensiles dans le tableau aprés sélection d'un élément
        ustensiles = ustensiles.filter(ustensile => {
            return !selectedTags.map(tag => tag.value).includes(ustensile);
        })

        return ustensiles;
    }
}