import { Container, Grid } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Map = () => {
  // latitude y longitede de lima
  const position = [-12.04318, -77.02824];

  const markerIcon = new L.icon({
    iconUrl: require("../../assets/marker.png"),
    iconSize: [30, 30],
  });
  const lugares = [
      {
          nombre: "parque de las aguas",
          coordenadas: [-12.0599468,-77.0368597],
      },
      {
        nombre: "parque de la amistad",
        coordenadas: [-12.131846296219146, -76.98250034501207],
    },
    {
        nombre: "Museo de Arte Contemporáneo - Lima",
        coordenadas: [12.1370749,-77.0238592],
    },

  ]

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={12}>
          <h1>Mapas</h1>
        </Grid>
        <Grid item md={12}>
          <MapContainer center={position} zoom={13} style={{ height: 500 }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-12.045312465453938, -76.95167653769764]}
              icon={markerIcon}
            >
              <Popup>Tecsup Centro Educativo</Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Map;