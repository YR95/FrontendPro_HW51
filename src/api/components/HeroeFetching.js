import {controller} from './FetchingInfo.js';
import Hero from './Hero.js';
import {renderHero} from './HeroeRender.js';

export let heroesList = [];

export async function createHeroesFromRequst(hero) {
  const heroes = await controller(hero);
  heroes.forEach(x => {
    heroesList.push(new Hero(x.id, x.name, x.comics, x.favourite));
  });
  renderHero(heroesList);
  console.log(heroesList);
  return heroes;
}
export async function updateHeroeFavt(hero, data) {
  let heroUser = await controller(hero,'PUT',data);
  console.log(heroUser)
  return heroUser;
}
export async function deleteHeroe(hero, data) {
  let heroUser = await controller(hero,'DELETE',data);
  console.log(heroUser)
  return heroUser;
}
export async function addHeroe(hero, data) {
  let heroUser = await controller(hero,'POST',data);
  console.log(heroUser)
  return heroUser;
}