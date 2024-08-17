import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { content_creators } from "../../assets/data/content_creators";
import { Star, ChevronDown, Instagram, Linkedin, Github } from "lucide-react";

const SingleProfile = () => {
  let [profile, setProfile] = useState({});
  let param = useParams();
  let { id } = param;
  // console.log(id);

  useEffect(() => {
    content_creators?.map((ele) => {
      ele?.id == id && setProfile(ele);
    });
  }, []);
  console.log(profile);
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={profile?.banner}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {profile?.specialization}
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {profile?.name}
            </h1>
            {/* <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
              </span>
            </div> */}
            <p className="leading-relaxed">{profile?.description}</p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">
                  Langauge : {profile?.language}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">
                  Education : {profile?.education}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-sm font-semibold">
                  Specialization : {profile?.specialization}
                </span>
              </div>
              {/* <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>8 UK</option>
                    <option>9 UK</option>
                    <option>10 UK</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div> */}
            </div>

            <div className="flex items-center justify-between">
              <img
                className="inline-block h-14 w-14 rounded-full"
                src={profile?.image}
                alt="Dan_Abromov"
              />
              <div className="mt-4 flex flex-wrap">
                <div className="w-auto p-1.5">
                  <a
                    className=""
                    target="blank-page"
                    href={profile?.social_media_link}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <Github />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a
                    className=""
                    target="blank-page"
                    href="https://www.linkedin.com/in/ranjan-yadav-65800122b/"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <Linkedin />
                    </div>
                  </a>
                </div>
                <div className="w-auto p-1.5">
                  <a
                    className=""
                    target="blank-page"
                    href={"https://www.instagram.com/developer_ranjan/"}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <Instagram />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProfile;
