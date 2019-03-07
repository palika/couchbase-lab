import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/beers', controller.getBeers)
  .get('/beers/:id', controller.getBeerById)
  .post('/beers/:id', controller.upsertBeer)
  .get('/breweries', controller.getBreweries)
  .get('/breweries/:id', controller.getBreweryById)
  .post('/breweries/:id', controller.upsertBrewery)
;
