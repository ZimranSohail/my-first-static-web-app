const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // 'json' automatically handles JSON.stringify and sets Content-Type header
        return { json: { text: 'Hello, from the API!' } };
    }
});