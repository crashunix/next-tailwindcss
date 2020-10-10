import react, { useState, useEffect } from "react";

import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import FullCard from "../components/FullCard";

import { BiMenuAltRight } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

import { motion } from "framer-motion";

const Header = (props) => (
  <div className="px-4 pt-5 pb-16 flex justify-between items-center">
    <div className="flex justify-between items-center">
      <img
        className="rounded-md h-12 w-12 object-cover"
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/9e/9e1c7583dc792a199ae3ac2e15e6b91e64badae1_full.jpg"
      ></img>
      <div className="flex flex-col ml-3">
        <div className="flex">
          <span className="text-white text-lg">crash</span>
          <span className="text-white font-bold text-lg">unix</span>
          <button className="ml-1">
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
          </button>
        </div>
        <span className="text-gray-300 text-xs">Juan Macário</span>
      </div>
    </div>
    <button className="relative">
      <div className="w-3 h-3 rounded-full bg-blue-400 absolute top-0 right-0 animate-ping" />
      <div className="w-3 h-3 rounded-full bg-blue-400 absolute top-0 right-0" />
      <IoMdNotifications className="text-gray-600 text-2xl" />
    </button>
  </div>
);

const Home = () => {
  const [guardCode, setGuardCode] = useState("C89HX");
  const [guardSecs, setGuardSecs] = useState(20);

  const makeGuardCode = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    if (guardSecs > 0) {
      setTimeout(() => setGuardSecs(guardSecs - 1), 1000);
    } else if (guardSecs == 0) {
      setGuardCode(makeGuardCode(5));
      setGuardSecs(20);
    }
  });

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="px-4 py-4">
        <p className="text-white font-normal mb-4">Steam Guard</p>
        <div className="flex justify-between items-center">
          <span className={`${guardSecs < 5 ? 'text-red-500' : 'text-white'} text-5xl font-medium tracking-widest leading-4`}>
            {guardCode}
          </span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-settings text-gray-600"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>
        <div className="pt-6 mt-1">
          <div className="bg-gray-900 rounded-sm">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${guardSecs * 5}%` }}
              transition={{
                stiffness: 260,
                damping: 20,
              }}
              className={`${guardSecs < 5 ? 'bg-red-500' : 'bg-blue-400'} h-1 w-full rounded-sm`}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5">
        <p className="text-white font-normal mb-4">Confirmations</p>
        <div className="bg-gray-900 px-4 py-6 rounded-lg">
          <div className="w-1/2">
            <span className="text-white">Nothing to confirm</span>
            <p className="text-white text-xs text-gray-400">
              You don't have anything to confirm right now.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <FullCard
          left={<span className="text-white font-medium">Today's Deals</span>}
          right={
            <button>
              <BiMenuAltRight className="text-white text-xl" />
            </button>
          }
        >
          <div className="grid grid-cols-2 gap-3">
            <div
              className="bg-gray-500 rounded-lg flex-1 p-3 pb-10"
              style={{
                backgroundImage:
                  "url('https://pngimg.com/uploads/witcher/witcher_PNG21.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "80px",
                backgroundPositionY: "20px",
              }}
            >
              <div className="flex flex-col w-2/3">
                <span className="text-gray-300 text-xs">01:06:35</span>
                <span className="text-white font-medium text-md">
                  The Witcher 3: Wild Hunt
                </span>
                <div className="flex">
                  <span className="text-3xl font-bold text-white">-30</span>
                  <span className="text-lg text-gray-200 mt-1">%</span>
                </div>
              </div>
            </div>
            <div
              className="bg-orange-400 rounded-lg flex-1 p-3 pb-10"
              style={{
                backgroundImage:
                  "url('https://justcause.square-enix-games.com/client/647f3bbfa6f5a57848b33aa98a4eb16c.png')",
                backgroundSize: "70%",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "85px",
                backgroundPositionY: "20px",
              }}
            >
              <div className="flex flex-col w-2/3">
                <span className="text-gray-300 text-xs">06:24:44</span>
                <span className="text-white font-medium text-md">
                  Just Cause 4
                </span>
                <div className="flex">
                  <span className="text-3xl font-bold text-white">-25</span>
                  <span className="text-lg text-gray-200 mt-1">%</span>
                </div>
              </div>
            </div>
            <div
              className="bg-blue-400 rounded-lg flex-1 p-3 pb-10"
              style={{
                backgroundImage:
                  "url('https://img.pngio.com/csgo-character-png-png-collections-csgo-character-png-612_698.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "30px",
                backgroundPositionY: "25px",
              }}
            >
              <div className="flex flex-col w-3/4">
                <span className="text-gray-300 text-xs">23:24:12</span>
                <span className="text-white font-medium text-md">
                  Counter Strike Source
                </span>
                <div className="flex">
                  <span className="text-3xl font-bold text-white">-80</span>
                  <span className="text-lg text-gray-200 mt-1">%</span>
                </div>
              </div>
            </div>
            <div
              className="bg-red-400 rounded-lg flex-1 p-3 pb-10"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/originals/d0/c5/88/d0c588a0a54e48369672a11391e3966e.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "65px",
                backgroundPositionY: "20px",
              }}
            >
              <div className="flex flex-col w-2/3">
                <span className="text-gray-300 text-xs">01:02:35</span>
                <span className="text-white font-medium text-md">
                  Assassin's Creed 2
                </span>
                <div className="flex">
                  <span className="text-3xl font-bold text-white">-25</span>
                  <span className="text-lg text-gray-200 mt-1">%</span>
                </div>
              </div>
            </div>
          </div>
        </FullCard>
      </div>
    </>
  );
};

Home.pageTitle = "Home";

export default Home;
