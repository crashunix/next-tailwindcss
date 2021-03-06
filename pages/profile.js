import { useState, useEffect } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import ActivityGameCard from "../components/ActivityGameCard";
import Card from "../components/Card";
import FullCard from "../components/FullCard";

import { motion } from "framer-motion";
import HeaderBadge from "../components/HeaderBadge";

const Profile = (props) => {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <>
      <header>
        <HeaderBadge user={props.currentUser} />
      </header>
      <div className="px-4 pt-2 pb-4">
        <nav className="flex mb-2 relative">
          <a
            href="#"
            onClick={() => setCurrentTab("tab1")}
            className="text-sm text-gray-600 w-20 pb-1"
          >
            Statistics
          </a>
          <a
            href="#"
            onClick={() => setCurrentTab("tab2")}
            className="text-sm text-gray-600 w-20 pb-1"
          >
            Activity
          </a>
          <a
            href="#"
            onClick={() => setCurrentTab("tab3")}
            className="text-sm text-gray-600 w-20 pb-1"
          >
            Comments
          </a>
          <motion.div
            initial={{
              x: 0,
            }}
            animate={{
              x:
                currentTab == "tab2"
                  ? "5rem"
                  : currentTab == "tab3"
                  ? "10rem"
                  : 0,
            }}
            transition={{
              type: "spring",
              damping: 15,
            }}
            className={
              "absolute left-0 h-1 w-6 rounded-md bg-blue-400 bottom-0"
            }
          ></motion.div>
        </nav>
      </div>

      <div
        className={
          currentTab == "tab1" ? "grid grid-cols-2 gap-3 pb-4 px-4" : "hidden"
        }
      >
        <div className="grid grid-cols-1 gap-3">
          <Card title="Badges" value="13">
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button className="bg-gray-800 p-1 rounded-lg">
                <img
                  src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png"
                  alt="Líder da Comunidade"
                />
              </button>
              <button className="bg-gray-800 p-1 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/221040/57ff517973bf5e75bb2e2d580731a09243570a3e.png"
                  alt="Líder da Comunidade"
                />
              </button>
              <button className="bg-gray-800 p-1 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/01ee9c21ab01c4eb62e577f10cf9efd2a56da771.png"
                  alt="Líder da Comunidade"
                />
              </button>
            </div>
          </Card>
          <Card animDelay={0.2} title="Friends" value="368">
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button className="bg-gray-800 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4a/4a28915a03f1e88ff4bc7c68475a156ab06f1313_full.jpg"
                  alt="Friend"
                  className="h-10 rounded-lg object-cover"
                />
              </button>
              <button className="bg-gray-800 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/90/902384884e7cd34f27e5a66c1c859771c34daad5_full.jpg"
                  alt="Friend"
                  className="h-10 rounded-lg object-cover"
                />
              </button>
              <button className="bg-gray-800 rounded-lg">
                <img
                  src="https://s2.glbimg.com/bfILYK5vi7P19-Ov1YjWQfzOJns=/0x0:680x453/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/r/7/AIxbCnSMuMHwCf9DDzfA/era5gmwucaa929r.jfif"
                  alt="Friend"
                  className="h-10 rounded-lg object-cover"
                />
              </button>
            </div>
          </Card>
          <Card animDelay={0.4} title="Screenshots" value="7"></Card>
          <Card animDelay={0.6} title="Artworks" value="1"></Card>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Card animDelay={0.1} title="Games" value="58"></Card>
          <Card animDelay={0.3} title="Groups" value="39">
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button className="bg-gray-800 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/35/356b61e3c05af86aaff47a437dac5e5f1edd9875_medium.jpg"
                  alt="Group"
                  className="h-10 rounded-lg object-cover"
                />
              </button>
              <button className="bg-gray-800 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9f/9f4b1e838c095ebe84e37757de0dbabeace41593_medium.jpg"
                  alt="Group"
                  className="h-10 rounded-lg object-cover"
                />
              </button>
              <button className="bg-gray-800 rounded-lg">
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/2d/2da9b510ca4da8c7bb075337a575731cff462a1b_medium.jpg"
                  alt="Group"
                  className="h-10 rounded-lg object-cover"
                />
              </button>
            </div>
          </Card>
          <Card animDelay={0.5} title="Inventory" value="161"></Card>
          <Card animDelay={0.7} title="Groups" value="39">
            <div className="grid grid-cols-3 gap-2 mt-3">
              <button className="bg-gray-800 p-1 rounded-lg">
                <img
                  src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png"
                  alt="Líder da Comunidade"
                />
              </button>
              <button className="bg-gray-800 p-1 rounded-lg">
                <img
                  src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png"
                  alt="Líder da Comunidade"
                />
              </button>
              <button className="bg-gray-800 p-1 rounded-lg">
                <img
                  src="https://steamcommunity-a.akamaihd.net/public/images/badges/01_community/communityleader_54.png"
                  alt="Líder da Comunidade"
                />
              </button>
            </div>
          </Card>
        </div>
      </div>
      <div className={currentTab == "tab2" ? "" : "hidden"}>
        <FullCard
          left={
            <a href="#" className="flex items-center">
              <span className="text-white font-medium mr-1">All Games</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-down text-white"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          }
          right={
            <a href="#" className="flex items-center">
              <span className="text-white font-medium mr-1">Playtime</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-chevron-down text-white"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          }
        >
          <div className="flex bg-black rounded-lg">
            <div className="w-1/2 bg-blue-400 py-1 px-3 rounded-lg flex flex-col">
              <span className="text-xs text-white">this week</span>
              <div className="flex items-center">
                <span className="text-3xl text-white">19.7</span>
                <span className="text-white text-sm ml-2">hours</span>
              </div>
            </div>
            <div className="w-1/2 py-1 px-3 flex flex-col">
              <span className="text-xs text-white">entire time</span>
              <div className="flex items-center">
                <span className="text-3xl text-white">538</span>
                <span className="text-white text-sm ml-2">hours</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 pt-4">
            {props.gamesActivity.length > 0 ? (
              props.gamesActivity.map((item) => {
                return <ActivityGameCard key={item.id} game={item} />;
              })
            ) : (
              <>
                <ActivityGameCard skeleton />
                <ActivityGameCard skeleton />
                <ActivityGameCard skeleton />
              </>
            )}
          </div>
        </FullCard>
      </div>
      <p className={currentTab == "tab3" ? "block text-white" : "hidden"}>
        Tab3
      </p>
    </>
  );
};

Profile.pageTitle = "Profile";

export default Profile;
