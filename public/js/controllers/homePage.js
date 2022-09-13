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
        this.inputIngredients = document.getElementById('btn-input-ingredient');
        this.btnAppareils = document.getElementById('btn-appareils');
        this.inputAppareils = document.getElementById('btn-input-appareil');
        this.btnUstensiles = document.getElementById('btn-ustensiles');
        this.inputUstensiles = document.getElementById('btn-input-ustensile');

        this.tagsContainer = document.getElementById('tags-banner');
        this.selectedTags = [];

        this.recipesContainer = document.getElementById('card-container');
        this.recipes = [];

        this.getRecipesDatas();
        this.initEvents();
    }

    initEvents() {
        this.inputIngredients.addEventListener('keyup', (e) => {
            const ingredients = this.recipeService.getIngredients(this.recipes, e.target.value);
            this.displayIngredients(ingredients);
        });

        this.inputAppareils.addEventListener('keyup', (e) => {
            const appareils = this.recipeService.getAppareils(this.recipes, e.target.value);
            this.displayAppareils(appareils);
        });

        this.inputUstensiles.addEventListener('keyup', (e) => {
            const ustensiles = this.recipeService.getUstensiles(this.recipes, e.target.value);
            this.displayUstensiles(ustensiles);
        });
    }

    async getRecipesDatas() {
        this.recipes = await this.recipeService.getRecipes();

        this.displayRecipes();
        const ingredients = this.recipeService.getIngredients(this.recipes);
        this.displayIngredients(ingredients);
        const appareils = this.recipeService.getAppareils(this.recipes);
        this.displayAppareils(appareils);
        const ustensiles = this.recipeService.getUstensiles(this.recipes);
        this.displayUstensiles(ustensiles);
    }

    displayRecipes() {
        for (const recipe of this.recipes) {
            const recipeFactory = new RecipeFactory(recipe);
            const recipeCard = recipeFactory.createRecipeCard();

            this.recipesContainer.appendChild(recipeCard);
        }
    }

    displayIngredients(ingredientArray) {
        const ingredientPart = document.getElementById('liste-ingredient-part');
        ingredientPart.innerHTML = "";

        const ingredientList = document.createElement('ul');
        ingredientList.className = "btn-liste";

        ingredientPart.appendChild(ingredientList);

        for (let i = 0; i < ingredientArray.length; i++) {
            const listeElements = document.createElement('li');
            listeElements.className = "btn-liste-element";
            listeElements.innerText = ingredientArray[i];

            ingredientList.appendChild(listeElements);
        }
    }

    displayAppareils(appareilArray) {
        const appareilPart = document.getElementById('liste-appareil-part');
        appareilPart.innerHTML = "";

        const appareilList = document.createElement('ul');
        appareilList.className = "btn-liste";

        appareilPart.appendChild(appareilList);

        for (let i = 0; i < appareilArray.length; i++) {
            const listeElements = document.createElement('li');
            listeElements.className = "btn-liste-element";
            listeElements.innerText = appareilArray[i];

            appareilList.appendChild(listeElements);
        }
    }

    displayUstensiles(ustensileArray) {
        const ustensilePart = document.getElementById('liste-ustensile-part');
        ustensilePart.innerHTML = "";

        const ustensileList = document.createElement('ul');
        ustensileList.className = "btn-liste";

        ustensilePart.appendChild(ustensileList);

        for (let i = 0; i < ustensileArray.length; i++) {
            const listeElements = document.createElement('li');
            listeElements.className = "btn-liste-element";
            listeElements.innerText = ustensileArray[i];

            ustensileList.appendChild(listeElements);
        }
    }
}

new HomePageController();