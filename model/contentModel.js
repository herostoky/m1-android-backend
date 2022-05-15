exports.compile = (mongoose) => {
    const conentSchema = mongoose.Schema(
        {
            name: String
        },
        { 
            collection: 'content'
        }
    );
    return mongoose.model('content', conentSchema);
}
