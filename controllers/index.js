/*
index.js
Seungkoo Kim
301150666
Midterm
 */
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
