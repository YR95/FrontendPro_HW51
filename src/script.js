import {
  createHeroesFromRequst,
  heroesList
} from './api/components/HeroeFetching.js';
import {createUniverseFromReqeust} from './api/components/UniferseFetching.js';
import {renderHero} from './api/components/HeroeRender.js';

createHeroesFromRequst("Heroes").then(()=>{
  renderHero(heroesList);
  console.log(heroesList);
})

createUniverseFromReqeust("Universes")