import React from "react";
import styles from "./editor.module.css";

const Editor = ({ user }) => {
  return (
    <section className={styles.editor}>
      <form className={styles.editorForm}>
        <input type="text" value={user.name} className={styles.name} />
        <input type="text" value={user.company} className={styles.company} />
        <input type="text" value={user.job} className={styles.job} />
        <input type="text" value={user.email} className={styles.email} />
        <input type="text" value={user.memo} className={styles.memo} />
        <div className={styles.buttons}>
          <button type="submit" className={styles.submit}>
            {user.name}
          </button>
          <button className={styles.delete}>Delete</button>
        </div>
      </form>
    </section>
  );
};

export default Editor;
