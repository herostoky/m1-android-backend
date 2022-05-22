exports.compile = (mongoose) => {
    const conentSchema = mongoose.Schema(
        {
            title: {
                type: String,
            },
            picture: {
                type: String,
            },
            description: {
                type: String,
            },
            type: {
                type: String,
            },
            url: {
                type: String,
            }
        },
        { 
            collection: 'content'
        }
    );
    return mongoose.model('content', conentSchema);
}
