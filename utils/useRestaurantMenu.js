import { useEffect, useState } from "react"

const useRestaurantMenu = (id) => {
    const [restInfo, setRestInfo] = useState(null);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetchDetail();
    }, []);

    const fetchDetail = async () => {
        const data = await fetch(" https://namastedev.com/api/v1/listRestaurantMenu/" + id);
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(_=>Object.keys(_)?.length>0)?.map(_=>_.card?.card));
        setMenu(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(_=>Object.keys(_)?.length>0)?.map(_=>_.card?.card));
        setRestInfo(json?.data?.cards?.[2]?.card?.card?.info);
    };

    return {
        menu,
        restInfo
    }
}

export default useRestaurantMenu;