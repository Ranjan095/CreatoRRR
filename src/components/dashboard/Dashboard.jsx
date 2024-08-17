import { useEffect, useState } from "react";
import { content_creators } from "../../assets/data/content_creators";
import Single_cart from "./Single_cart";
import { Search } from "lucide-react";

const Dashboard = () => {
  let [data, setData] = useState([]);
  let [search, setSearch] = useState("");

  // console.log(data);

  useEffect(() => {
    setData(content_creators);
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let searchData = content_creators.filter((ele) =>
      ele?.name.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(searchData);
    setData(searchData);
    setSearch("");
  };

  return (
    <div>
      <h1 className="font-bold">Dashboard</h1>

      {/** For search  */}
      <div>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="text-gray-400" />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm outline-none border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 border justify-items-center">
        {data.length < 1 ? (
          <h1 className="text-3xl font-bold">No Data found..</h1>
        ) : (
          data?.map((ele) => <Single_cart key={ele?.id} {...ele} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
