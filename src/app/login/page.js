"use client";
import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
const login =()=>{
    console.log("hello world");
}
export default function Login() {
    const  [name, setName] = useState('');
  return (
    <main>
        <Image className={styles.cufinger} src='/CuntPrint.png' width={35} height={54} alt="Fingerprint"/>
        <div className={styles.bioVault}>
        B<span className={styles.iitalics}>i</span>oVa<span className={styles.letteru}>u</span>
        <span className={styles.litalics}>l</span>
        <span className={styles.blackText}>t</span>
        </div>
        <div className={styles.rect}>
            <div className={styles.line}></div>
        <span className={styles.login}>Login</span>
        <span className={styles.already}>Need to register?</span>
        <span className={styles.reg}>Register</span>

        <Image className={styles.upload}src="/upload.png"width={90} height={90} alt="Fingerprint" />
        <div className={styles.boxcontainer}>
            <div className={styles.box}>
                <input type="text" placeholder="name"></input>
                <p>{name}</p>
            </div>
            <div className={styles.box}></div>
        <div className={styles.enter}>
            <span className={styles.entering}>Name</span>
            <span className={styles.entering}>Email</span>
            <span className={styles.entering}>Upload your fingerprint</span>
        </div>
        <div className={styles.submit}>Submit
        <Image className={styles.plus}src="/submit.png"width={85} height={30} alt="Fingerprint" />
        </div>
        </div>

        </div>
        <div className={styles.outcircle1}></div>
        <div className={styles.outcircle2}></div>
        <div className={styles.outcircle3}></div>
        <Image className={styles.u2}src="/u2.png"width={195} height={300} alt="Fingerprint" />

    </main>
  );
}
