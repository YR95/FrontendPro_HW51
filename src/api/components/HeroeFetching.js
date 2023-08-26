import {controller} from './FetchingInfo.js';
import Hero from './Hero.js';

export let heroesList = [];

export async function createUsersFromRequst(hero) {
  const heroes = await controller(hero);
  heroes.forEach(x => {
    heroesList.push(new Hero(x.id, x.name, x.comics, x.favourite));
  });
  console.log(heroesList);
  return heroes;
}

