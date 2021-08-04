import React, { useState } from "react";
import "./editProFile.css";

const EditProfile = () => {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
  return (
    <div className="App">
      <div className="container">
        {error && <p className="errorMsg">File not supported</p>}
        <div
          className="imgPreview"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#131313",
          }}
        >
          {!imgPreview && (
            <>
              <p>Add an image</p>
              <label htmlFor="fileUpload" className="customFileUpload">
                Choos file
              </label>
              <input type="file" id="fileUpload" onChange={handleImageChange} />
              <span>(jpg, jpeg or png)</span>
            </>
          )}
        </div>
        {imgPreview && (
          <button onClick={() => setImgPreview(null)}>Remove image</button>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
