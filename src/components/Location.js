import { Button } from "react-bootstrap";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function Location({ onLocation }) {
  const onSucces = (pos) => {
    onLocation(pos.coords);
  };
  const onError = (err) => {};

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(onSucces, onError, options);
  };
  return (
    <Button type="button" variant="outline-info" onClick={handleClick}>
      Определить координаты
    </Button>
  );
}
export default Location;
