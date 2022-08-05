import React from "react";
import styles from "./editor.module.css";

const Editor = ({ user }) => {
  return (
    <section className={styles.editor}>
      <form className={styles.editorForm}>
        <input
          type="text"
          value={user.name}
          className={styles.name}
          placeholder="Name"
        />
        <input
          type="text"
          value={user.company}
          className={styles.company}
          placeholder="Company"
        />
        <input
          type="text"
          value={user.job}
          className={styles.job}
          placeholder="Job"
        />
        <input
          type="text"
          value={user.email}
          className={styles.email}
          placeholder="E-mail"
        />
        <input
          type="text"
          value={user.memo}
          className={styles.memo}
          placeholder="Memo"
        />
        <div className={styles.buttons}>
          <button type="submit" className={styles.submit}>
            {user.name ? user.name : "No file"}
          </button>
          <button className={styles.delete}>Delete</button>
        </div>
      </form>
    </section>
  );
};

export default Editor;
