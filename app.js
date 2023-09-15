// Import and configure dotenv to load environment variables from .env file
require("dotenv").config();

// Access the Twilio Account SID and Auth Token from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Create a Twilio client using the retrieved Account SID and Auth Token
const client = require("twilio")(accountSid, authToken);

// Use the Twilio client to send a text message
client.messages
  .create({
    body: "hi twilio", // Replace with the message you want to send
    from: "twilioNumber", // Replace with your Twilio phone number
    to: "phoneNumber", // Replace with the recipient's phone number
  })
  .then((message) => console.log(message.sid)); // Log the message SID to the console
