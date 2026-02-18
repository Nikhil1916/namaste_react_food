const Schimmer = ({ length }) => {
    const arr = Array(length)?.fill(-1);
    console.log(arr, length);
    return (
        <div className="schimmer-wrap flex flex-wrap justify-center">
            {
                 arr?.map((_,i) => {
                    return (
                    <div className='schimmer-card flex-col  justify-center w-[200] m-2.5 p-2.5 bg-[#f0f0f0]' key={i}>
                        <div className="schimmer-lined h-30 mb-3 bg-[#ddd]  w-full"></div>
                        <div className="schimmer-lined mb-3 bg-[#ddd]  h-4 w-[80%]"></div>
                        <div className="schimmer-lined mb-3 bg-[#ddd]  h-4 w-[60%]"></div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Schimmer;