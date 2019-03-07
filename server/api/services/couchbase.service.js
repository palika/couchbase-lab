import db from './cuchbase.db.service';

class CouchbaseService {
  getBeerById(beerId) {
    return new Promise((resolve, reject) => {
      db.byKey(beerId, resolve, reject);
    });
  }

  getBreweryById(breweryId) {
    return new Promise((resolve, reject) => {
      db.byKey(breweryId, resolve, reject);
    });
  }

  getBeers(offset, limit) {
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM `beer-sample` WHERE type="beer"';
      if (offset) {
        query += ` OFFSET ${+offset}`;
      }

      if (limit) {
        query += ` LIMIT ${+limit}`;
      }

      db.query(query, [], (data, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  getBreweries(offset, limit) {
    return new Promise((resolve, reject) => {
      let query = 'SELECT META(brewery).id as id, brewery FROM `beer-sample` brewery WHERE type="brewery"';
      if (offset) {
        query += ` OFFSET ${+offset}`;
      }

      if (limit) {
        query += ` LIMIT ${+limit}`;
      }

      db.query(query, [], (data, error) => {
        if (error) {
          reject(error);
        } else {
          const result = [];
          data.forEach(d => result.push({ ...d.brewery, id: d.id }));
          resolve(result);
        }
      });
    });
  }

  upsertDocument(documentKey, document) {
    return new Promise((resolve, reject) => {
      db.upsertDocument(documentKey, document, resolve, reject);
    });
  }
}

export default new CouchbaseService();

