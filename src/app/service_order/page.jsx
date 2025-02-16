import FormRequestService from "@/components/FormRequestService/FormRequestService"
export const metadata = {
    title: "طلب الخدمة",
    description: "أطلب خدمتك الان وبسهولة وسيتواصل معك فريق التميز لنقل العفش خلال دقائق لتأكيد حجزك",
    keywords: ["نقل الأثاث بالرياض", "أرخص شركة لنقل العفش", "نقل الأثاث بالرياض", "نقل العفش" ]
    , openGraph: {
        title: "طلب الخدمة",
        description: "أطلب خدمتك الان وبسهولة وسيتواصل معك فريق التميز لنقل العفش خلال دقائق لتأكيد حجزك",
        url: "https://www.tamez-furniture.site/service_order",
    }
};
export default function requestService() {
    return <>
        <section className="dark:bg-[#080c14] bg-[#ededed] bg- pt-5 px-1 sm:px-5 lg:px-0 pb-5">
            <fieldset className="flex flex-col items-center justify-center font-cairo font-bold select-none">
                <div className="w-full max-w-[95%] lg:max-w-[60%] dark:bg-white dark:bg-opacity-20 bg-white rounded-lg shadow-lg p-2 sm:p-5">
                    <header>
                        <h1 className="text-2xl dark:text-white text-gray-800 mb-4">نموذج حجز</h1>
                    </header>
                    <FormRequestService />
                </div>
            </fieldset>
        </section>
    </>
}