"use client"

import styles from "./TopNavigation.module.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
type Props = {
  type: "main" | "sub";
  title?: string;
};

export default function TopNavigation({ type, title }: Props) {

    if (type == 'main') {
        return (

            <div className = "p-4 w-full flex justify-between shadow-md">
              <h2 className="text-3xl font-bold text-gray-700 hover:text-gray-800">바꿈</h2>
              <div className="flex flex-row">
                <CiSearch className="text-3xl"/>
                <IoIosNotificationsOutline className="text-3xl"/>
              </div>
            </div>
  )}

  else {
    return (
        <div className = "p-4 w-full flex justify-between shadow-md">
        <IoChevronBack ckassName="text-3xl" />
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex flex-row">
          <CiSearch className="text-3xl"/>
          <IoIosNotificationsOutline className="text-3xl"/>
        </div>
      </div>
    )
  }
}
