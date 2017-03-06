# trailpack-datastore

## Note: Deprecated as of v3. See [trailsjs/trailpack/datastore.js](https://github.com/trailsjs/trailpack/blob/master/datastore.js).

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Parent to the Datastore Trailpacks (waterline, bookshelf, sequelize, etc).

## Usage
Datastore Trailpacks should extend this Trailpack. For example, [trailpack-waterline](https://github.com/trailsjs/trailpack-waterline)
is implemented thus:

```js
const DatastoreTrailpack = require('trailpack-datastore')
class WaterlineTrailpack extends DatastoreTrailpack {
  // ...
}
```

## Configuration

### `migrate`

#### `none`
Do not perform any schema migration.

#### `create`
Create any new tables/columns, but do not alter any existing tables or columns.

#### `alter`
Alter the schema to match the new schema of the Models.

#### `drop`
Drop all tables and re-create them.

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/trailsjs/trailpack-datastore/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-datastore.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-datastore
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-datastore/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-datastore
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-datastore.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-datastore
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-datastore.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-datastore
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

