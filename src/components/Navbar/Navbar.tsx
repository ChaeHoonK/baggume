"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import { Badge, Avatar } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/state";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

type Props = {
  avatarImage?: string;
};

export default function Nav({ avatarImage = "" }: Props) {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Help & Feedback",
    "Log Out",
  ];

  const [user, setUser] = useRecoilState(userState);
  const [isOpen, setIsOpen] = React.useState(user?.needMoreInfo());
  return (
    <Navbar isBordered shouldHideOnScroll className="w-screen fixed top-0">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit text-2xl">바꿈</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Large Screen Size */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit text-2xl">바꿈</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/test#test">
            Test
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Alert
          </Button>
        </NavbarItem> */}
            <Badge content="5" color="primary">
        <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <PopoverTrigger>
              <Avatar radius="md" size="lg" src={user?.image} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Popover Content</div>
              <div className="text-tiny">This is the popover content</div>
              <button onClick={()=>console.log('helloe')}>hi</button>
            </div>
          </PopoverContent>
        </Popover>
            </Badge>
          
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem key={`log out`}>
          <Link className="w-full" color="foreground" href="#" size="lg">
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={`log out`}>
          <Link className="w-full" color="danger" href="#" size="lg">
            로그아웃
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
