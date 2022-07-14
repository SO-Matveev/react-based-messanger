import { useForm } from "react-hook-form";
import { FormControl, Button } from "react-bootstrap";
import FileUpload from "../components/FileUpload";
import Location from "../components/Location";

function MessageForm({ onSubmit }) {
  const { register, handleSubmit, setValue, watch } = useForm();
  const location = watch("location");
  const imageURL = watch("imageURL");

  const onFormSubmit = (data) => {
    onSubmit(data);
    setValue("text", "");
    setValue("location", null);
    setValue("imageURL", null);
  };
  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSubmit(onFormSubmit)();
    }
  };
  const handleImageSubmit = (imageURL) => {
    setValue("imageURL", imageURL);
    console.log(imageURL);
  };
  const handleLocationChange = (location) => {
    setValue("location", location);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <FormControl
          as="textarea"
          placeholder="Текст сообщения"
          onKeyDown={handleKeyDown}
          {...register("text")}
        />
      </div>
      <div className="mb-2">
        <FileUpload
          onUpload={handleImageSubmit}
          {...register("imageURL")}
          value={imageURL}
        />
      </div>
      <div className="mb-2">
        <Location
          {...register("location")}
          onChange={handleLocationChange}
          value={location}
        />
      </div>
      <Button type="submit">Отправить</Button>
    </form>
  );
}
export default MessageForm;
