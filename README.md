# Bonafide Requisition System
A web application that enables students to send requisition mails to faculty members who can then verify and approve a letter of recommendation
## Tech Stack
* **Frontend:**
  * ReactJS
* **Backend:**
  * NodeJS
  * Express JS
* **Database:**
  * MongoDB
## Installation
Make sure that you have npm installed locally.<br/><br/>
Clone the repository using the following command:<br/>
```PowerShell
git clone https://github.com/VishwanathBabu/brs_team.git
```
Once installed move into the backend folder and install the necessary dependencies<br />
```PowerShell
npm install
```
Then move into the frontend folder and again install necessary dependencies<br />

For the backend there are certain environment variables that have to be set like the MongoDB URI and User's email and Password for sending mails.
Create a .env file in the backend folder and then add these details:
* MONGODB_URL=\<Enter MONGODB URL here\>
* PORT=\<Enter optional port number here\>
* EMAIL_USER=nodemailermail2@gmail.com
* EMAIL_PASS=imsi dmjc oyzr lscm
