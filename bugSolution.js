```javascript
// Correct usage of $in operator with an array of objects
// Method 1: Using $elemMatch
db.collection.find({ field: { $elemMatch: { a: { $in: [1, 2] } } } });

// Method 2:  If the field is an array and we want to check for any of those elements 
db.collection.find({ field: { $in: [1,2] } }); 
```