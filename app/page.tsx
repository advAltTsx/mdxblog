"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";
import {
  SiAdobe,
  SiEbay,
  SiHashnode,
  SiHonda,
  SiLoom,
  SiMeta,
  SiTailwindcss,
  SiThewashingtonpost,
  SiUnderarmour,
  SiZapier,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaAngular, FaHackerrank, FaVuejs } from "react-icons/fa";
import Footer from "@/components/Footer";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <div className="up absolute z-10 lg:-top-48 md:-top-24 -top-10" />

      <div className="w-full h-full  max-w-5xl mx-auto relative z-20 ">
        <Header />

        <div className="mt-40 px-5">
          <h1 className="text-6xl text-center font-InterMedium  text-white bg-gradient-to-r from-[#e0dfdf]  to-black  text-transparent bg-clip-text capitalize">
          Team {" "}
            <span className=" font-bold tracking-tighter  bg-gradient-to-r from-[rgb(47,19,255)] to-purple-600 text-transparent bg-clip-text text-6xl font-InterBold">
              Bytes{" "}
            </span>
          </h1>
          <p className="text-neutral-400 max-w-[41rem] mx-auto mt-4  font-InterRegular text-center">
            {"Preview *************.onion"} <br />
            v1.0.1 originally at v12.9.1 <br />
            Build for Chrome, FireFox, Opera <br />
            Hidden Downloads
             </p>

          <div className="flex justify-center mt-11">
            <div>
              {
                <Link href="/posts">
                  <button
                    className="px-4 bg-transparent
                    border-neutral-800 border  font-InterRegular
                  rounded-full h-8
                  text-xs text-neutral-400
                  dark:border-slate-600"
                  >
                    Stolen Blogs
                  </button>
                </Link>
              }
            </div>
          </div>

          <div className="max-w-4xl mx-auto flex justify-center gap-x-8 mt-10">
            <TbBrandNextjs className="text-neutral-400 text-4xl" />
            <GrReactjs className="text-neutral-400 text-4xl" />
            <TbBrandSvelte className="text-neutral-400 text-4xl" />
            <FaHackerrank className="text-neutral-400 text-4xl" />
          </div>
        </div>

        

        {/* <Link href="/posts">
          <div className="py-2 px-8 mt-14 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
            Go to Blogs <BsArrowRightShort className="text-3xl ml-1" />
          </div>
        </Link>  */}
         {/* <Footer /> */}
      </div>
    </main>
  );
}
