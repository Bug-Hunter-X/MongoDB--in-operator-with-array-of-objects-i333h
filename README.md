# MongoDB $in operator with array of objects
This repository demonstrates a common error when using the `$in` operator with an array of objects in MongoDB queries. The incorrect usage can lead to unexpected and incorrect query results.

## Bug
The bug lies in the query:
```javascript
db.collection.find({ field: { $in: [{ a: 1 }, { a: 2 }] } });
```
This query does not correctly return documents where the `field` contains either `{ a: 1 }` or `{ a: 2 }`.  Instead it will return documents where the field matches the entire object.