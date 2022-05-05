module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-google-cloud-storage',
      providerOptions: {
        bucketName: env('CLOUD_STORAGE_BUCKET_NAME'),
        baseUrl: env('CLOUD_STORAGE_BASE_URL'),
        uniform: true,
      },
    },
  },
})
