import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { Link } from "react-router-dom";
const ContainerServices = () => {

  const [value, setValue] = useState(0);


  return (

    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Añadir" component={Link} to="/añadir" icon={<AddCircleOutlineSharpIcon />} />
      <BottomNavigationAction label="Calendario" component={Link} to="/calendario" icon={<CalendarMonthSharpIcon />} />
      <BottomNavigationAction label="Nearby" component={Link} to="/servicios" icon={<DesignServicesSharpIcon />} />
      <BottomNavigationAction label="Educacion" component={Link} to="/educacion" icon={<SchoolSharpIcon />} />
    </BottomNavigation>


  );
};

export default ContainerServices;
