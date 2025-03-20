# Overview

This project is a student startup called SpiritPleasure – a unique place finder for your trips.  
We used technologies like React, Django, and MySQL to build a fully functional infrastructure and working version.

---

# Installation and Startup

1. **Clone the repository:**
    
    ```bash
    git clone https://github.com/RomanRavlyk/HotelComplex.git
    cd HotelComplex
    ```   

2. **Install Docker:**
    
    Download Docker Desktop from the official website:  
    [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

3. **Configure your secrets:**

    Create secret files for database credentials (for Docker Secrets support):

    ```bash
    mkdir secrets
    echo "your_user" > secrets/db_user.txt
    echo "your_password" > secrets/db_password.txt
    ```

4. **Run the project with Docker Compose**  

    Make sure you are in the root directory of the project, then run:  

    ```bash
    docker-compose up --build
    ```

    This command will:  
    - Start a MySQL database container  
    - Start the Django backend  
    - Start the React frontend  

5. **Access the application**  

    - **Backend API (Django):** [http://localhost:8000](http://localhost:8000)  
    - **Swagger API Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)  
    - **Frontend (React):** [http://localhost:3000](http://localhost:3000)  

---

## Docker Compose Services
  
### **Database (MySQL)**
  - Runs MySQL 8.0
  - Stores data in a volume
  - Uses Docker Secrets for credentials

### **Backend (Django)**
  - Runs Django with Gunicorn
  - Uses MySQL as the database
  - Connects to the database via environment variables

### **Frontend (React)**
  - Runs React in development mode
  - Serves the application on port 3000

---

## Stopping and Cleaning Up

To stop the running containers:
  ```bash
     docker-compose down
  ```
To remove all containers, networks, and volumes:
```bash
   docker-compose down -v
```

# Troubleshooting
 - If ports are already in use, try stopping other services running on ports 8000 or 3306.
 - Ensure Docker and Docker Compose are installed and running.
 - Verify that the secret files are correctly set up.
