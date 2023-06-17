const username = "sevro49";
const projectsElement = document.querySelector(".profile div:nth-child(2) .number-of-repos");

fetch(`https://api.github.com/users/${username}`, {})
   .then(response => response.json())
   .then(data => {
       const numRepos = data.public_repos;
        projectsElement.innerText = `${numRepos}`;
    })
    .catch(error => console.error(error));

