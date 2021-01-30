fetch("https://fe-api-jquery.firebaseio.com/fe-api-jquery.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (films) {
        const ulElement = document.querySelector("ul");
        console.log(films[0].title);
        for (let i = 0; i < films.length; i++) {
            const liElement = document.createElement("li");
            const title = document.createElement("h2");
            title.innerText = films[i].title;
            const productionYear = document.createElement("h3");
            productionYear.innerText = films[i].year;
            liElement.appendChild(title);
            liElement.appendChild(productionYear);
            ulElement.appendChild(liElement);

        }
    });
