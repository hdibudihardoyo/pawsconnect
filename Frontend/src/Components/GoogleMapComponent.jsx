import {
  APIProvider,
  Map,
  Marker,
  ControlPosition,
  MapControl,
  Pin,
} from "@vis.gl/react-google-maps";

const containerStyle = {
  width: "300px",
  height: "200px",
};

const center = {
  lat: -6.918168067932129,
  lng: 107.60761260986328,
};

const GoogleMapComponent = () => {
  return (
    <>
      <APIProvider apiKey={"AIzaSyBVNGJeW_PlLA8Zm4u0GgcjbSeDEokOhVY"}>
        <Map
          style={containerStyle}
          center={center}
          defaultZoom={14}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <MapControl position={ControlPosition.TOP_RIGHT}>
            <Marker position={{ center }}>
              <Pin
                background={"#FBBC04"}
                glyphColor={"#000"}
                borderColor={"#000"}
              />
            </Marker>
          </MapControl>
        </Map>
      </APIProvider>
    </>
  );
};

export default GoogleMapComponent;
