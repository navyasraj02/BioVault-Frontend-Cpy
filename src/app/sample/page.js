"use client";
import { useState } from "react";
import styles from "./sample.module.css";

export default function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name", name);
    console.log("Email", email);
    console.log("PhoneNumber", phoneNumber);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.enter}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className={styles.line}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.enter}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.line}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phoneNumber" className={styles.enter}>
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className={styles.line}
        />
      </div>
    </form>
  );
}
