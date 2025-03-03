import FormRequestService from "@/components/FormRequestService/FormRequestService"
export const metadata = {
    title: "طلب خدمة - التميز لنقل العفش",
    description: "أطلب خدمتك الان وبسهولة وسيتواصل معك فريق التميز لنقل العفش خلال دقائق لتأكيد حجزك",
    keywords: ["نقل الأثاث بالرياض", "أرخص شركة لنقل العفش", "نقل الأثاث بالرياض", "نقل العفش"]
    , openGraph: {
        title: "طلب خدمة - التميز لنقل العفش",
        description: "أطلب خدمتك الان وبسهولة وسيتواصل معك فريق التميز لنقل العفش خلال دقائق لتأكيد حجزك",
        url: "https://www.tamez-furniture.site/order",
    }
};
export default function requestService() {
    return <>
        <section className="dark:bg-[#080c14] bg-[#ededed] bg- pt-5 px-1 sm:px-5 lg:px-0 pb-5">
            <header className=" font-cairo space-y-5 font-semibold dark:text-[#eee] text-black mb-5 px-5">
                <h1 className="after:block mx-auto sm:mx-0 after:w-[60%] after:h-[3px] after:bg-green-400 dark:after:bg-cyan-600 after:mx-[auto] sm:after:mx-[5px] after:mt-[10px] w-fit font-bold text-4xl font-Poppins mb-4">حجز الخدمة</h1>
                <p className="text-xl leading-8">التميز شريكك الأمثل في كل خطوة لنقل أثاثك
                    منذ عشر سنوات، نفخر في التميز بتقديم خدمات نقل أثاث عالية الجودة تلبي احتياجات عملائنا الكرام في الرياض. انطلاقاً من إيماننا الراسخ بأهمية توفير تجربة نقل سلسة ومريحة، نسعى جاهدين لتحقيق أعلى معايير الاحترافية والتميز في كل مرحلة من مراحل عملنا.</p>
            </header>
            <fieldset className="flex flex-col items-center justify-center font-cairo font-bold select-none">
                <div className="w-full max-w-[95%] lg:max-w-[60%] dark:bg-white dark:bg-opacity-20 bg-white rounded-lg shadow-lg p-2 sm:p-5">
                    <h2 className="text-2xl dark:text-white text-gray-800 mb-4 select-text">نموذج حجز</h2>
                    <FormRequestService />
                </div>
            </fieldset>
        </section>
    </>
}