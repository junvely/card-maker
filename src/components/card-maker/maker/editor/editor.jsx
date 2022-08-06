import React from "react";
import styles from "./editor.module.css";

const Editor = ({ user }) => {
  const { name, company, job, email, message } = user;

  return (
    <li className={styles.editor}>
      <form className={styles.editorForm}>
        <input
          type="text"
          value={name}
          className={styles.name}
          placeholder="Name"
        />
        <input
          type="text"
          value={company}
          className={styles.company}
          placeholder="Company"
        />
        <input
          type="text"
          value={job}
          className={styles.job}
          placeholder="Job"
        />
        <input
          type="text"
          value={email}
          className={styles.email}
          placeholder="E-mail"
        />
        <input
          type="text"
          value={message}
          className={styles.message}
          placeholder="Memo"
        />
        <div className={styles.buttons}>
          <button type="submit" className={styles.submit}>
            {user.name ? user.name : "No file"}
          </button>
          <button className={styles.delete}>Delete</button>
        </div>
      </form>
    </li>
  );
};

export default Editor;
