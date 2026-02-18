import { useContext, useEffect, useState } from "react";
import RestaurantCard, { WithLabel } from "./RestaurantCard";
import Schimmer from "./Schimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
    console.log(<RestaurantCard/>)
    const [restaurants, setRestaurants] = useState([]);
    const userContext = useContext(UserContext);
    console.log(userContext);
    const [search, setSearch] = useState("");
    const [filteredR, setFilteredR] = useState([]);
    useEffect(()=>{
        console.log("body use effect", userContext);
        fetchRests();
    },[]);

    async function fetchRests() {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        setRestaurants(json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(r=>r.info));
        setFilteredR(json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(r=>r.info));
    }

    const filterRest = () => {
        const Rests = restaurants.slice()?.filter(_=>_.avgRating>4.4);
        // filteredRest = Rests;
        setFilteredR(Rests);

    }

    const handleSearch = () => {
        console.log(search);
        const Rests = restaurants.slice()?.filter(_=>_.name?.toLocaleLowerCase().includes(search?.toLocaleLowerCase()));
        console.log(Rests);
        setFilteredR(Rests);
    }

    const RestWithLabel = WithLabel(RestaurantCard);

    if(restaurants?.length == 0) {
        return <Schimmer length={10} />
    }
    return (
        <div className='mt-4 text-center'>
            <input className="flex-1 px-6 py-3  text-gray-700 border border-black-200 rounded-full m-2" type='text' placeholder='Search' value={search} onChange={(e)=>setSearch(e?.target?.value)} />
            <button className="btn bg-gray-300 border border-black-600 p-3 text-white rounded-full text-center" onClick={handleSearch}>Search</button>
            <button className="btn bg-gray-300 border border-black-600 p-3 text-white rounded-full text-center" onClick={filterRest}>Filter top Restaurants</button>
            <input className="flex-1 px-6 py-3  text-gray-700 border border-black-200 rounded-full m-2" type='text' placeholder='Search' value={userContext?.loggedInUser} onChange={(e)=>userContext?.setUser(e.target.value)} />
            <div className='flex flex-wrap grow justify-center items-center gap-[20px]'>
                {
                    filteredR?.map((_,i)=> {
                        if(i%2==0) {
                            return <RestWithLabel data={_} key={_.id} />
                        } else  return <RestaurantCard data={_} key={_?.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Body;