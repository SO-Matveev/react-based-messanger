import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function Location({ onChange, value }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onSucces = (pos) => {
    setLoading(false);
    onChange(pos.coords);
  };
  const onError = (err) => {
    setLoading(false);
    setError(true);
  };

  const handleClick = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(onSucces, onError, options);
  };
  return (
    <Button type="button" variant="outline-primary" onClick={handleClick}>
      Определить координаты
      {loading && (
        <Spinner
          className="ms-2"
          size="sm"
          animation="border"
          variant="primary"
        />
      )}
      {value && <span className="ms-2">Done</span>}
      {error && <span className="ms-2">Error</span>}
    </Button>
  );
}
export default Location;
