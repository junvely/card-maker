import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card-edit-form.module.css";
import ImgFileInput from "../img_file_input/img_file_input";

const EditForm = ({ card, onDelete, onChange }) => {
  const { id, name, company, job, email, message, theme } = card;
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themRef = useRef();

  const onChangeInput = () => {
    const changedCard = {
      id: id,
      name: nameRef.current.value,
      company: companyRef.current.value,
      job: jobRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      theme: themRef.current.value,
    };
    onChange(changedCard);
  };

  return (
    <li className={styles.editor}>
      <form className={styles.editorForm}>
        <input
          className={`${styles.name} ${styles.input}`}
          ref={nameRef}
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={onChangeInput}
        />
        <input
          className={`${styles.company} ${styles.input}`}
          ref={companyRef}
          type="text"
          defaultValue={company}
          placeholder="Company"
          onChange={onChangeInput}
        />
        <select
          className={`${styles.select} ${styles.input}`}
          ref={themRef}
          name="theme"
          defaultValue={theme}
          onChange={onChangeInput}
        >
          <option value={"purple"}>Purple</option>
          <option value={"pink"}>Pink</option>
          <option value={"blue"}>Blue</option>
          <option value={"dark"}>Dark</option>
        </select>
        <input
          className={`${styles.job} ${styles.input}`}
          ref={jobRef}
          type="text"
          defaultValue={job}
          placeholder="Job"
          onChange={onChangeInput}
        />
        <input
          className={`${styles.email} ${styles.input}`}
          ref={emailRef}
          type="text"
          defaultValue={email}
          placeholder="E-mail"
          onChange={onChangeInput}
        />
        <textarea
          className={`${styles.message} ${styles.input}`}
          ref={messageRef}
          name="message"
          defaultValue={message}
          placeholder="Memo"
          onChange={onChangeInput}
        />
        <div className={styles.buttons}>
          <ImgFileInput
            name={name ? name : "No file"}
            onclick={onclick}
          ></ImgFileInput>
          <Button name={"Delete"} onClick={() => onDelete(id)}></Button>
        </div>
      </form>
    </li>
  );
};

export default EditForm;
