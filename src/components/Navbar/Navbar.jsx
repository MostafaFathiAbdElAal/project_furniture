'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
export default function Navbar() {
    const bar = useRef(null)
    const navBar = useRef(null)
    const ulLinks = useRef(null)
    let current = usePathname(null)
    useEffect(() => {
        if (navBar.current && ulLinks.current) {
            window.addEventListener("scroll", () => {
                if (window.scrollY < 170) {
                    navBar.current.classList.replace("h-16", "h-20")
                    ulLinks.current.classList.replace("top-11", "top-12")
                } else {
                    navBar.current.classList.replace("h-20", "h-16")
                    ulLinks.current.classList.replace("top-12", "top-11")
                }
            })
        }

    }, [navBar, ulLinks])
    // Bar toggle 
    function toggleClass() {
        bar.current.classList.toggle("active")
        if (bar.current.classList.contains("fa-bars")) {
            bar.current.classList.replace("fa-bars", "fa-xmark")
        } else {
            bar.current.classList.replace("fa-xmark", "fa-bars")
        }
    }
    // Control scroll bar
    function scrollToTop(height) {
        window.scrollTo({ top: height, behavior: "instant" });
    }
    // Close navBar by click on Escape
    useEffect(()=>{
        window.addEventListener("keyup", (e) => {
            if (e.code !== "Escape") return;
            bar.current.classList.contains("active") ? toggleClass() : null
        })

    },[bar])
    return <nav ref={navBar} className="bg-[#17191c] py-2 fixed flex items-center top-0 h-20 w-screen  z-[9999] transition-[height] duration-300 ease-in-out" style={{ boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.05)" }}>
        <div className={`lg:container relative flex items-center gap-6 w-full`}>
            <header className="ps-3 lg:ps-0">
                <h1 onClick={() => {
                    scrollToTop(0)
                }} className="text-white text-xl sm:text-2xl font-cairo font-bold">
                    <Link tabIndex={2} href={"/"}>
                        التميز لنقل العفش
                    </Link>
                </h1>
            </header>
            <i tabIndex={1} ref={bar} id="Barnav" role="button" onClick={() => {
                toggleClass()
            }} onKeyUp={(e) => {
                if (e.code !== "Enter") return;
                toggleClass()
            }} className={`fa-solid fa-bars rounded-full w-9 h-9 flex items-center justify-center hover:bg-[rgba(246,247,249,0.13)] mt-1 absolute left-7 text-xl text-white lg:hidden`}></i>
            <ul tabIndex={-1} ref={ulLinks} id="Basenav" className="flex flex-1 gap-4 lg:gap-6 bg-[#212e3b] lg:bg-transparent items-center justify-center  overflow-hidden  absolute  w-full top-12 lg:top-0 flex-col lg:flex-row lg:static lg:h-full transition-[top] duration-500 ease-in-out">
                <li onClick={() => {
                    bar.current.classList.contains("active") ? toggleClass() : null
                    scrollToTop(0)
                }}>
                    <Link className={`relative font-bold font-cairo text-lg rounded-e-full rounded-s-full px-3 hover:bg-[rgba(246,247,249,0.13)] hover:before:w-full before:transition-[width] before:duration-300 
                            before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/" ? "before:w-full bg-[rgba(88,175,223,.1)] text-[rgb(88,196,220)]" : "before:w-0 text-white"}`} href={"/"}>
                        الرئيسية
                    </Link>
                </li>
                <li onClick={() => {
                    bar.current.classList.contains("active") ? toggleClass() : null
                    scrollToTop(0)
                }}>
                    <Link tabIndex={1} className={`relative font-bold font-cairo text-lg rounded-e-full rounded-s-full px-3 hover:bg-[rgba(246,247,249,0.13)] hover:before:w-full before:transition-[width] before:duration-300 
                            before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/services" ? "before:w-full bg-[rgba(88,175,223,.1)] text-[rgb(88,196,220)]" : "before:w-0 text-white"}`} href={"/services"}>
                        الخدمات
                    </Link>
                </li>
                <li onClick={() => {
                    bar.current.classList.contains("active") ? toggleClass() : null
                    scrollToTop(0)
                }}>
                    <Link tabIndex={1} className={`relative font-bold font-cairo text-lg rounded-e-full rounded-s-full px-3 hover:bg-[rgba(246,247,249,0.13)] hover:before:w-full before:transition-[width] before:duration-300 
                            before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/requestService" ? "before:w-full bg-[rgba(88,175,223,.1)] text-[rgb(88,196,220)]" : "before:w-0 text-white"}`} href={"/requestService"}>
                        طلب الخدمة
                    </Link>
                </li>
                <li onClick={() => {
                    bar.current.classList.contains("active") ? toggleClass() : null
                    scrollToTop(0)
                }}>
                    <Link tabIndex={1} className={`relative font-bold font-cairo text-lg rounded-e-full rounded-s-full px-3 hover:bg-[rgba(246,247,249,0.13)] hover:before:w-full before:transition-[width] before:duration-300 
                        before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/whoWeAre" ? "before:w-full bg-[rgba(88,175,223,.1)] text-[rgb(88,196,220)]" : "before:w-0 text-white"}`} href={"/whoWeAre"}>
                        من نحن
                    </Link>
                </li>
            </ul>
        </div>
    </nav >

}