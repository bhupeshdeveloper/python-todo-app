
# 📝 Full-Stack ToDo App with FastAPI, React, TailwindCSS & Docker

This is a full-stack ToDo list CRUD application built with:

- ⚙️ **Backend**: FastAPI + Async SQLAlchemy + SQLite
- 🎨 **Frontend**: React + TailwindCSS + react-hot-toast
- 🐳 **Dockerized** for easy deployment

---

## 📁 Project Structure

```
.
├── backend
│   └── app
│       ├── main.py
│       ├── models.py
│       ├── schemas.py
│       ├── crud.py
│       └── database.py
├── frontend
│   ├── src
│   │   ├── App.js
│   │   └── index.css
│   └── tailwind.config.js
├── Dockerfile
├── frontend/Dockerfile
└── docker-compose.yml
```

---

## 🚀 Features

- ✅ Add, list, and delete ToDo items
- 🔄 Fully async FastAPI backend
- 🌈 TailwindCSS UI with toast notifications
- 🐳 Dockerized with `docker-compose`

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/todo-docker-app.git
cd todo-docker-app
```

### 2. Run with Docker

```bash
docker-compose up --build
```

- Backend: http://localhost:8000  
- Frontend: http://localhost:3000

---

## 📬 API Endpoints

- `GET /todos` — List all todos  
- `POST /todos` — Add a new todo  
- `DELETE /todos/{id}` — Delete a todo by ID

---

## 💅 UI Preview

Simple and responsive design with TailwindCSS.

```
[ Title ]  [ Description ]  [Add Task]
-------------------------------------
• Buy milk       🗑️
• Finish docs    🗑️
```

---

## 🧪 Tech Stack

| Layer     | Stack                          |
|-----------|--------------------------------|
| Frontend  | React, TailwindCSS, Axios      |
| Backend   | FastAPI, SQLAlchemy (Async)    |
| Database  | SQLite (via aiosqlite)         |
| DevOps    | Docker, docker-compose         |

---

## 🧼 Clean Up

To stop containers:

```bash
docker-compose down
```

To rebuild from scratch:

```bash
docker-compose down --volumes --remove-orphans
docker-compose up --build
```

---

## 📄 License

MIT License — Feel free to use and modify.

---

## 🙌 Contributions

Pull requests and suggestions welcome!
