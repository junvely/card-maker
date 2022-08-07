import React, { useRef } from "react";
import Button from "../../../../button/button";
import styles from "../editor.module.css";
import ImgFileInput from "../img_file_input/img_file_input";

const AddForm = ({ onAddForm }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      id: Date.now(),
      name: nameRef.current.value,
      company: companyRef.current.value,
      job: jobRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      fileURL: null,
      theme: "blue",
    };
    onAddForm(info);
    resetForm();
  };

  const resetForm = () => {
    nameRef.current.value = "";
    companyRef.current.value = "";
    jobRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <li className={styles.editor}>
      <form className={styles.editorForm} onSubmit={(e) => onSubmit(e)}>
        <input
          ref={nameRef}
          type="text"
          className={`${styles.name} ${styles.input}`}
          placeholder="Name"
          required
        />
        <input
          ref={companyRef}
          type="text"
          className={`${styles.company} ${styles.input}`}
          placeholder="Company"
          required
        />
        <select className={`${styles.select} ${styles.input}`} name="theme">
          <option value={"purple"}>Purple</option>
          <option value={"pink"}>Pink</option>
          <option value={"blue"}>Blue</option>
          <option value={"dark"}>Dark</option>
        </select>
        <input
          ref={jobRef}
          type="text"
          className={`${styles.job} ${styles.input}`}
          placeholder="Job"
          required
        />
        <input
          ref={emailRef}
          type="text"
          className={`${styles.email} ${styles.input}`}
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
          <Button name={"Add"} onClick={(e) => onSubmit(e)}></Button>
        </div>
      </form>
    </li>
  );
};

export default AddForm;
