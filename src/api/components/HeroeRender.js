import {deleteHeroe, updateHeroeFavt} from './HeroeFetching.js';

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
