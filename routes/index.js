const contactRoutes = require('./contacts');
const articleRoutes = require('./articles');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const currentUserRoutes = require('./currentUser');

module.exports = (app) => {
  app.use('/contacts', contactRoutes);
  app.use('/articles', articleRoutes);
  app.use('/users', userRoutes);
  app.use('/auth', authRoutes);
  app.use('/me', currentUserRoutes);
};
