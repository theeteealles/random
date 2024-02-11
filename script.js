// Array of sample names
const names = ["John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Isabella", "Benjamin", "Amelia"];

// Function to generate a random name
function generateRandomName() {
    // Generate a random index within the range of the names array
    const randomIndex = Math.floor(Math.random() * names.length);
    // Get the name at the random index
    const randomName = names[randomIndex];
    // Display the random name
    document.getElementById("randomName").innerText = randomName;
}

// Add event listener to the button
document.getElementById("generateButton").addEventListener("click", generateRandomName);
