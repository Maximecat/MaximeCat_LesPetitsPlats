import { Recipe } from "../models/Recipe.js";

export class RecipeService {
    constructor() { }

    // Récupération des Recipes dans les datas
    getRecipes(selectedTags, searchInput) {
        return fetch('public/datas/datas.json')
            .then(res => res.json())
            .then(datas => {
                // Si un tag est sélectionné (donc ajouter au tableau) et que ce tableau a une longueur
                if (selectedTags && selectedTags.length) {
                    // Pour chaque tag dans mon tableau
                    for (const tag of selectedTags) {
                        // Filtre des recettes suivant 3 cas (si le tag sélectionné est : un ingredient, un appareil ou un ustensile)
                        datas.recipes = datas.recipes.filter(recipe => {
                            switch (tag.type) {
                                case 'ingredient':
                                    console.log('ingredient');
                                    return recipe.ingredients.filter(ingredient => {
                                        return ingredient.ingredient === tag.value
                                    }).length > 0;

                                case 'appareil':
                                    console.log('appareil');
                                    return tag.value === recipe.appliance;

                                case 'ustensile':
                                    console.log('ustensile');
                                    return recipe.ustensils.includes(tag.value);
                            }
                        })
                    }
                }
                // Si une valeur est inscrite dans searchInput
                if (searchInput) {
                    // Filtre des recettes
                    datas.recipes = datas.recipes.filter(recipe => {
                        const checkNameOrDesc = new RegExp(searchInput.toLowerCase()).test(recipe.name.toLowerCase()) || new RegExp(searchInput.toLowerCase()).test(recipe.description.toLowerCase());
                        // Si la recherche est contenu dans le titre ou la description d'une recette, on l'affiche
                        if (checkNameOrDesc) {
                            return true;
                        } else {
                            const foundIngredient = recipe.ingredients.find(ing => {
                                return new RegExp(searchInput.toLowerCase()).test(ing.ingredient.toLowerCase());
                            });
                            // Si la recherche est contenu dans la liste des ingrédients d'une recette, on l'affiche
                            if (foundIngredient) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    });
                }
                return datas.recipes.map(recipe => new Recipe(recipe))
            })
            .catch(err => console.error(err))
    }

    // Récupération des Ingredients (Tableau des recettes, input de recherche des boutons, tableau des tags sélectionnés)
    getIngredients(recipes, filterText, selectedTags) {
        // Création d'un tableau d'ingredients
        let ingredients = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ingredients.map(ingredient => {
                        return ingredient.ingredient;
                    });
                }).flat()
            )
        )

        // Si une saisi est formuler dans l'input du bouton, filtre des ingredients dans le tableau et affiche ceux qui contiennent la saisi
        if (filterText) {
            ingredients = ingredients.filter(ingredient => {
                return ingredient.toLowerCase().includes(filterText.toLowerCase());
            })
        }

        // Actualisation du tableau d'ingredients en enlevant la valeur du tag sélectionné
        ingredients = ingredients.filter(ingredient => {
            return !selectedTags.map(tag => tag.value).includes(ingredient);
        })

        return ingredients.sort((a, b) => a.localeCompare(b));
    }

    // Récupération des Appareils
    getAppareils(recipes, filterText, selectedTags) {
        // Création d'un tableau d'appareils
        let appareils = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.appliance;
                })
            )
        )

        // Si une saisi est formuler dans l'input du bouton, filtre des appareils dans le tableau et affiche ceux qui contiennent la saisi
        if (filterText) {
            appareils = appareils.filter(appareil => {
                return appareil.toLowerCase().includes(filterText.toLowerCase());
            })
        }

        // Actualisation du tableau d'appareils en enlevant la valeur du tag sélectionné
        appareils = appareils.filter(appareil => {
            return !selectedTags.map(tag => tag.value).includes(appareil);
        })

        return appareils.sort((a, b) => a.localeCompare(b));
    }

    // Récupération des Ustensiles
    getUstensiles(recipes, filterText, selectedTags) {
        // Création d'un tableau d'ustensiles
        let ustensiles = new Array(
            ...new Set(
                recipes.map(recipe => {
                    return recipe.ustensils;
                }).flat()
            )
        )

        // Si une saisi est formuler dans l'input du bouton, filtre des ustensiles dans le tableau et affiche ceux qui contiennent la saisi
        if (filterText) {
            ustensiles = ustensiles.filter(ustensile => {
                return ustensile.toLowerCase().includes(filterText.toLowerCase());
            })
        }

        // Actualisation du tableau d'ustensiles en enlevant la valeur du tag sélectionné
        ustensiles = ustensiles.filter(ustensile => {
            return !selectedTags.map(tag => tag.value).includes(ustensile);
        })

        return ustensiles.sort((a, b) => a.localeCompare(b));
    }
}