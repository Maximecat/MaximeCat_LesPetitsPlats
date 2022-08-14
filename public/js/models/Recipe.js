export class Recipe {
    id;
    name;
    servings;
    ingredients;
    time;
    description;
    appliance;
    ustensils;

    constructor(recipeDatas){
        this.id = recipeDatas.id;
        this.name = recipeDatas.name;
        this.servings = recipeDatas.servings;
        this.ingredients = recipeDatas.ingredients;
        this.time = recipeDatas.time;
        this.description = recipeDatas.description;
        this.appliance = recipeDatas.appliance;
        this.ustensils = recipeDatas.ustensils;
    }
}