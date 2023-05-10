import React, { useState, useEffect } from "react";
import { storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Button } from "../button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [open, setOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (!open) {
      setUploaded(false);
    }
  }, [open]);

  const handleChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleUpload = () => {
    if (!files.length) {
      alert("Files not found.");
      return;
    }

    const promises = files.map((file) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            toast.error(error, { position: "bottom-right", autoClose: 5000 });
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              const imageStoreRef = doc(db, selectedOption, file.name);
              setDoc(imageStoreRef, {
                imageUrl: downloadUrl,
              }).then(() => {
                resolve();
              });
            });
          }
        );
      });
    });

    Promise.all(promises)
      .then(() => {
        setUploaded(true);
        setFiles([]);
        setSelectedOption("");
        document.getElementById("file-input").value = null;
        toast.success("Images uploaded!", {
          position: "bottom-right",
          autoClose: 5000,
        });
      })
      .catch((error) => {
        toast.error(error, { position: "bottom-right", autoClose: 5000 });
      });
  };

  return (
    <>
      <div className="upload">
        <select onChange={handleSelect} value={selectedOption}>
          <option value="">Section</option>
          <option value="kitchens">Kitchens</option>
          <option value="bathrooms">Bathrooms</option>
          <option value="exterior">Exterior</option>
        </select>
        <input
          type="file"
          accept="image/*,video/*,.heic,.heif,.hevc,.mov"
          multiple
          onChange={handleChange}
          id="file-input"
        ></input>
        <Button onClick={handleUpload}>Upload Images</Button>
      </div>
    </>
  );
};

export default ImageUpload;
