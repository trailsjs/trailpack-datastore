# trailpack-database

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Parent to the Database Trailpacks (waterline, bookshelf, sequelize, etc).

## Usage
Database Trailpacks should extend this Trailpack. For example, [trailpack-waterline](https://github.com/trailsjs/trailpack-waterline)
is implemented thus:

```js
const DatabaseTrailpack = require('trailpack-database')
class WaterlineTrailpack extends DatabaseTrailpack {
  // ...
}
```

## API

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/trailsjs/trails/blob/master/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/trailsjs/trailpack-database/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-database.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-database
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-database/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-database
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-database.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-database
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-database.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-database
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

