# Customer Profile UI (Assignment)

## 🚀 Overview

This project is a single-page Customer Profile UI developed with **React, TypeScript, and Vite**, utilizing **Tailwind CSS** for rapid styling and highly responsive design. The application adheres to a specified design and demonstrates advanced responsive techniques using CSS Grid.

### Key Technologies Used

* **Framework:** React v19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS

---

## ✨ Design & Implementation Highlights

This section focuses on meeting the design requirements and the specific technical challenges addressed in the code.

### 1. Design Source

The application is built based on the provided design specification.

* **Figma Design Link:** https://www.figma.com/design/NRBXhAFGFQa6YBN0EARfph/Customer-s-profile?t=jlxefvRPXP6qqnkd-1

### 2. Advanced Responsive Layout

The layout uses **Tailwind CSS Grid** to achieve two distinct display behaviors based on screen size, ensuring an optimal user experience across devices:

| Screen Size | Layout | Order of Elements | Technical Implementation |
| :--- | :--- | :--- | :--- |
| **Desktop / Tablet** (`md` breakpoint and up) | **2-Column Layout** | Retains the original visual structure (Profile/Metrics on Left, Contact/Activity on Right). | Achieved using `md:grid-cols-2` combined with **`md:col-start/end`** and **`md:row-start/end`** utilities to place components precisely. |
| **Mobile** (Small screens) | **1-Column Stack** | Custom, interleaved order: **1, 2, 3, 4, 5**. (Profile → Contact → Spend → Purchases → Activity). | Achieved using **`order-[n]`** utilities on individual components when the grid collapses to one column. |

> **Note on Vertical Balance:** The `Recent Activity` card is dynamically sized using **`md:row-end-4`** on desktop to span multiple rows, ensuring the vertical balance of the right column matches the stacked metrics cards on the left column.

---

## 🛠️ Setup and Running the Project

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm (or yarn/pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/RukSiNaDev/customer-profile.git
    cd customer-profile
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

Use the following command to start the development server. The application will be accessible at `http://localhost:5173/` (or similar port).

```bash
npm run dev
# or
yarn dev
```

### Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/       # Reusable UI components (Header, Cards, etc.)
│   ├── mock/
│   │   └── customer.json # <--- Mock Data File Location
│   ├── App.tsx           # Main application logic and layout structure
│   ├── index.css         # Tailwind directives and base styles
│   └── main.tsx          # Entry point and ReactDOM setup
│   
# ... (another files)
```