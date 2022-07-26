import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";
import { useState } from "react";

function App() {
  // Use initialEmails for state
  console.log(initialEmails);
  const [emails, setEmmails] = useState(initialEmails);

  const emailsCopy = JSON.parse(JSON.stringify(emails));

  function toggleRead(emailRead: any) {
    const updatedEmail = emailsCopy.find(
      (email: any) => email.id === emailRead.id
    );
    updatedEmail.read = !updatedEmail.read;
    setEmmails(emailsCopy);
  }

  function toggleStar(emailStar: any) {
    const updatedEmail = emailsCopy.find(
      (email: any) => email.id === emailStar.id
    );
    updatedEmail.starred = !updatedEmail.starred;
    setEmmails(emailsCopy);
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map((email) => (
            <li className={email.read ? "email read" : "email unread"}>
              <input
                id="hide-read"
                type="checkbox"
                onChange={() => {
                  toggleRead(email);
                }}
                checked={email.read}
              />
              <input
                type="checkbox"
                checked={email.starred}
                className="star-checkbox"
                onChange={() => {
                  toggleStar(email);
                }}
              />
              <div className="title">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;