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

