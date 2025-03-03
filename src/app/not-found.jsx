import imgWarning from "@/images/exclamation-warning-round-red-icon.svg"
import Image from "next/image";
export const metadata = {
    title: "مسار خاطئ",
};
export default function notFound() {
    return <>
        <section
            className="dark:text-white text-black px-3 sm:px-0 h-screen font-cairo w-full flex flex-col justify-start pt-40 items-center dark:bg-[#080c14] bg-opacity-90">
            <Image className="max-w-40 select-none mb-4" src={imgWarning} alt="مسار خاطئ" />
            <header>
                <h2 className="text-3xl sm:text-4xl font-bold text-center">
                    خطأ 404  </h2>
            </header>
            <article>
                <p className="text-center font-semibold text-sm mt-2 ">
                    عفوا هذا المسار غير صحيح يمكنك اختيار مسار صحيح من أعلى
                </p>
            </article>
        </section>
    </>
}