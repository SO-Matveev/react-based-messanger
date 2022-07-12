import { FormControl, Spinner } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import api from "../helpers/api";

function FileUpload({ onUpload, value }) {
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  useEffect(() => {
    if (!value) {
      fileRef.current.value = null;
    }
  }, [value]);

  const handleChange = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    const response = await api.post("/upload", formData);
    if (response.data.fileURL) {
      onUpload(response.data.fileURL);
    }
  };
  return (
    <div>
      {value && <span className="ms-2">Done</span>}
      {loading && (
        <Spinner
          className="ms-2"
          size="sm"
          animation="border"
          variant="primary"
        />
      )}
      <FormControl
        type="file"
        onChange={handleChange}
        disabled={loading}
        ref={fileRef}
      />
    </div>
  );
}
export default FileUpload;
