"use client";
import Link from "next/link";

import { MenuSquare } from "lucide-react";
import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function NavigationSection() {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      hrefLink: "/",
    },
    {
      id: 2,
      title: "About Us",
      hrefLink: "/about-us",
    },
    {
      id: 3,
      title: "Services",
      hrefLink: "/our-services",
    },
    {
      id: 4,
      title: "Blogs",
      hrefLink: "/blogs",
    },
   
    {
      id: 5,
      title: "Contact",
      hrefLink: "/contact",
    },
  ];
    const [open, setOpen] = useState(false);
  return (
    <>
      <NavigationMenu className="hidden lg:block overflow-hidden">
        {/* <NavigationMenuList className="w-[99vw] bg-white flex  justify-between items-center px-1 lg:px-16 "> */}
        <NavigationMenuList className="w-full md:w-screen 7xl:max-w-7xl ml-auto  bg-white flex justify-between items-center px-4 lg:px-16 ">
          {/* <div className="w-full p-2"> */}
          <div className="flex-1 p-2 ">
            <NavigationMenuItem>
              <Link href={`/`} className="flex items-center">
                <Image
                  src={`https://www.egovernanceplus.com/wp-content/uploads/2026/04/egoverance-transparent-logo.jpg`}
                  height={400}
                  width={400}
                  alt=""
                  className="object-cover"
                />
              </Link>
            </NavigationMenuItem>
          </div>
          {/* <div className=" flex gap-x-2 justify-end w-full"> */}
          <div className=" flex gap-x-2 justify-end shrink-0">
            {navLinks.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} whitespace-nowrap font-bold hover:bg-fuchsia-100`}
                  // className={` whitespace-nowrap font-bold hover:bg-fuchsia-100`}
                //   asChild
                >
                  <Link href={nav.hrefLink}>{nav.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      {/* mobile menu */}
      <NavigationMenu className="block lg:hidden">
        <NavigationMenuList>
          <div className="w-[99vw] flex justify-between items-center px-1">
            <div className="c">
              <NavigationMenuItem>
                <Link href={`/`} className="flex items-center">
                  <Image
                    src={`https://www.egovernanceplus.com/wp-content/uploads/2026/04/egoverance-transparent-logo.jpg`}
                    height={400}
                    width={400}
                    alt=""
                    className="object-cover"
                  />
                  
                </Link>
              </NavigationMenuItem>
            </div>
            <div className="c">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                  <MenuSquare className="text-violet-400" />
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <div className=" flex flex-col gap-x-2 justify-end items-end list-none text-left pr-10 w-full">
                    {navLinks.map((nav) => (
                      <NavigationMenuItem key={nav.id}>
                        <NavigationMenuLink
                        onClick={()=>setOpen(false)}
                          className={`${navigationMenuTriggerStyle()} whitespace-nowrap font-bold hover:bg-fuchsia-100`}
                          // className={` whitespace-nowrap font-bold hover:bg-fuchsia-100`}
                        //   asChild
                        >
                          <Link href={nav.hrefLink}>{nav.title}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}