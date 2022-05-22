exports.compile = (mongoose) => {
    const userSchema = mongoose.Schema(
        {
            username: {
              type: String,
              required: true,
            },
            full_name: {
              type: String,
              required: false,
            },
            email: {
              type: String,
              required: true
            },
            login_password: {
              type: String,
              required: true,
            }
        },
        {
            collection: 'user'
        }
    );
    return mongoose.model('user', userSchema);
}
