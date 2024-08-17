import { ArrowUpRight } from "lucide-react";
const Single_cart = ({
  name,
  email,
  description,
  language,
  education,
  specialization,
  social_media_link,
  banner,
  image,
}) => {
  return (
    <div className="w-[300px] rounded-md p-2 m-2 bg-slate-100">
      <img
        src={banner}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="items-center text-lg font-semibold">
          {name}
          {/* {name} <ArrowUpRight className="h-4 w-4" /> */}
        </h1>
        <h1 className=" items-center text-md font-semibold text-gray-600">
          {specialization}
          {/* {name} <ArrowUpRight className="h-4 w-4" /> */}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <img
            className="inline-block h-6 w-6 rounded-full"
            src={image}
            alt="Dan_Abromov"
          />
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {email}
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
         View Profile
        </button>
      </div>
    </div>
  );
};

export default Single_cart;
