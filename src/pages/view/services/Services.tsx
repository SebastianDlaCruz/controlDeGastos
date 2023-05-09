import NavBar from "@components/NavBar";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: '#000',
};
const Services = () => {
  return (
    <>
      <NavBar />

      <header>
        <h1>Servicios</h1>
      </header>

      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button component={Link} to={"/servicios/alimentos"}>
          <ListItemText primary="Alimentos" />
        </ListItem>
        <Divider />
        <ListItem button divider component={Link} to={"/servicios/facturas"}>
          <ListItemText primary="Facturas" />
        </ListItem>
        <ListItem button component={Link} to={"/servicios/educación"}>
          <ListItemText primary="Educación" />
        </ListItem>
        <Divider light />
        <ListItem button component={Link} to={"/servicios/ropa"}>
          <ListItemText primary="Ropa" />
        </ListItem>
        <Divider light />
        <ListItem button component={Link} to={"/servicios/tecnologia"}>
          <ListItemText primary="Tecnología" />
        </ListItem>
        <Divider light />
        <ListItem button component={Link} to={"/servicios/mascotas"}>
          <ListItemText primary="Mascotas" />
        </ListItem>
      </List>
    </>
  );
};

export default Services;
