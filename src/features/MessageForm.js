import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

function MessageForm({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input type="text" placeholder="Наше имя" {...register("name")} />
      <textarea
        cols="30"
        rows="10"
        placeholder="Текст сообщения"
        {...register("text")}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
}
export default MessageForm;
