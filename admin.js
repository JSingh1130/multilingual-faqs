const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
const mongoose = require('mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose], // Connect to MongoDB
  rootPath: '/admin',    // Admin Panel Route
});

const adminRouter = AdminBroExpress.buildRouter(adminBro);

module.exports = adminRouter;
