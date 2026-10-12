✈️ Employee Travel Expense Reimbursement System

<p align="center">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Runtime-Node.js-green?style=for-the-badge&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Project-Expense%20Management-blue?style=for-the-badge" alt="Expense Management"/>
</p>

📌 About the Project

The Employee Travel Expense Reimbursement System is a JavaScript-based application designed to automate the initial verification of employee travel reimbursement claims.

The system evaluates travel type, distance travelled, claimed amount, and supporting document submission to calculate the eligible reimbursement amount and determine whether a claim is Approved, Partially Approved, or Rejected.

✨ Key Features

* 👤 Employee ID identification
* 🚗 Support for Local and Outstation travel
* 📏 Automatic reimbursement calculation based on distance
* 💰 Local travel reimbursement at ₹8 per kilometre
* 🛣️ Outstation travel reimbursement at ₹12 per kilometre
* 🔒 Maximum reimbursement limit of ₹10,000 per claim
* 📄 Supporting document verification
* ✅ Automatic claim status determination
* 📋 Detailed expense report with remarks
* ⚠️ Basic validation for invalid claim details

🛠️ Technologies Used

* JavaScript
* Node.js
* Visual Studio Code

📏 Business Rules

Condition	Rule
Local travel	₹8 per kilometre
Outstation travel	₹12 per kilometre
Maximum eligible reimbursement	₹10,000 per claim
Supporting documents missing	Claim rejected
Eligible amount equals claimed amount	Approved
Eligible amount is less than claimed amount	Partially Approved

🧮 Calculation Formula

Eligible Reimbursement = Distance Travelled × Reimbursement Rate

The calculated reimbursement is capped at ₹10,000 and cannot exceed the employee’s claimed amount.

💻 Sample Input

const employeeId = 'EMP101';
const travelType = 'Local';
const distanceTravelled = 100;
const claimedAmount = 1200;
const supportingDocuments = true;

📊 Sample Output

------ Employee Travel Expense Report ------
Employee ID: EMP101
Travel Type: Local
Distance Travelled: 100 km
Claimed Amount: Rs. 1200
Eligible Amount: Rs. 800
Claim Status: Partially Approved
Remarks: Claim partially approved as per reimbursement policy

▶️ How to Run the Project

1. Install Node.js.
2. Open the project folder in Visual Studio Code.
3. Save the JavaScript code as Employee Travel Expense.js.
4. Open the terminal in VS Code.
5. Execute the following command:

node "Employee Travel Expense.js"

6. View the reimbursement report in the terminal.

🎯 Learning Outcomes

By developing this project, I practised:

* JavaScript variables and data types
* Conditional statements using if-else
* Arithmetic calculations and percentage-free rate calculations
* Business rule implementation
* Input validation and decision-making
* Generating structured reports using console.log()

🚀 Future Enhancements

* Add dynamic input for employee travel details.
* Create an interactive interface using HTML and CSS.
* Store reimbursement claims in a database.
* Generate downloadable expense reports.
* Add employee and manager authentication.
* Maintain a history of reimbursement claims.

👩‍💻 Author

Your Name

Aspiring Software Developer

Interested in JavaScript, problem-solving, and developing practical applications.

⸻

<p align="center">
  💙 Thanks for visiting my project!
  <br/>
  ⭐ Feel free to explore and share your feedback.
</p>
