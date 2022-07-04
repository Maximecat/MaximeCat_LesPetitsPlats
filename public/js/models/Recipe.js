export class Recipe {
    id;
    name;
    servings;
    ingredients;
    quantity;
    unit;
    time;
    description;
    appliance;
    ustensils;

    constructor(recipeDatas){
        this.id = recipeDatas.id;
        this.name = recipeDatas.name;
        this.servings = recipeDatas.servings;
        this.ingredients = recipeDatas.ingredients;
        this.quantity = recipeDatas.quantity;
        this.unit = recipeDatas.unit;
        this.time = recipeDatas.time;
        this.description = recipeDatas.description;
        this.appliance = recipeDatas.appliance;
        this.ustensils = recipeDatas.ustensils;
    }
}