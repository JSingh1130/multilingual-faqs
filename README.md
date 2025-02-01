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
curl http://localhost:8000/api/faqs/
```
Response:
```json
[
  {
    "translations": {
      "hi": {
        "question": "Node.js क्या है?",
        "answer": "Node.js is a runtime environment that allows JavaScript to run outside the browser."
      },
      "bn": {
        "question": "নোড.জেএস কী?",
        "answer": "Node.js is a runtime environment that allows JavaScript to run outside the browser."
      }
    },
    "_id": "679e3223447f43d979f61ae5",
    "question": "What is Node.js?",
    "answer": "Node.js is a runtime environment that allows JavaScript to run outside the browser.",
    "__v": 0
  },
  {
    "translations": {
      "hi": {
        "question": "एक्सप्रेस.जेएस क्या है?",
        "answer": "Express.js is a web framework for Node.js."
      },
      "bn": {
        "question": "এক্সপ্রেস.জেএস কী?",
        "answer": "Express.js is a web framework for Node.js."
      }
    },
    "_id": "679e61f39934b9cd234b4435",
    "question": "What is Express.js?",
    "answer": "Express.js is a web framework for Node.js.",
    "createdAt": "2025-02-01T18:03:31.385Z",
    "updatedAt": "2025-02-01T18:03:31.385Z",
    "__v": 0
  },
  {
    "translations": {
      "hi": {
        "question": "एक्सप्रेस.जेएस क्या है?",
        "answer": "Express.js is a web framework for Node.js."
      },
      "bn": {
        "question": "এক্সপ্রেস.জেএস কী?",
        "answer": "Express.js is a web framework for Node.js."
      }
    },
    "_id": "679e62aa030364e72453d3c0",
    "question": "What is Express.js?",
    "answer": "Express.js is a web framework for Node.js.",
    "createdAt": "2025-02-01T18:06:34.682Z",
    "updatedAt": "2025-02-01T18:06:34.682Z",
    "__v": 0
  },
  {
    "translations": {
      "hi": {
        "question": "एक्सप्रेस.जेएस क्या है?",
        "answer": "Express.js is a web framework for Node.js."
      },
      "bn": {
        "question": "এক্সপ্রেস.জেএস কী?",
        "answer": "Express.js is a web framework for Node.js."
      }
    },
    "_id": "679e6cc60dbfe06b940a17eb",
    "question": "What is Express.js?",
    "answer": "Express.js is a web framework for Node.js.",
    "createdAt": "2025-02-01T18:49:42.974Z",
    "updatedAt": "2025-02-01T18:49:42.974Z",
    "__v": 0
  },
  {
    "translations": {
      "hi": {
        "question": "एक्सप्रेस.जेएस क्या है?",
        "answer": "Express.js is a web framework for Node.js."
      },
      "bn": {
        "question": "এক্সপ্রেস.জেএস কী?",
        "answer": "Express.js is a web framework for Node.js."
      }
    },
    "_id": "679e6eaad6e11445407c18b3",
    "question": "What is Express.js?",
    "answer": "Express.js is a web framework for Node.js.",
    "createdAt": "2025-02-01T18:57:46.732Z",
    "updatedAt": "2025-02-01T18:57:46.732Z",
    "__v": 0
  },
  {
    "translations": {
      "hi": {
        "question": "USA का पूरा नाम क्या है?",
        "answer": "संयुक्त राज्य अमेरिका"
      },
      "bn": {
        "question": "USA-এর পুরো নাম কী?",
        "answer": "সংযুক্ত রাষ্ট্র আমেরিকা"
      }
    },
    "_id": "679e711797cf361a40951063",
    "question": "what is the full form of USA ",
    "answer": "united states of America",
    "updatedAt": "2025-02-01T18:30:00.000Z",
    "createdAt": "2025-02-01T18:30:00.000Z",
    "__v": 0
  }
]
```

#### 2. Get FAQs in Hindi
```bash
curl http://localhost:8000/api/faqs/?lang=hi
```
Response:
```json
[
  {
    "question": "Node.js क्या है?",
    "answer": "Node.js is a runtime environment that allows JavaScript to run outside the browser."
  },
  {
    "question": "एक्सप्रेस.जेएस क्या है?",
    "answer": "Express.js is a web framework for Node.js."
  },
  {
    "question": "एक्सप्रेस.जेएस क्या है?",
    "answer": "Express.js is a web framework for Node.js."
  },
  {
    "question": "एक्सप्रेस.जेएस क्या है?",
    "answer": "Express.js is a web framework for Node.js."
  },
  {
    "question": "एक्सप्रेस.जेएस क्या है?",
    "answer": "Express.js is a web framework for Node.js."
  },
  {
    "question": "USA का पूरा नाम क्या है?",
    "answer": "संयुक्त राज्य अमेरिका"
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

