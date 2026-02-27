
import { UserDataProvider } from "../App";


const Child3 = () => {
    const data = useContext(UserDataProvider);
    console.log(data);
    return (
        <div>This is Child3
            <h1>{data.userinfo.fullname}</h1>
        </div>
    )
}
export default Child3;