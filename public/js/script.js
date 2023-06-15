// To fetch number of public repositories
const username = "sevro49";
const token = "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";
const projectsElement = document.querySelector(
    ".profile div:nth-child(2) .number"
);

fetch(`https://api.github.com/users/${username}`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
})
    .then((response) => response.json())
    .then((data) => {
        const numRepos = data.public_repos;
        // Display the number of repositories on your website
        projectsElement.innerText = `${numRepos}`;
    })
    .catch((error) => console.error(error));
