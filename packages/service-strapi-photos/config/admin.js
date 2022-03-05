module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '04bb6a665cfc2abb1b57a6df6186602f'),
  },
});
