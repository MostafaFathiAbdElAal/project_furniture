import FormRequestService from "@/components/FormRequestService/FormRequestService"
export const metadata = {
    title: "طلب الخدمة",
    description: "أطلب خدمتك الان وبسهولة وسيتواصل معك فريق التميز لنقل العفش خلال دقائق لتأكيد حجزك",
    keywords: ["نقل الأثاث بالرياض", "أرخص شركة لنقل العفش", "نقل الأثاث بالرياض", "نقل العفش"]
};
export default function requestService() {
    return <>
        <section className="dark:bg-[#080c14] bg-[#ededed] bg- pt-5 px-1 sm:px-5 lg:px-0 pb-5">
            <FormRequestService />
        </section>
    </>
}