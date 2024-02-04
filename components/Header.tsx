"use client";

import Image from "next/image";
import Link from "next/link";

import type { NextPage } from "next";

import React, { useState } from "react";

import { motion } from "framer-motion";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

function Header() {
  return (
    <div className="text-white ">
      <Navbar />
    </div>
  );
}

export default Header;

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Navbar = () => {
  const [active, setActive] = useState(null);
  return (
    <div className="flex items-center   relative z-40  ">
      <Menu setActive={setActive}>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        
        <MenuItem setActive={setActive} active={active} item="Frontend">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="">Flames &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Coffee &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Alex7 &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Vynx &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Cloudy &ensp;&ensp;&ensp;&ensp;</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Backend">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="">BlackScorpion &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">ZdxMike &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Flames &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Vynx &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">BlueBlizzard &ensp;&ensp;&ensp;&ensp;</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Software">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="">Cracks~ @TeamCbNxtv &ensp;&ensp;&ensp;&ensp;</HoveredLink>
            <HoveredLink href="">Activation Keys~ @TeamSbNxtv &ensp;&ensp;&ensp;&ensp;</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: any;
  active: any;
  item: any;
  children?: any;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative hover:bg-neutral-800 px-3 rounded-2xl  flex items-center text-xs "
    >
      <motion.p
        animate={{
          color: active === item ? "var(--white)" : "var(--white)",
        }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute   top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className={
                  " bg-black rounded-2xl overflow-hidden border border-neutral-700 text-neutral-50 shadow-xl"
                }
              >
                <motion.div layout className="w-max h-full p-4 ">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: any;
  children: any;
}) => {
  const path = usePathname();

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={
        "max-w-5xl  mx-auto    border-neutral-900 flex  space-x-4 px-8 py-5 fixed top-0 border-b" +
        (path === "/"
          ? "bg-transparent top-0  fixed max-w-5xl mx-auto w-1/2"
          : "bg-black")
      }
    >
      {children}
    </nav>
  );
};

{
  /* Bignav products */
}
const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 className="text-sm font-bold mb-1 text-neutral-50">{title}</h4>
        <p className="text-neutral-200 text-xs max-w-[10rem]">{description}</p>
      </div>
    </Link>
  );
};

const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-50  ">
      {children}
    </Link>
  );
};
