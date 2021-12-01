import axios from "axios";
import {useState,useEffect} from "react"
// import React from "react"

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
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    };

    return (
        <div>
          <div>
            {cars.map((item) => (
              <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.type}</div>
              </div>
            ))}
          </div>
          
        </div>
      );
}
export default Cars