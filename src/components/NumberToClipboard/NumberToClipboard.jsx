'use client'
import { useRef } from "react"
export default function NumberToClipboard() {
    const alertCopied = useRef(null)
    function copyToClipboard(e) {
        navigator.clipboard.writeText(e.target.previousElementSibling.innerText)
        alertCopied.current.classList.replace("hidden", "inline-block")
        e.target.classList.replace("fa-clipboard", "fa-clipboard-check")
        setTimeout(() => {
            alertCopied.current.classList.replace("inline-block", "hidden")
            e.target.classList.replace("fa-clipboard-check", "fa-clipboard")
        }, 5000)
    }
    return <>
        <a tabIndex={2} href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" className="w-full cursor-pointer bg-white pl-1 py-1 h-full flex items-center justify-end text-left text-[#111010] text-sm" >966508137522+</a>
        <i tabIndex={2} aria-label="زر نسخ الى الحافظة" role="button" onClick={(e) => {
            if (!e.target.classList.contains("fa-clipboard")) return;
            copyToClipboard(e)
        }} className="fa-solid fa-clipboard absolute right-0 w-8 flex items-center justify-center top-0 bottom-0 bg-green-500 hover:bg-green-600"></i>
        <span ref={alertCopied} className="absolute hidden w-fit -top-7 -right-5 rounded-md text-xs px-3 py-1 after:absolute after:-bottom-1 after:rotate-45 after:right-8 after:-z-10 z-10 after:bg-inherit after:w-2 after:h-2 dark:bg-[#f4f3f3] bg-[#f3f4f3] shadow-md text-[#474747]">تم النسخ</span>
    </>
}