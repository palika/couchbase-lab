import couchbaseRouter from './api/controllers/couchbase/router';

export default function routes(app) {
  app.use('/api/v1/couchbase', couchbaseRouter);
}
