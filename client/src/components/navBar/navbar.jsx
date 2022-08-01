


import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkMaterial from '@mui/material/Link';
import { Link } from "react-router-dom";


export default function NavBar() {
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <LinkMaterial underline="hover" color="inherit">
          <Link to="/landing">
          Home
          </Link>
        </LinkMaterial>
        <LinkMaterial
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </LinkMaterial>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}

