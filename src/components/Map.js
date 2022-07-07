import { useEffect, useRef } from "react";
import styled from "styled-components";

function Map({ center }) {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 14,
    });
    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, []);
  return <SMap ref={mapRef} />;
}
export default Map;
const SMap = styled.div`
  height: 300px;
  width: 300px;
`;
