# Multilingual FAQs Management System

This is a Node.js application for managing multilingual FAQs (Frequently Asked Questions) with API support. The application allows CRUD operations on FAQs and includes translation support for multiple languages. It also features an admin panel for managing FAQs efficiently.

## Features
- Create, Read, Update, and Delete (CRUD) operations for FAQs.
- Multilingual support with automatic translations.
- Caching for faster responses.
- Admin panel for managing FAQs.
- RESTful API endpoints.

---

## Installation Steps

### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or above recommended)
- MongoDB
- Redis
- Git

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/multilingual-faqs.git
   cd multilingual-faqs
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the project root with the following contents:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   ```
   Replace `<your_mongodb_connection_string>` with your MongoDB connection string.

4. **Start the Application**
   ```bash
   npm start
   ```

5. **Access the Admin Panel**
   Open your browser and navigate to:
   ```
   http://localhost:5000/admin
   ```

---

## API Usage Examples

### Base URL
```
http://localhost:5000/api/faqs
```

### Endpoints

#### 1. Get FAQs (Default: English)
```bash
GET /api/faqs
```
Response:
```json
[
  {
    "_id": "123456789",
    "question": "What is Node.js?",
    "answer": "Node.js is a runtime environment that allows JavaScript to run outside the browser."
  }
]
```

#### 2. Get FAQs in Hindi
```bash
GET /api/faqs?lang=hi
```
Response:
```json
[
  {
    "_id": "123456789",
    "question": "\u0928\u094b\u0921.\u091c\u0947\u0905\u0938 \u0915\u094d\u092f\u093e \u0939\u0948?",
    "answer": "Node.js \u092f\u0947\u0915 \u0930\u0928\u091f\u093e\u0907\u092e \u090f\u0928\u094d\u0935\u093e\u092f\u0930\u092e\u0947\u0902\u091f \u0939\u0948 \u091c\u094b JavaScript \u0915\u094b \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u0915\u0947 \u092c\u093e\u0939\u0930 \u091a\u0932\u093e \u0938\u0915\u0947."
  }
]
```

#### 3. Create a New FAQ
```bash
POST /api/faqs
```
Request Body:
```json
{
  "question": "What is Express.js?",
  "answer": "Express.js is a web framework for Node.js."
}
```
Response:
```json
{
  "_id": "987654321",
  "question": "What is Express.js?",
  "answer": "Express.js is a web framework for Node.js."
}
```

#### 4. Update an FAQ
```bash
PUT /api/faqs/:id
```
Request Body:
```json
{
  "question": "Updated question",
  "answer": "Updated answer"
}
```

#### 5. Delete an FAQ
```bash
DELETE /api/faqs/:id
```

---

## Contribution Guidelines

We welcome contributions to enhance this project. Follow these steps to contribute:

1. **Fork the Repository**
   Click the "Fork" button on the top-right of the repository.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/multilingual-faqs.git
   cd multilingual-faqs
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   Add your feature or fix bugs. Ensure your code follows the coding standards.

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: Add a meaningful commit message"
   ```

6. **Push Your Changes**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   Go to the original repository and click on "New Pull Request". Describe your changes and submit the pull request.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

---

## Contact
For any queries or feedback, feel free to contact:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

