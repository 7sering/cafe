import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Location() {
  const defaultProps = {
    center: {
      lat: 27.721127,
      lng: 85.362013,
    },
    zoom: 15,
  };

  return (
    <div className=" bg-green-700">
      <div>
        <div className="w-full">
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={27.721127}
                lng={85.362013}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
}
