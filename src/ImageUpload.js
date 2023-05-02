import React, { useState, useEffect } from "react";
import { storage, db } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [open, setOpen] = useState(false);

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
            console.log(error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
              console.log("download url: ", downloadUrl);
              const imageStoreRef = doc(db, "kitchens", file.name);
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="file"
        accept="/image/*"
        multiple
        onChange={handleChange}
      ></input>
      <button onClick={handleUpload}>Upload images to firebase</button>
    </div>
  );
};

export default ImageUpload;
