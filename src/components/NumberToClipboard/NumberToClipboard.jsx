'use client'
import { useAlertConfirm } from "@/hooks/Alerts/Alerts"
export default function NumberToClipboard() {
    function copyToClipboard(e) {
        useAlertConfirm({
            e,
            caseTrue: () => navigator.clipboard.writeText(e.target.previousElementSibling.innerText),
            titleMain: "هل انت متأكد؟",
            textMain: "اضغط نعم لحفظ الرقم فى الحافظة",
            titleSusscess: "عملية ناجحة",
            textSuccess: "تم الحفظ في الحافظة",
            titleWrong: "عملية مرفوضة",
            textWrong: "لم يتم الحفظ في الحافظة"
        })
    }
    return <>
        <p onClick={() => {
            location.href = "https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0"
        }} className="w-full cursor-pointer bg-white pl-1 py-1 h-full flex items-center justify-end text-left text-[#111010] text-sm" >966508137522+</p>
        <i tabIndex={2} role="button" onClick={(e) => {
            copyToClipboard(e)
        }} className="fa-regular fa-clipboard absolute right-0 w-8 flex items-center justify-center top-0 bottom-0 bg-green-500"></i>
    </>
}