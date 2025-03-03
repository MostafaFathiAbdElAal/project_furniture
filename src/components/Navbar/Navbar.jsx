'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
export default function Navbar() {
    const bar = useRef(null)
    const navBar = useRef(null)
    const ulLinks = useRef(null)
    const progressBar = useRef(null)
    const btnTheme = useRef(null)
    let current = usePathname(null)
    const [darkMode, setDarkMode] = useState(true)
    // Toggle darkmode    
    function toggleDark(e) {
        if (darkMode === true) {
            document.documentElement.classList.remove("dark")
            e.target.classList.replace("fa-sun", "fa-moon")
            setDarkMode(false)
            localStorage.setItem("darkmode",false)
        } else if (darkMode === false) {
            document.documentElement.classList.add("dark")
            e.target.classList.replace("fa-moon", "fa-sun")
            setDarkMode(true)
            localStorage.setItem("darkmode",true)
        }
    }
    // Animation navbar
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 110) {
                navBar.current.classList.replace("h-16", "h-20")
                ulLinks.current.classList.replace("top-[52px]", "top-[60px]")
                // progress visiable
                progressBar.current.classList.contains("opacity-0") ? null : progressBar.current.classList.replace("opacity-100", "opacity-0")
            } else {
                navBar.current.classList.replace("h-20", "h-16")
                ulLinks.current.classList.replace("top-[60px]", "top-[52px]")
                // progress invisiable
                progressBar.current.classList.contains("opacity-0") ? progressBar.current.classList.replace("opacity-0", "opacity-100") : null
            }
            // progress bar
            progressBar.current.firstChild.style.width = `${(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100}%`
        }, { passive: true })

    }, [])
    // Bar toggle 
    function toggleClass() {
        bar.current.classList.toggle("active")
        if (bar.current.classList.contains("fa-bars")) {
            bar.current.classList.replace("fa-bars", "fa-xmark")
        } else {
            bar.current.classList.replace("fa-xmark", "fa-bars")
        }
    }
    // Close navBar by click on Escape
    useEffect(() => {
        window.addEventListener("keyup", (e) => {
            if (e.code !== "Escape") return;
            bar.current.classList.contains("active") ? toggleClass() : null
        })
    }, [bar])
    return <nav ref={navBar} className="dark:bg-[#17191c] bg-white dark:text-white text-black select-none py-2 fixed flex items-center top-0 h-20 left-0 right-0 z-[9999] transition-[height] duration-300ms" style={{ boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.05)" }}>
            <div className={`lg:container relative flex items-center gap-6 w-full`}>
                <header className="ps-3 lg:ps-0">
                        <Link tabIndex={2} href={"/"} className="text-lg 2xl:text-xl text-nowrap sm:text-2xl font-cairo font-bold">
                            التميز لنقل العفش
                        </Link>
                </header>
                <i tabIndex={1} ref={bar} id="Barnav" role="button" onClick={() => {
                    toggleClass()
                }} onKeyUp={(e) => {
                    if (e.code !== "Enter") return;
                    toggleClass()
                }} className={`fa-solid fa-bars rounded-full w-9 h-9 flex items-center justify-center dark:hover:bg-[rgba(246,247,249,0.13)] hover:bg-[rgba(35,39,47,.05)] mt-1 ms-auto me-7 text-xl lg:hidden`}></i>
                <ul tabIndex={-1} ref={ulLinks} id="Basenav" className="flex flex-1 gap-4 lg:gap-6 dark:max-lg:bg-[#212e3b] max-lg:bg-[rgba(255,255,255,0.67)] lg:bg-transparent items-center justify-center  overflow-hidden  absolute  w-full top-[60px] lg:top-0 flex-col lg:flex-row lg:static lg:h-full transition-transform duration-300 px-4">
                    <li>
                        <i onKeyUp={(e) => {
                            if (e.code !== "Enter") return;
                            toggleDark(e)
                            bar.current.classList.contains("active") ? toggleClass() : null
                        }} onClick={(e) => {
                            bar.current.classList.contains("active") ? toggleClass() : null
                            toggleDark(e)
                        }} role="button" ref={btnTheme} tabIndex={1} className={`fa-solid fa-sun mx-auto w-9 h-9 flex items-center justify-center dark:hover:bg-[rgba(246,247,249,0.13)] hover:bg-[rgba(35,39,47,.05)] rounded-full`}></i>
                    </li>
                    <li onClick={() => {
                        bar.current.classList.contains("active") ? toggleClass() : null
                    }}>
                        <Link tabIndex={1} className={`relative font-bold font-cairo text-lg 2xl:text-xl rounded-e-full rounded-s-full px-3 hover:before:w-full before:transition-[width] before:duration-300 
                            before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/" ? "before:w-full dark:bg-[rgba(88,175,223,.1)] bg-[rgb(230,247,255)] dark:text-[rgb(88,196,220)] text-[rgb(8,126,164)]" : "before:w-0 dark:hover:bg-[rgba(246,247,249,0.13)] hover:bg-[rgba(35,39,47,.05)]"}`} href={"/"}>
                            الرئيسية
                        </Link>
                    </li>
                    <li onClick={() => {
                        bar.current.classList.contains("active") ? toggleClass() : null
                    }}>
                        <Link tabIndex={1} className={`relative font-bold font-cairo text-lg 2xl:text-xl rounded-e-full rounded-s-full px-3 hover:before:w-full before:transition-[width] before:duration-300 
                            before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/our-services" ? "before:w-full dark:bg-[rgba(88,175,223,.1)] bg-[rgb(230,247,255)] dark:text-[rgb(88,196,220)] text-[rgb(8,126,164)]" : "before:w-0 dark:hover:bg-[rgba(246,247,249,0.13)] hover:bg-[rgba(35,39,47,.05)]"}`} href={"/our-services"}>
                            الخدمات
                        </Link>
                    </li>
                    <li onClick={() => {
                        bar.current.classList.contains("active") ? toggleClass() : null

                    }}>
                        <Link tabIndex={1} className={`relative font-bold font-cairo text-lg 2xl:text-xl rounded-e-full rounded-s-full px-3 hover:bg-[rgba(246,247,249,0.13)] hover:before:w-full before:transition-[width] before:duration-300 
                            before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/order" ? "before:w-full dark:bg-[rgba(88,175,223,.1)] bg-[rgb(230,247,255)] dark:text-[rgb(88,196,220)] text-[rgb(8,126,164)]" : "before:w-0 dark:hover:bg-[rgba(246,247,249,0.13)] hover:bg-[rgba(35,39,47,.05)]"}`} href={"/order"}>
                            طلب الخدمة
                        </Link>
                    </li>
                    <li onClick={() => {
                        bar.current.classList.contains("active") ? toggleClass() : null

                    }}>
                        <Link tabIndex={1} className={`relative font-bold font-cairo text-lg 2xl:text-xl rounded-e-full rounded-s-full px-3 hover:bg-[rgba(246,247,249,0.13)] hover:before:w-full before:transition-[width] before:duration-300 
                        before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:bg-Success ${current === "/about-us" ? "before:w-full dark:bg-[rgba(88,175,223,.1)] bg-[rgb(230,247,255)] dark:text-[rgb(88,196,220)] text-[rgb(8,126,164)]" : "before:w-0 dark:hover:bg-[rgba(246,247,249,0.13)] hover:bg-[rgba(35,39,47,.05)]"}`} href={"/about-us"}>
                            من نحن
                        </Link>
                    </li>
                </ul>
            </div>
            <div aria-hidden="true" ref={progressBar} className="h-1 absolute -bottom-1 opacity-0 transition-opacity duration-500 dark:bg-[#713f12] bg-[#facc15] w-full">
                <div className="h-full dark:bg-[#facc15] bg-[#713f12] rounded-e-full" style={{ width: "0px" }}></div>
            </div>
        </nav>
}