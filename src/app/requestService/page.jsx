import FormRequestService from "@/components/FormRequestService/FormRequestService"
export const metadata = {
    title: "طلب الخدمة",
    description: "أطلب خدمتك الان وبسهولة وسنتواصل معك خلال دقائق لتأكيد حجزك",
};
export default function requestService() {
    return <>
        <section className="pt-5 px-1 sm:px-5 lg:px-0 pb-5">
            <FormRequestService />
        </section>
    </>
}