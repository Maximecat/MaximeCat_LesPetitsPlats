import { Recipe } from "../models/Recipe.js";

export class RecipeService {
    constructor() { }

    getRecipes() {
        return fetch('public/datas/datas.json')
            .then(res => res.json())
            .then(datas => datas.recipes.map(recipe => new Recipe(recipe)))
            .catch(err => console.error(err))
    }
}