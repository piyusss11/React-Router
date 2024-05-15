
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setdata] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/piyusss11")
//     .then(res =>res.json())
//     .then(data=> {setdata(data)
//         console.log(data);  
//     })
//   }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <img className="w-60 rounded-md shadow-md mb-4" src={data.avatar_url} alt="" />
      <h1 className="text-3xl ">{data.name}</h1>
      <h2>Followers:{data.followers}</h2>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/piyusss11")
    return response.json()
}
