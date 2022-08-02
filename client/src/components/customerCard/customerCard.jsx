import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from "../../assets/cat.jpg"
import { Link } from "react-router-dom"
import style from "./customer.module.css"


export default function CustomerCard(props){
  return (
    <Link className={style.link} to={`home/${props.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {props.image?props.image: img}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Email: ${props.email}` }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Adress: ${props.adress}` }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
          </Link>
  );
}