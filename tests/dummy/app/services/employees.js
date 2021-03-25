/* eslint-disable ember/no-computed-properties-in-native-classes */
import { setProperties } from '@ember/object';
import { sort } from '@ember/object/computed';
import Service from '@ember/service';
import records from '../records';

const total = records.length;

class Results {
  @sort('slice', 'sort') results;
}

export default class EmployeesService extends Service {
  query(page = 1, size = 10, sort = null) {
    const pages = Math.ceil(total / size);
    const results = new Results();

    setProperties(results, {
      slice: records.slice((page - 1) * size, page * size),
      meta: { total, pages, page, size },
      sort: [sort?.replace(',', ':')],
    });

    console.log(results.results, results.slice);

    return results;
  }
}