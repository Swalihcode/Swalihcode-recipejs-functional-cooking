// 1. Recipes Data (IMMUTABLE)
const recipes = [
    { id: 1, title: "Spaghetti Carbonara", time: 20, difficulty: "easy", description: "A classic Italian pasta dish with eggs, cheese, and pancetta." },
    { id: 2, title: "Chicken Tikka Masala", time: 45, difficulty: "medium", description: "Roasted marinated chicken chunks in a spiced sauce." },
    { id: 3, title: "Garden Salad", time: 10, difficulty: "easy", description: "Fresh greens with a light balsamic vinaigrette." },
    { id: 4, title: "Beef Wellington", time: 90, difficulty: "hard", description: "Beef fillet wrapped in puff pastry with mushroom duxelles." },
    { id: 5, title: "Vegetable Stir Fry", time: 15, difficulty: "easy", description: "Quick and healthy veggies sautéed in ginger and soy." },
    { id: 6, title: "Chocolate Soufflé", time: 40, difficulty: "hard", description: "A light, airy French dessert." },
    { id: 7, title: "Classic Cheeseburger", time: 25, difficulty: "medium", description: "Juicy beef patty with melted cheddar." },
    { id: 8, title: "Lentil Soup", time: 35, difficulty: "easy", description: "Hearty and warming soup packed with protein." }
];

// 2. State
let currentFilter = "ALL";
let currentSort = "name";

// 3. DOM
const recipeContainer = document.querySelector("#recipe-container");

// 4. Pure Filter Function
const filterRecipes = (list, filter) => {
    if (filter === "quick") {
        return list.filter(r => r.time < 30);
    }
    if (filter === "ALL") {
        return list;
    }
    return list.filter(r => r.difficulty === filter);
};

// 5. Pure Sort Function
const sortRecipes = (list, sortType) => {
    const copy = [...list];
    if (sortType === "time") {
        return copy.sort((a, b) => a.time - b.time);
    }
    return copy.sort((a, b) => a.title.localeCompare(b.title));
};

// 6. Create Card
const createRecipeCard = (recipe) => `
    <div class="recipe-card">
        <h3>${recipe.title}</h3>
        <div class="recipe-meta">
            <span>${recipe.time} min</span>
            <span class="difficulty ${recipe.difficulty}">
                ${recipe.difficulty}
            </span>
        </div>
        <p>${recipe.description}</p>
    </div>
`;

// 7. Render
const renderRecipes = (list) => {
    recipeContainer.innerHTML = list.map(createRecipeCard).join("");
};

// 8. Central Update Function ⭐
const updateDisplay = () => {
    const filtered = filterRecipes(recipes, currentFilter);
    const sorted = sortRecipes(filtered, currentSort);
    renderRecipes(sorted);
};

// 9. Button Handlers
const setFilter = (filter) => {
    currentFilter = filter;
    updateDisplay();
};

const setSort = (sort) => {
    currentSort = sort;
    updateDisplay();
};

// 10. Init
updateDisplay();