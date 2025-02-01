Multilingual FAQs Management System

This is a Node.js application for managing multilingual FAQs (Frequently Asked Questions) with API support. The application allows CRUD operations on FAQs and includes translation support for multiple languages. It also features an admin panel for managing FAQs efficiently.

Features

Create, Read, Update, and Delete (CRUD) operations for FAQs.

Multilingual support with automatic translations.

Caching for faster responses.

Admin panel for managing FAQs.

RESTful API endpoints.



Installation Steps

Prerequisites

Make sure you have the following installed:

Node.js (v16 or above recommended)

MongoDB

Redis

Git

Steps

Clone the Repository

git clone https://github.com/your-username/multilingual-faqs.git
cd multilingual-faqs

Install Dependencies

npm install

Set Up Environment Variables
Create a .env file in the project root with the following contents:

PORT=5000
MONGO_URI=<your_mongodb_connection_string>
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

Replace <your_mongodb_connection_string> with your MongoDB connection string.

Start the Application

npm start

Access the Admin Panel
Open your browser and navigate to:

http://localhost:5000/admin


