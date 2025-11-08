# EZ Contact Form

This project is a simple, responsive React.js web application built as part of the assessment.  
It recreates the provided contact form design and integrates with the given backend API to submit user details.

---

## Project Overview

- Fully responsive layout (desktop, tablet, mobile)
- Frontend validation for empty fields and email format
- Form submission through API (POST method)
- Includes Postman collection for testing the API endpoint

---

## Tech Stack

- **React.js**
- **CSS3**
- **Postman (for API testing)**

---

## API Details

**Endpoint:**  
POST https://vernanbackend.ezlab.in/api/contact-us/


**Request Body (JSON):**
```json
{
  "name": "Rakhi Sharma",
  "email": "rakhi@example.com",
  "phone": "9876543210",
  "message": "Testing API via frontend"
}
```

**Response:**  
- On **success**, the API returns a `200 OK` status with a success message.  
- On **invalid** or **empty input**, it returns an error message as expected.

---

## 🌍 Live Demo

You can view the deployed project here:  
👉 [**EZ Contact Form Live on Vercel**](https://vercel.com/rakhi-sharmas-projects/ez-contact/5LHVo1mQLM42nKhC3hZj8A15hga1)


