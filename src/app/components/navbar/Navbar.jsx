"use client";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import NavButton from "../button/navButton";


const navItems = [
  {
    label: "Use Cases",
    link: "#",
    children: [
      {
        label: "Sales Outreach",
        link: "#",
        
      },
      {
        label: "Product Marketing",
        link: "#",
        
      },
      {
        label: "Content Marketing",
        link: "#",
        
      },
      {
        label: "Learning & Development",
        link: "#",
        
      }
    ]
  },
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Instant Avatar",
        link: "#"
      },
      {
        label: "Studio Avatar",
        link: "#"
      },
      {
        label: "Video Translate",
        link: "#"
      },
      {
        label: "Voice Cloning",
        link: "#"
      },
      {
        label: "Photo Avatar",
        link: "#"
      },
      {
        label: "AI Voices",
        link: "#"
      },
      {
        label: "Personalised Video",
        link: "#"
      },
      {
        label: "Streaming Avatar",
        link: "#"
      },
      {
        label: "AI Avatars",
        link: "#"
      },
      {
        label: "Templates",
        link: "#"
      },
      {
        label: "Zapier",
        link: "#"
      }
    ]
  },
  {
    label: "Resources",
    link: "#",
    children: [
      {
        label: "Blog",
        link: "#",
        
      },
      {
        label: "Weekly Webinar",
        link: "#",
        
      },
      {
        label: "Case Studies",
        link: "#",
        
      },
      {
        label: "Help Center",
        link: "#",
        
      }
    ]
  },
  {
    label: "Pricing",
    link: "#"
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
    document.body.style.overflow = 'hidden';
  }
  function closeSideMenu() {
    setSideMenue(false);
    document.body.style.overflow = '';
  }

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-4 text-sm">
      {/* left side  */}
      {/* logo */}
      <Image src={`https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg`} alt=" logo" width={100} height={100} className="cursor-pointer"/>
      {/* middle side  */}
      <section ref={animationParent} className="flex items-center justify-between">
        
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden lg:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all  font-semibold "
            >
              <p className="flex cursor-pointer items-center gap-2 text-black group-hover:text-[#7559ff] group-hover:bg-[#0c062c0d] rounded-full p-2">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="text-[#7559ff]   transition-all group-hover:rotate-180" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute left-0 top-15 mt-2 hidden w-auto  flex-col gap-1   rounded-[24px] bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-black hover:text-[#7559ff]  "
                    >
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      <section className=" hidden lg:flex   items-center gap-2 ">
        <button className="h-fit font-semibold text-black transition-all hover:text-[#7559ff]">
          Contact Sales
        </button>
        <NavButton text="Get Started"/>
      </section>
      <div className="flex gap-2 items-center lg:hidden">
      <NavButton text="Get Started"/>
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl bg-[#7559ff1a] rounded lg:hidden"
      />
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-screen justify-end bg-black/60 lg:hidden">
      <div className=" w-full h-full bg-white px-4 py-4">
        <div className="flex justify-between">
        <Image src={`https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg`} alt=" logo" width={100} height={100} className="cursor-pointer"/>
        <div className="flex items-center">
          <NavButton text="Get Started"/>
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        </div>
        </div>
        
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 font-semibold text-black hover:text-[#7559ff] ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs text-[#7559ff] transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pr-8  text-black hover:text-[#7559ff]  "
            >
              {/* item */}
              <span className="whitespace-nowrap  ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}