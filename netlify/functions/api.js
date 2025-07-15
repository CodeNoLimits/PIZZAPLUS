const path = require('path');

exports.handler = async (event, context) => {
  // Import the server dynamically
  const { handler } = await import('../../dist/index.js');
  
  // Convert Netlify event to Express-like request/response
  const req = {
    method: event.httpMethod,
    url: event.path,
    headers: event.headers,
    body: event.body
  };

  const res = {
    statusCode: 200,
    headers: {},
    body: '',
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    json: function(data) {
      this.headers['Content-Type'] = 'application/json';
      this.body = JSON.stringify(data);
      return this;
    },
    send: function(data) {
      this.body = data;
      return this;
    }
  };

  try {
    await handler(req, res);
    return {
      statusCode: res.statusCode,
      headers: res.headers,
      body: res.body
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};