const username = "sevro49";
let token = "";
const filePath = '../../access_token.txt';

// Check if running on GitHub Pages or locally
if (window.location.hostname === "sevro49.github.io") {
  // Running on GitHub Pages, use environment variable
  token = process.env.ACCESS_TOKEN;
} else {
  // Running locally, use fallback token value
  const projectsElement = document.querySelector(".profile div:nth-child(2) .number-of-repos");

  fetch(filePath)
    .then(response => response.text())
    .then(data => {
        token = data;

        fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(data => {
                const numRepos = data.public_repos;
                // Display the number of repositories on your website
                projectsElement.innerText = `${numRepos}`;
            })
            .catch(error => console.error(error));
    })
    .catch(error => {
        console.error('File could not be read', error);
    });
}




