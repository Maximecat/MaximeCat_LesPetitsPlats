export class RecipeFactory {
    recipe;

    constructor(recipe) {
        this.recipe = recipe;
    }

    // Création d'un model de Recipe Card
    createRecipeCard() {
        const article = document.createElement('article');
        article.className = "recipe-card";

        const image = document.createElement('div');
        image.className = "recipe-card-image";

        const informationsCard = document.createElement('div');
        informationsCard.className = "card-infos";

        const informationsHeader = document.createElement('div');
        informationsHeader.className = "card-header";

        const title = document.createElement('h2');
        title.className = "recipe-title";
        title.innerText = this.recipe.name;

        const timeBox = document.createElement('div');
        timeBox.className = "recipe-time-box";

        const iconClock = document.createElement('i');
        iconClock.className = "recipe-clock-icon fa-regular fa-clock";

        const time = document.createElement('p');
        time.className = "recipe-time";
        time.innerText = this.recipe.time + " min";

        const recipePart = document.createElement('div');
        recipePart.className = "recipe-part";

        const ingredients = document.createElement('ul');
        ingredients.className = "ingredients";

        const tabIngredient = this.recipe.ingredients;

        for (let i = 0; i < tabIngredient.length; i++) {

            const ingredientBox = document.createElement('li');
            ingredientBox.className = "ingredient";

            const ingredientBold = document.createElement('span');
            ingredientBold.className = "ingredient-bold";
            ingredientBold.innerText = tabIngredient[i].ingredient;

            const ingredientDosing = document.createElement('span');
            ingredientDosing.className = "ingredient-dosing";
            ingredientDosing.textContent = tabIngredient[i].quantity ? ": " + tabIngredient[i].quantity + " " + (tabIngredient[i].unit || "") : "";

            ingredients.appendChild(ingredientBox);
            ingredientBox.appendChild(ingredientBold);
            ingredientBox.appendChild(ingredientDosing);
        }

        const recipeInstruction = document.createElement('p');
        recipeInstruction.className = "recipe-description";
        recipeInstruction.innerText = this.recipe.description;


        article.appendChild(image);
        article.appendChild(informationsCard);
        informationsCard.appendChild(informationsHeader);
        informationsCard.appendChild(recipePart);
        informationsHeader.appendChild(title);
        informationsHeader.appendChild(timeBox);
        timeBox.appendChild(iconClock);
        timeBox.appendChild(time);
        recipePart.appendChild(ingredients);
        recipePart.appendChild(recipeInstruction);

        return article;
    }
}