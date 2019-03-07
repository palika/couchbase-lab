import couchbase from 'couchbase';
import CouchbaseService from '../../services/couchbase.service';
import log from '../../../common/logger';

export class Controller {
  getBeers(req, res) {
    const offset = req.query.offset;
    const limit = req.query.limit;
    log.info(`Get list of beers with offset ${offset} and limit ${limit}`);

    CouchbaseService.getBeers(offset, limit)
      .then(r => {
        res.status(200).json(r);
      })
      .catch(err => {
        log.error(err);
        res.status(500).json(err);
      });
  }

  getBeerById(req, res) {
    const beerId = req.params.id;
    log.info(`Get beer by id ${beerId}`);

    CouchbaseService.getBeerById(beerId)
      .then(r => {
        res.status(200).json(r);
      })
      .catch(err => {
        if (err.code === couchbase.errors.keyNotFound) {
          res.status(404).end();
        } else {
          log.error(err);
          res.status(500).json(err);
        }
      });
  }

  upsertBeer(req, res) {
    const beer = req.body;
    const documentKey = req.params.id;
    log.info(`Upserting beer ${beer}. Using document key ${documentKey}`);

    CouchbaseService.upsertDocument(documentKey, beer)
      .then(r => {
        res.status(200).json(r);
      })
      .catch(err => {
        log.error(err);
        res.status(500).json(err);
      });
  }

  getBreweries(req, res) {
    const offset = req.query.offset;
    const limit = req.query.limit;
    log.info(`Get list of breweries with offset ${offset} and limit ${limit}`);

    CouchbaseService.getBreweries(offset, limit)
      .then(r => {
        res.status(200).json(r);
      })
      .catch(err => {
        log.error(err);
        res.status(500).json(err);
      });
  }

  getBreweryById(req, res) {
    const breweryId = req.params.id;
    log.info(`Get brewery by id ${breweryId}`);

    CouchbaseService.getBreweryById(breweryId)
      .then(r => {
        res.status(200).json(r);
      })
      .catch(err => {
        if (err.code === couchbase.errors.keyNotFound) {
          res.status(404).end();
        } else {
          log.error(err);
          res.status(500).json(err);
        }
      });
  }

  upsertBrewery(req, res) {
    const brewery = req.body;
    const documentKey = req.params.id;
    log.info(`Upserting brewery ${brewery}. Using document key ${documentKey}`);

    CouchbaseService.upsertDocument(documentKey, brewery)
      .then(r => {
        res.status(200).json(r);
      })
      .catch(err => {
        log.error(err);
        res.status(500).json(err);
      });
  }
}
export default new Controller();
