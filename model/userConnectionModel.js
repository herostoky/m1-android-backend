exports.compile = (mongoose) => {
    const userConnectionSchema = mongoose.Schema(
        {
          user: {
            _id: {
              type: String,
              required: true,
            },
            username: {
              type: String,
            },
            full_name: {
              type: String,
            },
            email: {
              type: String,
            }
          },
          token: {
            type: String,
            required: true,
          },
          expiration_date: {
            type: Date,
            required: false,
          }
        },
        {
            collection: 'user_connection'
        }
    );
    return mongoose.model('user_connection', userConnectionSchema);
}
