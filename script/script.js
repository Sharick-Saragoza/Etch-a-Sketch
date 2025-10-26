const container = document.querySelector(".container"); 

function createGrid(amount) {
    
    for (let i = 0; i <= amount; i++) {
        // Creates AMOUNT of rows.
        const newRow = document.createElement("div");
        newRow.className = "row";
        const row = document.querySelector(".row");
        container.appendChild(newRow);

        for (let i = 0; i <= amount; i++) {
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
}

createGrid(32);