import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ItemCard = (item) => {
    const {image_url,cost,location,PropertyType,desc,area} = item.item;
  return (
    <Card sx={{ width: 300 }} style={{margin:35}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image_url}
        alt="house image"
      />
      <CardContent>
        <Typography  variant="h7">
           <span style={{fontWeight:'bold',fontSize:20}}>${cost}</span>/month
        </Typography>
        <Typography gutterBottom variant="h4">
           {PropertyType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <hr></hr>
        <Typography style={{display:'flex',justifyContent:'space-around'}}>
            <h5> <span >{desc}</span> </h5>
            <h5><span>{area} sq.ft</span></h5>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ItemCard