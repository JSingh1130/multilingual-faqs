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
curl http://localhost:5000/api/faqs/
```
Response:
```json
[
  {
    "question": "what is the full form of USA ",
    "answer": "united states of America"
  },
  {
    "question": "what is this",
    "answer": "this is my project"
  },
  {
    "question": "What is Express.js?",
    "answer": "Express.js is a web framework for Node.js."
  }
]
```
![englishhhh](https://github.com/user-attachments/assets/6bdc5b9a-351a-45ea-a4af-26ea01469659)


#### 2. Get FAQs in Hindi
```bash
curl http://localhost:5000/api/faqs/?lang=hi
```
Response:
```json
[
  {
    "question": "USA का पूरा नाम क्या है?",
    "answer": "संयुक्त राज्य अमेरिका"
  },
  {
    "question": "यह क्या है",
    "answer": "यह मेरी परियोजना है"
  },
  {
    "question": "एक्सप्रेस.जेएस क्या है?",
    "answer": "Express.js Node.js. के लिए एक वेब फ्रेमवर्क है।"
  }
]
```

![hindi](https://github.com/user-attachments/assets/fb6b1368-d135-4d13-84c9-f2550c235a98)

#### 2. Get FAQs in Bengali
```bash
curl http://localhost:5000/api/faqs/?lang=bn
```
Response:
```json
[
  {
    "question": "USA-এর পুরো নাম কী?",
    "answer": "সংযুক্ত রাষ্ট্র আমেরিকা"
  },
  {
    "question": "এই কি",
    "answer": "এটি আমার প্রকল্প"
  },
  {
    "question": "এক্সপ্রেস.জেএস কী?",
    "answer": "এক্সপ্রেস.জেএস নোড.জেএস এর জন্য একটি ওয়েব ফ্রেমওয়ার্ক"
  }
]
```

![bengali](https://github.com/user-attachments/assets/2a58f104-3544-477a-b934-ffee7fab0590)



#### Admin panel
```bash
http://localhost:5000/admin
```
![WhatsApp Image 2025-02-02 at 04 30 29_b14cecaf](https://github.com/user-attachments/assets/0c2f90c7-e000-4ed6-9fca-83e2e05b0d23)

## Test Cases and Results

The following are the test cases implemented for this project and their outputs:

### Command to Run Tests
Run the following command to execute the test cases:
```bash
npm test
 ```
Output in Vs Code terminal:
```bash
PS C:\Users\HP\multilingual-faqs> npm test

> multilingual-faqs@1.0.0 test
> mocha ./faq.test.cjs

Server running on port 5000


  FAQ API
MongoDB Connected
Redis cache cleared
Checking Redis cache for key: faqs:en
Cache miss. Fetching from DB...
FAQs from DB: [
  {
    translations: { hi: [Object], bn: [Object] },
    _id: 679e711797cf361a40951063,
    question: 'what is the full form of USA ',
    answer: 'united states of America',
    updatedAt: 2025-02-01T18:30:00.000Z,
    createdAt: 2025-02-01T18:30:00.000Z,
    __v: 0
  },
  {
    translations: { hi: [Object], bn: [Object] },
    _id: 679ea05031bdd86bfc4c02a1,
    question: 'what is this',
    answer: 'this is my project',
    createdAt: 2025-02-01T22:29:36.867Z,
    updatedAt: 2025-02-01T22:29:36.867Z,
    __v: 0
  }
]
Setting cache for key: faqs:en
    ✔ should fetch FAQs in default (English) language (87ms)
Checking Redis cache for key: faqs:hi
Cache miss. Fetching from DB...
FAQs from DB: [
  {
    translations: { hi: [Object], bn: [Object] },
    _id: 679e711797cf361a40951063,
    question: 'what is the full form of USA ',
    answer: 'united states of America',
    updatedAt: 2025-02-01T18:30:00.000Z,
    createdAt: 2025-02-01T18:30:00.000Z,
    __v: 0
  },
  {
    translations: { hi: [Object], bn: [Object] },
    _id: 679ea05031bdd86bfc4c02a1,
    question: 'what is this',
    answer: 'this is my project',
    createdAt: 2025-02-01T22:29:36.867Z,
    updatedAt: 2025-02-01T22:29:36.867Z,
    __v: 0
  }
]
Setting cache for key: faqs:hi
    ✔ should fetch FAQs in Hindi
Cache invalidated for key: faqs:en
Cache invalidated for key: faqs:hi
Cache invalidated for key: faqs:bn
    ✔ should create a new FAQ (2152ms)
MongoDB connection closed


  3 passing (3s)
 ```

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



## Contact
For any queries or feedback, feel free to contact:
- **Email**: jatinjot28@gmail.com


