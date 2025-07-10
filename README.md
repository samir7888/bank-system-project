# 💳 HamroBank – Online Banking System
![image](https://github.com/user-attachments/assets/5804bc41-f2da-4072-be9a-78d6b6de46b3)

🔗 **Live Website**: [https://hamrobank.vercel.app](https://hamrobank.vercel.app)  
📂 **Repository**: [github.com/samir7888/bank-system-project](https://github.com/samir7888/bank-system-project)

## 📝 Project Overview

**HamroBank** is a next-generation online banking system designed to modernize Nepal’s digital banking infrastructure. It addresses critical challenges like real-time fraud detection, offline emergency credit access, ATM note optimization, and admin alerts. Built with the **PERN** stack (PostgreSQL, Express.js, React.js, Node.js), it focuses on performance, security, and user experience.

This project was developed as a final-year B.Sc. CSIT capstone project under **Tribhuvan University**.

---

## 🚀 Key Features

### 🔐 Secure Online Banking
- Role-based access: Admin, Customer, ATM
- Encrypted communication using **JWT**, **SSL/TLS**
- Real-time fraud detection using graph traversal algorithms

### ⚠️ Real-time Fraud Detection
- Detects suspicious transaction chains using **DFS/BFS**
- Automatically freezes involved accounts
- Sends admin alerts via email (within 30 seconds)
- Admin can review and unfreeze accounts

### 🏧 ATM Simulator
- Withdraw money using a **Greedy Algorithm** to minimize notes
- Simulates real-time cash flow
- Checks ATM balance and withdrawal limits

### 🌐 Offline Emergency Credit System
- Allows small transactions even when servers are down
- Syncs data once online
- Adds resilience in poor connectivity areas

### 🧠 Admin Dashboard
- Visual fraud chains using **React Flow**
- System logs, flagged transactions, and account control
- Manual override for fraud actions
- Maintenance alert system for users

---

## 🧱 Tech Stack

| Layer         | Technology                           |
|--------------|----------------------------------------|
| Frontend     | React.js, Tailwind CSS                |
| Backend      | Node.js, Express.js                   |
| Database     | PostgreSQL                            |
| ORM          | Prisma                                |
| Auth & Email | JWT, Nodemailer                       |
| Deployment   | Vercel (Frontend, Backend) |

---

## 🧠 Algorithms Used

### 1. Fraud Detection (DFS Graph Algorithm)
Detects fraud chains through fast-moving funds across ≥3 accounts in ≤1 minutes.

**Pseudocode:**
```js
DFS(currentNode, path, startTime) {
  if (path.length >= 3 && timeDiff ≤ 5min) flagAsFraud(path)
  for each neighbor of currentNode:
    if neighbor not in path:
      DFS(neighbor, path + neighbor, startTime)
}
```

### 2. ATM Note Dispensing (Greedy Algorithm)
Dispense cash using the fewest number of notes.

Example: Rs.1860 → 3×500 + 1×200 + 1×100 + 1×50 + 1×10

***Pseudocode:**
```js
function dispenseCash(amount, denominations) {
  let notesUsed = [];
  for (let note of denominations) {
    let count = Math.floor(amount / note);
    if (count > 0) {
      notesUsed.push({ note, count });
      amount -= note * count;
    }
  }
  return amount > 0 ? "Cannot dispense exact amount" : notesUsed;
}

```
## 🔔 Real-Time Notifications
Notifications are triggered for:

Detected fraud chains

System maintenance

Emergency credit usage

📩 Emails are sent using Nodemailer
⏱️ Notifications delivered in < 30 seconds

## 🔍 HamroBank provides:
✅ Real-time fraud detection with BFS/DFS

✅ Greedy logic for ATM simulation

✅ Visual admin dashboard

✅ Offline credit functionality

## 🧾 Expected Output
👤 Role-based user login

🔍 Real-time fraud detection

📊 Fraud graph with traceability

🛑 Auto account freeze on fraud

📩 Admin email alerts

💳 ATM cash simulation (greedy)

🔒 Secure and encrypted transactions

🌐 Fully responsive UI (mobile + desktop)

## 👨‍💻 Team & Supervision

### 👥 Project Members

| Name             | TU Symbol No. |
|------------------|---------------|
| Bishal Adhikari  | 30165/60      |
| Sameer Basnet    | 30204/70      |
| Pradeep Bhusal   | 30189/44      |

### 👨‍🏫 Supervisor

- **Name**: Er. Yubaraj Khanal  
- **Institution**: Butwal Multiple Campus, Tribhuvan University


## 📜 References
Nabil Bank – Digital Banking

Nepal Investment Bank – Online Services

Akinyede, R. O. & Esese, O. D. – Automated Banking Fraud Detection (2022)

Murray & Taylor – Building Secure Online Banking Systems (2021)

Singh & Patel – Email Alert Systems for Financial Security (2023)

## 📄 License
This project is licensed under the MIT License.

## 🙌 Contributions
We welcome suggestions, issues, and pull requests.
⭐ Star the repo if you liked the project!




