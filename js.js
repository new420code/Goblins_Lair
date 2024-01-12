 var goblinCount = 0;

    function startKillingGoblins() {
        // Create a container div
        var container = document.createElement("div");

        // Create a paragraph for displaying goblin count
        var goblinCountParagraph = document.createElement("p");
        goblinCountParagraph.id = "goblinCount"; // Set the ID
        updateGoblinCount(); // Initial update of goblin count

        // Create buttons dynamically
        var fightButton = document.createElement("button");
        fightButton.textContent = "Fight Goblins";
        fightButton.onclick = function () {
            alert("Fighting " + goblinCount + " Goblins!");
        };

        var addButton = document.createElement("button");
        addButton.textContent = "Add a Goblin";
        addButton.onclick = function () {
            goblinCount++;
            updateGoblinCount();
        };

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove a Goblin";
        removeButton.onclick = function () {
            if (goblinCount > 0) {
                goblinCount--;
                updateGoblinCount();
            }
        };

        // Append elements to the container
        container.appendChild(goblinCountParagraph);
        container.appendChild(fightButton);
        container.appendChild(addButton);
        container.appendChild(removeButton);

        // Append the container to the body or another desired element
        document.body.appendChild(container);
    }

    function updateGoblinCount() {
        // Update the display of goblin count
        var goblinCountElement = document.getElementById("goblinCount");
        if (goblinCountElement) {
            goblinCountElement.textContent = "Goblin Count: " + goblinCount;
        }
    }

    function Inventory() {
        alert("You're looking in an empty bag");
    }
