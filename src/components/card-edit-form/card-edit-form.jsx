import Button from "../button/button";
import styles from "./card-edit-form.module.css";

const EditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, job, email, message, theme, fileName } = card;

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card);
  };

  return (
    <li className={styles.editor}>
      <form className={styles.editorForm} onSubmit={onSubmit}>
        <input
          className={`${styles.name} ${styles.input}`}
          name="name"
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={onChange}
        />
        <input
          className={`${styles.company} ${styles.input}`}
          name="company"
          type="text"
          defaultValue={company}
          placeholder="Company"
          onChange={onChange}
        />
        <select
          className={`${styles.select} ${styles.input}`}
          name="theme"
          defaultValue={theme}
          onChange={onChange}
        >
          <option value={"purple"}>Purple</option>
          <option value={"pink"}>Pink</option>
          <option value={"blue"}>Blue</option>
          <option value={"dark"}>Dark</option>
        </select>
        <input
          className={`${styles.job} ${styles.input}`}
          name="job"
          type="text"
          defaultValue={job}
          placeholder="Job"
          onChange={onChange}
        />
        <input
          className={`${styles.email} ${styles.input}`}
          name="email"
          type="text"
          defaultValue={email}
          placeholder="E-mail"
          onChange={onChange}
        />
        <textarea
          className={`${styles.message} ${styles.input}`}
          name="message"
          defaultValue={message}
          placeholder="Memo"
          onChange={onChange}
        />
        <div className={styles.buttons}>
          <FileInput
            name={fileName || "No file"}
            onFileChange={onFileChange}
          ></FileInput>
          <Button name={"Delete"}></Button>
        </div>
      </form>
    </li>
  );
};

export default EditForm;
