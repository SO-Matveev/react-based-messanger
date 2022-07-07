import { FormControl } from "react-bootstrap";
import api from "../helpers/api";

function FileUpload({ onUpload }) {
  const handleChange = async (event) => {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    const response = await api.post("/upload");
    if (response.fileURL) {
      onUpload(response.data.fileURL);
    }
  };
  return <FormControl type="file" onChange={handleChange} />;
}
export default FileUpload;
