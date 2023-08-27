import {
  addHeroe, createHeroesFromRequst,
  deleteHeroe, heroesList,
  updateHeroeFavt
} from './HeroeFetching.js';
import Hero from './Hero.js';
import {controller} from './FetchingInfo.js';

export function renderHero(list) {
  list.forEach(x => {
    let tr = document.createElement("tr");
    tr.id = x;
    let tdName = document.createElement("td");
    tdName.id = x.name;
    tdName.innerText = x.name;
    let tdComics = document.createElement("td");
    tdComics.comics = x.comics;
    tdComics.innerText = x.comics;
    let tdFav = document.createElement("input");
    tdFav.id = x.favourite;
    tdFav.type = "checkbox";
    x.favourite === true ? tdFav.checked = true : tdFav.checked = false;
    let tdButton = document.createElement("button");
    tdButton.id = x;
    tdButton.innerText = "Delete";

    tr.append(tdName, tdComics, tdFav, tdButton);
    let table = document.querySelector("#heroesTableTbody");
    table.append(tr);

    tdFav.addEventListener('click', () => {
      x.favourite = !x.favourite;
      updateHeroeFavt(`Heroes/${x.id}`, x);
    });
    tdButton.addEventListener('click', () => {
      try {
        deleteHeroe(`Heroes/${x.id}`, x);
        tr.innerText = "";
      } catch (error) {
        console.log("Impossible to remove");
      }

    });
  });
}

document.querySelector("#addHero").addEventListener("click", () => {
  let name = document.querySelector("#heroName").value;
  let comics = document.querySelector("#selectComics").value;
  let favourite = document.querySelector("#heroFavIn").checked;
  let id = parseInt(heroesList[heroesList.length - 1].id) + 1;

  let hero = new Hero(id, name, comics, favourite);
  let result = [];
  createHeroesFromRequst("Heroes")
  .then((data) => {
    result = data.filter(x => {
      if (x.name === name) {
        alert("Such a hero already exist");
        return x;
      }
    });

    if (result.length === 0) {
     addHeroe(`Heroes`, hero);
     renderOneHero(hero);
    }

  });
});

  function renderOneHero(obj) {
    let tr = document.createElement("tr");
    tr.id = obj;
    let tdName = document.createElement("td");
    tdName.id = obj.name;
    tdName.innerText = obj.name;
    let tdComics = document.createElement("td");
    tdComics.comics = obj.comics;
    tdComics.innerText = obj.comics;
    let tdFav = document.createElement("input");
    tdFav.id = obj.favourite;
    tdFav.type = "checkbox";
    obj.favourite === true ? tdFav.checked = true : tdFav.checked = false;
    let tdButton = document.createElement("button");
    tdButton.id = obj;
    tdButton.innerText = "Delete";

    tr.append(tdName, tdComics, tdFav, tdButton);
    let table = document.querySelector("#heroesTableTbody");
    table.append(tr);

    tdFav.addEventListener('click', () => {
      obj.favourite = !obj.favourite;
      updateHeroeFavt(`Heroes/${obj.id}`, obj);
    });
    tdButton.addEventListener('click', () => {
      try {
        deleteHeroe(`Heroes/${obj.id}`, obj);
        tr.innerText = "";
      } catch (error) {
        console.log("Impossible to remove");
      }

    });
    return tr;
  }
