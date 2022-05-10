exports.compile = (mongoose) => {
    const userSchema = mongoose.Schema(
        {
            name: String
        },
        { 
            collection: 'user'
        }
    );
    return mongoose.model('user', userSchema);
}