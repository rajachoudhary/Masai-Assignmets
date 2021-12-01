import axios from "axios";
import {useState,useEffect} from "react"
import React from "react"

const getCars = () => {
    const config = {
      url: "http://localhost:3000/cars",
      method: "get"
    };
    return axios(config);
  };

const Cars = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [cars,setCars]=useState([])

    useEffect(() => {  
        return handleGetCars();
    }, [])

    const handleGetCars = () => {
        return getCars()
          .then((res) => {
            setCars(res.data);
            console.log(res.data)
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    };

    if (isLoading) {
        return <div>...loading</div>;
    }
    return (
        <div>
          <div>
           {cars.map((item)=>{
               return (
              <div key={item.id}>
                <div style={{fontsize:"35px"}}> Name :{item.name}</div>
                <div>Type: {item.type}</div>
                <div>Year: {item.year}</div>
                <div> Price: {item.price}</div>
                <div >
                    <img src={item.image} style={{height:"300px",width:"500px"}}/>
                </div>
                <button>Buy Now</button>
              </div>
               )
           })}
          </div>
          
        </div>
      );
}
export default Cars