import React from "react";
import Link from "next/link";
import Image from "next/image";
//these are the sample import and use of styles in next
import styles from "../styles/navbar.module.css";
import styles1 from "@/app/styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.toCenter}></div>
      <div className={styles1.toCenter}></div>
      <div className="flex justify-between mt-8">
        <div className="ml-5">
          <Image //ps: while using the Image component, its mandatory for us to give the height and the width property
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAY1BMVEX///8AAAD29vZAQEC/v79xcXFGRkbd3d14eHgHBwe5ubnh4eHo6Ojy8vKpqamysrLKyspTU1PV1dVeXl6hoaEjIyN+fn5MTEwoKChpaWkODg6QkJCYmJgdHR2KiootLS05OTmhvne4AAACJElEQVR4nO3c627iMBSFUU/IDXIhISQQSlve/ymHdgZNis8xkebHPpb2eoJPyHJiO8Y5IiIiIiIiIiIiIrC6S9G6ekXnYTqdt2jn03R40ZnMv6yYk1BolaP7FvJKD20shd5TG7V0QLc9GbTQDl3m6ZTSDB3myeTQ4oYO89wKsTS9oMM8l1QsbdFdgjby0j06S7AXS7sR3eUZ5WmqOaHDPCflKfWGDvO8yaEuQYd51NepFF32RJ5Nvx3RbT8c9VCXWJqp9sFXaVfNNuaqcQi8R/9VXKcMbbq+WkY9BgHaukwiIiIiIiIr6gptzRGfS9pyyNGGsn256tvbWO7fF/zy1ulDM6EDFyb94MwlJbruh1IfAVd025OrFlqjyzzaHGBpkP4xKT+pwX1++UdN39Fhnnd5V9rSLu+DPKnGc8YXT2k847S29RXKl1yZUKOZTyN6Rpk7ONWOTe/vUra+mckCb9ONpde+MvB+etda+WzmIk+lyxHQZv0Grc9er6O+1AXaqrUpERERERGRHehPJVd+K1kcP0q0j6N8NWapnj/RK/1vn/OL9ekOXbiwC4VG8+25tetx2uU459BlHi3U2vapuoGa9OgwTy/PrN0ZHeY5yyOVZ3z/I/Yzvp2VjfN/LvJzKp47vPHcizb3MA08Tq1N/b0W6hpbI/UWODqrNui6hU3wflxj5w8chvBhpHOHLB+34MjtmGdrLvLV3Q5t1X/MEBERGfEb09ZPiSbL7f0AAAAASUVORK5CYII="
            alt="hamburger.jpg"
            height={30}
            width={30}
            className="cursor-pointer"
          />
        </div>
        <div className="flex mr-5 list-none">
          <li className="mr-5 cursor-pointer">
            <Link href="/">home</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link href="/about">about</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link href="/movies">movies</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link href="/contact">contact</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
