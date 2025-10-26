const botContainer = document.querySelector(".bot-container"); 
const input = document.getElementById("input");
const createButton = document.getElementById("create-button");

createButton.addEventListener("click", (amount) => {

    while (botContainer.hasChildNodes()) {
        botContainer.removeChild(botContainer.firstChild);
    }

    amount = input.value;

    for (let i = 1; i <= amount; i++) {
        // Creates AMOUNT of rows.
        const newRow = document.createElement("div");
        newRow.className = "row";
        const row = document.querySelector(".row");
        botContainer.appendChild(newRow);

        for (let i = 1; i <= amount; i++) {
            // Creates AMOUNT of items inside ONE row. 
            const newItem = document.createElement("div");
            newItem.setAttribute("id", "item");

            // Makes the item black when you hover over it.
            newItem.addEventListener("mouseover", () => {
                newItem.style.backgroundColor = "black";
            });

            newRow.appendChild(newItem);
        }
    }
});
