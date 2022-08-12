import React, { Component } from "react";

const url = "https://api.cloudinary.com/v1_1/diucr969q/image/upload";

class ImageUploader extends Component {
  async upload(file) {
    // file을 받아 file을 업로드, 업로드 성공 시 서버에게 url 전달
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "evdlglut"); // post에 필요한 데이터
    // 완료되면 result를 받아서
    const result = await fetch(
      url, // cloudinary 이미지 url 주소 전송
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json(); // result를 json으로 변환하여 리턴
  }

  render() {
    return <div></div>;
  }
}

export default ImageUploader;
