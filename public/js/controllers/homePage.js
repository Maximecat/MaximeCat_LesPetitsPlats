import { RecipeFactory } from "../factories/RecipeFactory.js";
import { RecipeService } from "../service/RecipeService.js";

class HomePageController {
    recipeService;

    searchInput;
    btnIngredients;
    inputIngredients;
    btnAppareils;
    inputAppareils;
    btnUstensiles;
    inputUstensiles;

    selectedTags;

    tagsContainer;
    recipesContainer;

    recipes;

    constructor() {
        this.recipeService = new RecipeService();
        this.searchInput = document.getElementById('input-searchbar');
        this.btnIngredients = document.getElementById('btn-ingredients');
        this.btnAppareils = document.getElementById('btn-appareils');
        this.btnUstensiles = document.getElementById('btn-ustensiles');
        this.selectedTags = [];
        this.tagsContainer = document.getElementById('pourtags');
        this.recipesContainer = document.getElementById('recipes-container');
        this.recipes = [];

        this.getRecipesDatas();
    }

    async getRecipesDatas() {
        this.recipes = await this.recipeService.getRecipes();
        this.displayRecipes();

        console.log(recipes);
    }

    displayRecipes() {
        for (const recipe of this.recipes) {
            const recipeFactory = new RecipeFactory(recipe);
            const recipeCard = recipeFactory.createRecipeCard();

            this.recipesContainer.appendChild(recipeCard);
        }
    }

    getIngredients() {

    }

    getAppareils() {
        
    }

    getUstensiles() {
        
    }

    displayIngredients() {

    }

    displayAppareils() {
        
    }

    displayUstensiles() {
        
    }
}

new HomePageController();