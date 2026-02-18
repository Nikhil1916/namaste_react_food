import cx from "classnames";
import { useState } from "react";
import { formatCurrency } from "../utils/currency";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Accordian = (
    {
        children,
        title,
        onChange,
        data,
        isOpen,
        handleClick
    }
) => {
    data = data?.map(_=>_.card?.info);
    const dispatch = useDispatch();
    const addItemInCart = (_) => {
        dispatch(addItem(_));
    }
    console.log(data);
    return (
    <div className="flex justify-center">
        <div className="accordian m-3 cursor-pointer w-[70%] text-center shadow-lg p-2 bg-gray-100">
            <div className="accordian-head  p-5 w-[full]" onClick={handleClick}>
                <div>{title}</div>
            </div>
            {
                children && <div className={cx("accordian-body hidden", {["block"]:isOpen})}>
                    {children}
                </div>
            }
            {
                !children && <div className={cx("accordian-body",{["hidden"]:!isOpen} ,{["block"]:isOpen})}>
                    {
                        data?.map(_=>{
                            return(
                            
                                <div className="content-accordian-body flex justify-between p-4 bg-gray-100 items-stretch border-b last:border-none" key={_.id}>
                                    <div className="flex flex-col text-left p-2">
                                    <span>{_.name} {"("+formatCurrency(_.price/100)+")"}</span>
                                    <span className="text-gray-600">{_.description}</span>
                                </div>
                                {/* <div>
                                </div> */}
                                <div className="flex items-center">
                                    <button className="p-2 mx-2 bg-black rounded text-white text-sm cursor-pointer" onClick={()=>addItemInCart(_)}>Add To Cart</button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    </div>
    )
}

export default Accordian;