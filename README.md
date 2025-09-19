# Charging Stations Management - Full-Stack Application

## Overview
This is a full-stack application built with Node.js, Express, and a database backend, along with a Vue.js frontend. It allows users to register, login, and manage electric vehicle charging stations with full CRUD operations. The frontend provides a list view and map visualization of charging stations.

---

## Features

### Backend
- REST API built with Node.js and Express
- User Authentication using JWT (Register/Login)
- Protected routes for managing charging stations
- CRUD operations for charging stations including:
  - Name
  - Location (Latitude & Longitude)
  - Status (Active/Inactive)
  - Power Output (kW)
  - Connector Type
- Database support (choose one: MongoDB / PostgreSQL / MySQL)

### Frontend
- Vue.js based user interface
- Login screen with JWT-based authentication
- Charger listing page with:
  - Display of all chargers
  - Filters by status, power output, and connector type
  - Add/Edit/Delete functionality
- Map view showing chargers on Google Maps or OpenStreetMap
- Clickable map markers show charger details

### Deployment
- Backend and frontend deployed on cloud platform
- Publicly accessible backend API endpoint

---

## Tech Stack

| Layer         | Technology             |
| ------------- | ---------------------- |
| Backend       | Node.js, Express       |
| Database      | MongoDB / PostgreSQL / MySQL (choose) |
| Authentication| JWT                    |
| Frontend      | Vue.js                 |
| Maps         | Google Maps / OpenStreetMap |
| Deployment    | AWS / Heroku / Vercel / Render / Firebase Hosting |

---

## Setup Instructions

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn
- Database installed & running (MongoDB / PostgreSQL / MySQL)
- Google Maps API key (if using Google Maps)

---
## Deployed Links
- frontend link-https://evoltsoft-project-1.onrender.com
- backend link-https://evoltsoft-project.onrender.com 
