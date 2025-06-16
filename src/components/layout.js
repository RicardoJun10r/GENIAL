import { Outlet } from "react-router";
import { NavBar } from "./Navbar/navbar";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}