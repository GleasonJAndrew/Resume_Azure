const { app } = require('@azure/functions');

app.http('helloWorld', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  route: 'hello',
  handler: async (request, context) => {
    context.log('HTTP function processed request.');

    return {
      status: 200,
      jsonBody: {
        message: 'Hello from Azure Functions!',
        source: 'Resume_Azure'
      }
    };
  }
});
