# SunLink — Smart & Simple URL Shortener
**SunLink** is a fast, lightweight, and minimal URL shortener built with **MERN Stack**  
to simplify long URLs into short customizedd URLs, shareable links.  
It combines simplicity with clean UI design.

## Live Demo
[![🌐 Live Site](https://img.shields.io/badge/SunLink%20Live%20Site-FFD700?style=for-the-badge&logo=netlify&logoColor=black)](https://sun-link.netlify.app/)





## ✨ Features

✅ Shorten long URLs instantly  
✅ Create custom short codes  
✅ Copy shortened links with one click  
✅ Mobile-friendly responsive design  
✅ Fully deployed with backend (Render) + frontend (Netlify)  
✅ Environment-based configuration via `.env`  


## Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React.js, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Hosting** | Netlify (Frontend), Render (Backend) |

---

## Installation & Setup (Local)

### 1️. Clone the repository  
```bash
git clone https://github.com/yourusername/sunlink.git
cd sunlink
```


### 2. Install dependencies

```bash
cd frontend
npm install
cd ../backend
npm install
```

### 3. Create .env files

#### In your backend folder:
```bash
MONGO_URI=your_mongodb_atlas_uri
PORT=5000
```


### 3. Create .env files

#### In your frontend folder:
```bash
VITE_API_BASE_URL=https://url-shortener-dcg9.onrender.com
```


###  4. Run the project
```bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev
```

## 🌐 Deployment

#### Frontend → Netlify

#### Backend → Render

Once deployed, update the API base URL in your frontend .env file
to point to your Render backend endpoint.

## Example

#### Long URL:
```bash
https://www.wikipedia.org/wiki/Help:Pronunciation_respelling_key
```

#### Shortened to:
```bash
https://url-shortener-dcg9.onrender.com/abc123
```

## Contributor
### Nagaraj Golai
[![💼 GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NagarajGolai)
[![🔗 LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nagarajgolai)
[![🐦 Portfolio](https://img.shields.io/badge/Portfolio-FFFFFF?style=for-the-badge&logo=twitter&logoColor=000000)](https://nagarajgolai.netlify.app/)
