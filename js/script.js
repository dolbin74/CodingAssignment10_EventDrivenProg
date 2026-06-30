// ===============================
// a loot array that is persistent
// ===============================
let loot = [];   // persists across button clicks

// ===============================
// Refrences to Elements
// ===============================
const lootName = document.getElementById("lootName");
const lootValue = document.getElementById("lootValue");
const addLootBtn = document.getElementById("addLootBtn");
const lootList = document.getElementById("lootList");
const totalValue = document.getElementById("totalValue");
const message = document.getElementById("message");

// ===============================
// the Event Listener
// ===============================
addLootBtn.addEventListener("click", function () {

  // Clear previous message
  message.textContent = "";

  // Read input values
  const name = lootName.value.trim();
  const value = Number(lootValue.value);

  // ===============================
  // Ensuring vallidcation Validation
  // ===============================
  if (name === "") {
    message.textContent = "Loot name cannot be empty.";
    return;
  }

  if (isNaN(value) || value < 0) {
    message.textContent = "Loot value must be a valid non-negative number.";
    return;
  }

  // ===============================
  // Creating a loot object
  // ===============================
  const item = {
    name: name,
    value: value
  };

  // Store in array
  loot.push(item);

  // ===============================
  // Rendering the loot list
  // ===============================
  lootList.innerHTML = ""; // clear list

  for (let i = 0; i < loot.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${loot[i].name} — $${loot[i].value}`;
    lootList.appendChild(li);
  }

  // ===============================
  // Calculatinng the totals
  // ===============================
  let sum = 0;
  for (let i = 0; i < loot.length; i++) {
    sum += loot[i].value;
  }

  totalValue.textContent = "$" + sum;

  // Clear inputs
  lootName.value = "";
  lootValue.value = "";
});

/*
BELOW IS THE DEBUGGING REFLECTION:
I placed a breakpoint inside the event listener. Before clicking the button,
the loot array was empty. After clicking, the array updated immediately with
the new object. The interface updated only AFTER the array mutation and AFTER
the loops have finished with rendering the list and total. From a systems thinking perspective, the state changed first,
then the screen updated.
*/
