import couchbase from 'couchbase';
import config from '../config/couchbase.config';
import log from '../../common/logger';

const NotImplementedErrorMsg = 'Function not implemented in couchbase.db.service';

class CouchbaseDatabase {
  constructor() {
    const endPoint = config.couchbase.endPoint;
    const bucket = config.couchbase.bucket;

    const { user, password } = config.couchbase;

    this.cluster = new couchbase.Cluster(endPoint);
  }

  getReplica(key, resolve, reject) {
    log.info(`Reading replica with key ${key}`);
    reject({ error: NotImplementedErrorMsg });
  }

  byKey(key, resolve, reject) {
    log.info(`Get document by key ${key}`);
    reject({ error: NotImplementedErrorMsg });
  }

  query(queryStr, params, callback) {
    log.info(`Execute N1QL query ${queryStr} with params: ${params}`);
    callback(null, { error: NotImplementedErrorMsg });
  }

  upsertDocument(key, document, resolve, reject) {
    log.info(`Upsertig document with key ${key}`);
    reject({ error: NotImplementedErrorMsg });
  }
}

export default new CouchbaseDatabase();
