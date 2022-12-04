import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';



const Header = () => {
  return (
    <div style={{height:50, display:"flex",justifyContent:'space-between',alignItems:'center',backgroundColor:'#d3e3d7',}} >
        <Typography style={{marginLeft:10,fontFamily:'Roboto Condensed',fontWeight:'bold'}}>HouseRentApp</Typography>
        <div>
            <Button variant="contained" style={{marginRight:10}}>Login</Button>
            <Button variant="outlined" style={{marginRight:10}}>Sign up</Button>
        </div>
    </div>
  )
}

export default Header