import {controller} from './FetchingInfo.js';
import Universe from './Universe.js';

export let universesList = [];

export async function createUniverseFromReqeust(universe) {
  let universes = await controller(universe);
  universes.forEach(x => {
    universesList.push( new Universe(x.id, x.name));
  });
  console.log(universesList);
  return universesList;
}
