import React, { useRef } from "react";
import Button from "../button/button";
import styles from "../card-edit-form/card-edit-form.module.css";
import ImgFileInput from "../img_file_input/img_file_input";

const AddForm = ({ addOrUpdateCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themRef = useRef();
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value,
      company: companyRef.current.value,
      job: jobRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      theme: themRef.current.value,
      fileURL: null,
    };
    addOrUpdateCard(card);
    formRef.current.reset();
  };

  return (
    <li className={styles.editor}>
      <form
        className={styles.editorForm}
        ref={formRef}
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          ref={nameRef}
          className={`${styles.name} ${styles.input}`}
          type="text"
          placeholder="Name"
          required
        />
        <input
          ref={companyRef}
          className={`${styles.company} ${styles.input}`}
          type="text"
          placeholder="Company"
          required
        />
        <select
          className={`${styles.select} ${styles.input}`}
          ref={themRef}
          name="theme"
        >
          <option value={"purple"}>Purple</option>
          <option value={"pink"}>Pink</option>
          <option value={"blue"}>Blue</option>
          <option value={"dark"}>Dark</option>
        </select>
        <input
          ref={jobRef}
          className={`${styles.job} ${styles.input}`}
          type="text"
          placeholder="Job"
          required
        />
        <input
          ref={emailRef}
          className={`${styles.email} ${styles.input}`}
          type="text"
          placeholder="E-mail"
          required
        />
        <textarea
          ref={messageRef}
          className={`${styles.message} ${styles.input}`}
          name="message"
          placeholder="Message"
        />
        <div className={styles.buttons}>
          <ImgFileInput name={"No file"} onclick={onclick}></ImgFileInput>
          <Button name={"Add"}></Button>
        </div>
      </form>
    </li>
  );
};

export default AddForm;
