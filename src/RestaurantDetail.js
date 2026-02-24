import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordian from "./Accordian";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetail = () => {
    const params = useParams();
    const {menu, restInfo} = useRestaurantMenu(params?.id);
    const [isOpenIdx, setIsOpenIdx] = useState(0);
    // console.log(menu);
    return (
        <div>
            <div className="rest-info text-center">
                <h1>{restInfo?.name}</h1>
                <h2>{restInfo?.cuisines?.join(", ")}</h2>
                <p>{restInfo?.costForTwo}</p>
            </div>

            <div>
                {
                    menu?.length ?
                    menu?.map((_,i)=>{
                            {/* {i} */}
                        return (
                            <Accordian isOpen={isOpenIdx == i} handleClick={()=>{
                                if(i == isOpenIdx) {
                                    setIsOpenIdx(-1)
                                } else {
                                    setIsOpenIdx(i);
                                }
                            }} key={_?.title} title={_?.title} data={_?.itemCards}  />
                        )
                    })
                    : (
                        <div className="flex flex-col items-center m-2">
                            {
                                [1,2,3,4,5]?.map(_=> <div key={_} className="schimmer-lined mb-3 bg-[#ddd]  h-8 w-[80%]"></div>)
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default RestaurantDetail;