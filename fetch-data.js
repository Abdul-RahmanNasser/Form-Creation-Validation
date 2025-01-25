// Async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list element to display user names
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach((user) => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run the fetchUserData function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);