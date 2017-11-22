module.exports = (app, next) => {
  app.use('/notes', require('./note.routes'));
};
