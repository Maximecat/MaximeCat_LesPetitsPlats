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

    tagsContainer;
    selectedTags;

    recipesContainer;
    recipes;

    constructor() {
        this.recipeService = new RecipeService();
        this.searchInput = document.getElementById('searchbar-input');

        this.btnIngredients = document.getElementById('btn-ingredients');
        this.btnAppareils = document.getElementById('btn-appareils');
        this.btnUstensiles = document.getElementById('btn-ustensiles');

        this.tagsContainer = document.getElementById('tags-banner');
        this.selectedTags = [];

        this.recipesContainer = document.getElementById('card-container');
        this.recipes = [];

        this.getRecipesDatas();
    }

    async getRecipesDatas() {
        this.recipes = await this.recipeService.getRecipes();
        this.displayRecipes();
        this.displayIngredients();
        this.displayAppareils();
        this.displayUstensiles();

        console.log(this.recipes);
        console.log(this.recipeService.getIngredients(this.recipes));
        console.log(this.recipeService.getAppareils(this.recipes));
        console.log(this.recipeService.getUstensiles(this.recipes));
    }

    displayRecipes() {
        for (const recipe of this.recipes) {
            const recipeFactory = new RecipeFactory(recipe);
            const recipeCard = recipeFactory.createRecipeCard();

            this.recipesContainer.appendChild(recipeCard);
        }
    }

    displayIngredients() {
        const ingredientArray = this.recipeService.getIngredients(this.recipes);
        const btnIngredient = this.btnIngredients;
        const btnSecondPart = document.createElement('div');
        btnSecondPart.className = "btn-second-part";
        const listeDisplayZone = document.createElement('ul');
        listeDisplayZone.className = "btn-liste";


        for (let i = 0; i < ingredientArray.length; i++) {
            const listeElements = document.createElement('li');
            listeElements.className = "btn-liste-element";
            listeElements.innerText = ingredientArray[i];

            btnIngredient.appendChild(btnSecondPart);
            btnSecondPart.appendChild(listeDisplayZone)
            listeDisplayZone.appendChild(listeElements);
        }
    }

    displayAppareils() {
        const appareilArray = this.recipeService.getAppareils(this.recipes);
        const btnAppareil = this.btnAppareils;
        const btnSecondPart = document.createElement('div');
        btnSecondPart.className = "btn-second-part";
        const listeDisplayZone = document.createElement('ul');
        listeDisplayZone.className = "btn-liste";


        for (let i = 0; i < appareilArray.length; i++) {
            const listeElements = document.createElement('li');
            listeElements.className = "btn-liste-element";
            listeElements.innerText = appareilArray[i];

            btnAppareil.appendChild(btnSecondPart);
            btnSecondPart.appendChild(listeDisplayZone)
            listeDisplayZone.appendChild(listeElements);
        }
    }

    displayUstensiles() {
        const ustensileArray = this.recipeService.getUstensiles(this.recipes);
        const btnUstensile = this.btnUstensiles;
        const btnSecondPart = document.createElement('div');
        btnSecondPart.className = "btn-second-part";
        const listeDisplayZone = document.createElement('ul');
        listeDisplayZone.className = "btn-liste";


        for (let i = 0; i < ustensileArray.length; i++) {
            const listeElements = document.createElement('li');
            listeElements.className = "btn-liste-element";
            listeElements.innerText = ustensileArray[i];

            btnUstensile.appendChild(btnSecondPart);
            btnSecondPart.appendChild(listeDisplayZone)
            listeDisplayZone.appendChild(listeElements);
        }
    }
}

new HomePageController();