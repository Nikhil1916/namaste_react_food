import { useRouteError } from "react-router-dom"

const ErrorEl = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <h1>Sorry Error, Please dont mess with routes.</h1>
            {error?.data}
        </div>
    )
}

export default ErrorEl;