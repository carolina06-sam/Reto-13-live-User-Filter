const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50");

    const { results } = await res.json();
    //const data = await res.json(); //retorna datos en json
    //console.log(data);
    // Clear result
    //console.log(results);

    result.innerHTML = "";

    results.forEach((user) => {
        //console.log(user);
        const li = document.createElement("li"); //creo otro elemnto de la lista
        listItems.push(li);

        //añado un li al array vacio declarado

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;
        /* llamo las propiedades del objeto (user )nombre que llame en el foreach */

        result.appendChild(li);
    });
}

function filterData(searchTerm) {
    console.log(searchTerm);
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}
