const username = "sevro49";
const projectsElement = document.querySelector(".profile div:nth-child(2) .number-of-repos");
const projectsElementText = document.querySelector("#home__b .hours");

fetch(`https://api.github.com/users/${username}`, {})
   .then(response => response.json())
   .then(data => {
       const numRepos = data.public_repos;
        projectsElement.innerText = `${numRepos}`;
        projectsElementText.innerText = `${numRepos}`;
    })
    .catch(error => console.error(error));

