"use client";
import Image from "next/image";
import styles from "./logincopy.module.css";
import { useState } from "react";
import api from "../../../api";
import Link from "next/link";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  //const handleSubmit = async (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a fingerprint image.");
      return; // Prevent submission if no file selected
    }

    console.log("Name", name);
    console.log("Email", email);

    const formData = new FormData(); // Use FormData for multipart data
    formData.append("name", name);
    formData.append("email", email);
    formData.append("fingerprint", selectedFile); // Append file with key "fingerprint"
    
    try {
      const response = await api.post("/api/login", formData);

      console.log(response.data);
      if (!response.data.success) {
        throw new Error(`API error: ${response.statusText}`);
      }

      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error login:", error);
      alert("Login failed. Please try again."); // Handle errors appropriately
    }
    // try {
    //   const response = await api.post("/api/register", {
    //     name,
    //     email,
    //   });
    //   console.log(response.data);
    //   if (!response.data.success) {
    //     throw new Error(`API error: ${response.statusText}`);
    //   }
    //   // const data = await response.json();
    //   console.log("Registration successful:", response.data);
    // } catch (error) {
    //   console.error("Error registering:", error);
    //   // Handle registration errors (e.g., display error message)
    //   // Replace with your desired error handling logic
    //   alert("Registration failed. Please try again.");
    // }
  };
  return (
    <main>
      <Image
        className={styles.cufinger}
        src="/CuntPrint.png"
        width={35}
        height={54}
        alt="Fingerprint"
      />
      <div className={styles.bioVault}>
        B<span className={styles.iitalics}>i</span>oVa
        <span className={styles.letteru}>u</span>
        <span className={styles.litalics}>l</span>
        <span className={styles.blackText}>t</span>
      </div>
      <div className={styles.rect}>
        <div className={styles.line}></div>
        <span className={styles.login}>Login</span>
        <span className={styles.already}>Need to register?</span>
        <Link className={styles.reg} href="/register">
          Register
        </Link>
        <div>
          
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.upload}
              src="/upload.png"
              width={90}
              height={90}
              alt="Fingerprint"
            />
          </label>

          {/* {selectedFile && <p>Selected File: {selectedFile.name}</p>} */}
        </div>

        <div className={styles.boxcontainer}>
          <div className={styles.enter}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.enter}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  className={styles.box}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={styles.box}
                />
              </div>

              <div className={styles.choosefile}>Upload your fingerprint</div>

              <button type="submit" className={styles.submit}>
                Submit
                <div>
                  <Image
                    className={styles.plus}
                    src="/submit.png"
                    width={85}
                    height={30}
                    alt="Fingerprint"
                  />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.outcircle1}></div>
      <div className={styles.outcircle2}></div>
      <div className={styles.outcircle3}></div>
      <Image
        className={styles.u2}
        src="/u2.png"
        width={195}
        height={300}
        alt="Fingerprint"
      />
    </main>
  );
}

