## 💊📱 MediTrack 

MediTrack is an ongoing full-stack medical tracking application built to help users manage and monitor health-related data. The project follows a modern, cloud-ready architecture with separate concerns across four core modules.

## 🏗 Architecture 

**Frontend** — A JavaScript-based client interface where users interact with the application. Handles data input, visualization, and communication with the backend API.

**Backend** — A RESTful API server responsible for business logic, data persistence, and authentication. Acts as the central hub between the frontend and the scheduling system.

**Scheduler** — An automated service that handles time-based tasks — such as sending reminders, triggering check-ins, or processing recurring health events — independent of user interaction.

**k8s** — Kubernetes configuration files for containerized deployment. Enables the app to scale reliably in a cloud environment with orchestrated services.

## 🧰 Tech Stack

- **Language:** JavaScript (Node.js across all services)
- **Deployment:** Kubernetes (k8s)

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/AbayleE/MediTrack.git
cd MediTrack

# Install dependencies for each service
cd backend && npm install
cd ../frontend && npm install
cd ../scheduler && npm install
```

Configure your environment variables in each service directory, then deploy locally or via the provided Kubernetes manifests in `/k8s`.

## 📁 Project Structure

```
MediTrack/
├── backend/       # API server
├── frontend/      # Client UI
├── scheduler/     # Automated task runner
└── k8s/           # Kubernetes deployment configs
```

---

> Built with JavaScript. Designed to scale.
