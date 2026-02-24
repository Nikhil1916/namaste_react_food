import { Link } from "react-router-dom";
import { FOOD_IMG } from "../utils/constants";
import { useEffect } from "react";


export const WithLabel = (WrappedComponent) => {
  const ComponentWithLabel = (props) => {
    return (
      <div className="relative m-2">
        <h1 className="absolute -top-3 -left-3.25 bg-[black] rounded p-2 text-white">Promoted</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };

  ComponentWithLabel.displayName = 
    `WithLabel(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return ComponentWithLabel;
};

const RestaurantCard = ({data}) => {
    const {name, costForTwo,totalRatingsString} = data;

    return (
        <Link to={"restaurant/"+data?.id} data-testid="rest-card">
        <div className='card bg-gray-300 p-3'>
            <img src={FOOD_IMG} />
            <div className='details'>
                <p>{name}</p>
                <p>{costForTwo}</p>
                <p>{totalRatingsString}</p>
            </div>
        </div>
        </Link>
    )
}

export default RestaurantCard;