import ItemCard from './ItemCard';
import {data} from '../assets/data.js'
import {  Button } from '@mui/material';
import { useState } from 'react';


const Main = () => {
  
  let [allData, setData] = useState(data);
  const [location,setLocation] = useState('');
  const [price,setPrice] = useState(0);
  const [property,setProperty] = useState('');
  const [date,setDate] = useState('');

  const handleFilterPrice =  (price) => {
    if(price===0)return;
    const filteredData = allData.filter((item) => {
      if (item.cost <= price) {
        return item;
      }
    });
    setData(filteredData);
    setPrice(0);
    console.log(allData)
  };

  const handleFilterProperty = (property) => {
    if(property==='')return;

    const filteredData = allData.filter((item) => {
      const exitingProperty = `${item.PropertyType}`;
      if (exitingProperty.toLowerCase().includes(property.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
    setProperty('');
    console.log(allData)
  };
  const handleFilterLocation = (location) => {
    if(location==='')return;
    const filteredData = allData.filter((item) => {
      const existingLocation = item.location;
      if (existingLocation.toLowerCase()===location.toLowerCase()) {
        return item;
      }
    });
    console.log('location lefore',allData)
    console.log('location filtered',filteredData)
    setData(filteredData);
    console.log('location after',allData)
    setLocation('')
  };

 

 

  const filterHandler =  (e) =>{
    e.preventDefault();
    // console.log(price)
    // console.log(location)
    // console.log(property)
    setData(data);
    // console.log(allData)
     handleFilterLocation(location);
     handleFilterPrice(price);
     handleFilterProperty(property);
     console.log("react w",allData);
}


  return (
    <>

    <div>
      <form style={{display:'flex',justifyContent:'space-around',margin:23}} className='filterForm' onSubmit={filterHandler}>

        <input type="text" placeholder='Location'  value={location} onChange={(e)=>setLocation(e.target.value)} />
        <input type="text" placeholder='Price'  value={price>0?price:''} onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" placeholder='Proptery'  value={property} onChange={(e)=>setProperty(e.target.value)} />
        <input type="text" placeholder='move in date'  value={date} onChange={(e)=>setDate(e.target.value)}/>

        <Button variant="contained" type='submit'>Filter</Button>
      </form>

      </div>

      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      {
       
        allData.map((item,index)=>{
          return(
            <ItemCard item={item} key={index} />
          )
        })
      }
      </div>



    </>
  ) 
}

export default Main