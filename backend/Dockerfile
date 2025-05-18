FROM python:3.11-slim

WORKDIR /app

COPY backend/ ./backend/
WORKDIR /app/backend

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir fastapi[all] sqlalchemy aiosqlite

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
