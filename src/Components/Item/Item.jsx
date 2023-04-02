import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"

export default function MediaCard({element}) {
    return (
      <Card sx={{
        width: 410,
        height: 570,
        backgroundColor: "cornflowerblue",
        color: "white",
        border: "1px solid black",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px black",
      }}>
        <CardMedia
          sx={{ height: 380, backgroundColor: "whitesmoke" }}
          image={element.img}
        />
        <CardContent sx={{height: 130}}>
          <Typography gutterBottom variant="h5" component="div" align="center" fontSize={22}>
            {element.title}
          </Typography>
          <Typography variant="body">${element.price} COP</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${element.id}`} style={{textDecoration: "none"}}>
            <Button size="small" variant="contained" color="success">Ver detalles</Button>
          </Link>
        </CardActions>
      </Card>
    );
  }