"use client";
import Image from "next/image";
import styles from "./regnext.module.css";
import { useState } from "react";
import Link from "next/link";

export default function RegNext() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit= async(values)=>{
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a fingerprint image.");
      return; // Prevent submission if no file selected
    }

    console.log("Name", name);
    console.log("Email", email);
    console.log("Phone no", phoneNumber);
    const formData = new FormData(); // Use FormData for multipart data
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneno", phoneNumber);
    formData.append("fingerprint", selectedFile); // Append file with key "fingerprint"
    
    try {
      const response = await api.post("/api/register", formData);

      console.log(response.data);
      if (!response.data.success) {
        throw new Error(`API error: ${response.statusText}`);
      }
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed. Please try again."); // Handle errors appropriately
    }
    // console.log(values)
    // try {
    //   const response = await api.post("/api/register",{ values})
    //   console.log(response)
    //   if(!response.data.success){
    //     console.log("succesfully registered")
    //     alert("registration successful")
    //   }
    // } catch (error) {
    //   console.log("error :"+error)
    // }
  };
  
  return (
    <main>
      <div className={styles.rect}>
        <Image
          src="/rectnoise.png"
          width={640}
          height={836}
          alt="Fingerprint"
        />

        <div className={styles.bioVault}>
          B<span className={styles.iitalics}>i</span>oVa
          <span className={styles.letteru}>u</span>
          <span className={styles.litalics}>l</span>
          <span className={styles.blackText}>t</span>
        </div>
      </div>
      <div className={styles.circle}>
        <Image
          src="/Ellipse 10.png"
          width={350}
          height={350}
          alt="Fingerprint"
        />
      </div>
      <Image
        className={styles.u5finger}
        src="/u5.png"
        width={348}
        height={360}
        alt="Fingerprint"
      />
      <Image
        className={styles.cufinger}
        src="/CuntPrint.png"
        width={40}
        height={62}
        alt="Fingerprint"
      />
      <span className={styles.register}>Register</span>
      <div className={styles.linesContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className={styles}
            />
            <i></i>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className={styles}
            />
            <i></i>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone no.
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className={styles}
            />
            <i></i>
            <button type="submit" className={styles.submit}>
        Submit
        <div>
          <Image
            className={styles.plus}
            src="/submit.png"
            width={92}
            height={34}
            alt="Fingerprint"
          />
        </div>
      </button>
          </div>
          
        </form>

        {/* <div className={styles.line}></div>
        <div className={styles.line}> </div>
        <div className={styles.line}></div> */}

        {/* <span className={styles.entering}>Name</span>
          <span className={styles.entering}>Email</span>
          <span className={styles.entering}>Phone no.</span> */}
      </div>
      <div className={styles.outcircle1}></div>
      <div className={styles.outcircle2}></div>
      <div className={styles.outcircle3}></div>

      <div className={styles.boxcontainer}>
        <button className={styles.box}></button>
        {/* <button className={styles.box}></button>
        <button className={styles.box}></button> */}
      </div>
      <span className={styles.entering}>Add your fingerprints</span>

      <div className={styles.pluscontainer}>
        <div>
          {}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.plus}
              src="/plus.png"
              width={24}
              height={24}
              alt="Fingerprint"
            />
          </label>
          {/* <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.plus}
              src="/plus.png"
              width={24}
              height={24}
              alt="Fingerprint"
            />
          </label>
          <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
            <Image
              className={styles.plus}
              src="/plus.png"
              width={24}
              height={24}
              alt="Fingerprint"
            />
          </label> */}

          {/* {selectedFile && <p>Selected File: {selectedFile.name}</p>} */}
        </div>
      </div>

      
    </main>
  );
}
