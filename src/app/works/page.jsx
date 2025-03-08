import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import imageService1 from "@/images/image1.jpg";
import imageService4 from "@/images/image3.jpg";
import imageService3 from "@/images/Safe packaging service.jpg";
import imageService2 from "@/images/images7.jpg";
export const metadata = {
    title: "خدمات - التميز لنقل العفش",
    description: "نقدم لك خدمة نقل عفش آمنة وسريعة مع شركة التمييز لنقل العفش داخل وخارج الرياض باستخدام شاحنات مجهزة بمعدات حديثة لضمان سلامة الأثاث.",
    openGraph: {
        title: "خدمات - التميز لنقل العفش",
        description: "نقدم لك خدمة نقل عفش آمنة وسريعة مع شركة التمييز لنقل العفش داخل وخارج الرياض باستخدام شاحنات مجهزة بمعدات حديثة لضمان سلامة الأثاث.",
        url: "https://www.tamez-furniture.site/works",
    },
};
export default function services() {
    return <>
        <section className="dark:bg-[#080c14] bg-[#ededed] pt-3 sm:pt-7 md:pt-10 pb-5 service">
            <header>
                <h1 className="dark:text-white text-black after:block after:w-[40%] after:mx-auto after:h-[3px] after:bg-[#0078ff] dark:after:bg-[#0d9488] after:mt-2 w-fit font-bold text-2xl sm:text-4xl xl:text-5xl text-center font-Poppins mb-4 mx-auto">
                    خدماتنا المتكاملة لنقل الأثاث في الرياض
                </h1>
            </header>
            <section className="grid grid-cols-12 gap-5 px-2 sm:px-5 justify-items-center" >
                <div className="dark:bg-[#1e293b] bg-white col-span-12 overflow-hidden sm:col-span-6 lg:col-span-4  group relative rounded-md border dark:border-slate-800 border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card h-full flex flex-col justify-between">
                        <div className="h-80 overflow-hidden">
                            <Image priority src={imageService1} className="w-full h-full group-hover:scale-110 transition-transform duration-700 object-cover" alt="نقل الأثاث" />
                            <h4 className="w-fit bg-gradient-to-r from-blue-400 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-500 dark:text-slate-50 absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2  text-xl rounded text-nowrap text-center">النقل</h4>
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5 ">
                                <h5 className="pt-5 dark:text-white text-black text-2xl lg:text-3xl text-center">
                                    خدمة نقل العفش
                                </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text dark:text-slate-200 text-black text-center sm:text-right font-semibold pb-2 text-lg font-cairo">
                                    نقدم لك خدمة نقل عفش آمنة وسريعة داخل وخارج الرياض باستخدام شاحنات مجهزة بمعدات حديثة لضمان سلامة الأثاث. فريقنا ملتزم بالحفاظ على أثاثك من أي ضرر أثناء التحميل والتنزيل.
                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold  grow flex flex-col justify-end">
                            <Accordion slotProps={{ heading: { component: 'div' } }} className="dark:bg-[#151a24] border-t border-[#d2d2d2] border-solid" >
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo dark:text-white" expandIcon={<div aria-label="زر سهم لإظهار العناصر الخفية"> <ExpandMoreOutlined className="dark:text-white" /></div>}
                                    aria-controls="panel1-content"
                                    id="panel1-header" >
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-lg dark:text-slate-200 text-black flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">شاحنات حديثة ومجهزة بالكامل.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">فريق عمل مدرب على النقل الآمن.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">الالتزام بالمواعيد المحددة.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
                <div className="dark:bg-[#1e293b] bg-white overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4  group relative rounded-md border dark:border-slate-800 border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card h-full flex flex-col">
                        <div className="h-80 overflow-hidden">
                            <Image loading={"lazy"} decoding="async" src={imageService2} className="w-full h-full group-hover:scale-110 transition-transform duration-700 object-cover" alt="فك وتركيب الأثاث" />
                            <h4 className=" w-fit bg-gradient-to-r from-blue-400 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-500 dark:text-slate-50 absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2  text-xl rounded text-nowrap text-center">فك وتركيب</h4>
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold self-start">
                            <header className="px-5 ">
                                <h5 className="pt-5 dark:text-white text-black text-2xl lg:text-3xl text-center">
                                    خدمة فك وتركيب الأثاث
                                </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text dark:text-slate-200 text-black text-center sm:text-right font-semibold pb-2 text-lg font-cairo ">
                                    فريقنا متخصص في فك وتركيب جميع أنواع الأثاث بما في ذلك الأثاث المنزلي والمكتبي بخبرة ودقة عالية، مع استخدام الأدوات المناسبة لضمان سلامة قطع الأثاث من الضرر وبكل إحترافية.
                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold grow flex flex-col justify-end">
                            <Accordion slotProps={{ heading: { component: 'div' } }} className="dark:bg-[#151a24] border-t border-[#d2d2d2] border-solid">
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo dark:text-white" expandIcon={<div aria-label="زر سهم لإظهار العناصر الخفية"> <ExpandMoreOutlined className="dark:text-white" /></div>}
                                    aria-controls="panel1-content"
                                    id="panel1-header" >
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-lg dark:text-slate-200 text-black flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500  col-span-1"></i> <span className="col-span-9">فنيون محترفون بأدق التفاصيل.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500  col-span-1"></i> <span className="col-span-9">أدوات ومعدات حديثة للفك والتركيب.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500  col-span-1"></i> <span className="col-span-9">ضمان عدم حدوث أي تلف أثناء التركيب.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#1e293b] overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4  group relative rounded-md border dark:border-slate-800 border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card h-full flex flex-col justify-between">
                        <div className="h-80 overflow-hidden">
                            <Image loading={"lazy"} decoding="async" src={imageService3} className="w-full h-full group-hover:scale-110 transition-transform duration-700 object-cover" alt="عمال تغليف" />
                            <h4 className="w-fit bg-gradient-to-r from-blue-400 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-500 dark:text-slate-50 absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2  text-xl rounded text-nowrap text-center">التغليق الاَمن</h4>
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5">
                                <h5 className="pt-5 dark:text-white text-black text-2xl lg:text-3xl text-center">
                                    خدمة التغليف الآمن
                                </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text dark:text-slate-200 text-black text-center sm:text-right font-semibold pb-2 text-lg font-cairo ">
                                    نوفر لك خدمة تغليف احترافية باستخدام أفضل المواد مثل الفقاعات الهوائية والكرتون المقوى لتوفير أقصى درجات الحماية لأثاثك أثناء النقل لتجنب الضرر للأثاث أثناء الطريق.
                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold grow flex flex-col justify-end">
                            <Accordion slotProps={{ heading: { component: 'div' } }} className="dark:bg-[#151a24] border-t border-[#d2d2d2] border-solid ">
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo dark:text-white" expandIcon={<div aria-label="زر سهم لإظهار العناصر الخفية"> <ExpandMoreOutlined className="dark:text-white" /></div>}
                                    aria-controls="panel1-content"
                                    id="panel1-header" >
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-lg flex flex-col gap-1 dark:text-slate-200 text-black">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">مواد تغليف عالية الجودة.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">تغليف خاص للأجهزة الكهربائية والزجاج.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">تصنيف وفرز الأثاث لضمان سلامته.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
                <div className="dark:bg-[#1e293b] bg-white col-span-12 sm:col-span-6 lg:col-span-4  relative group rounded-md border dark:border-slate-800 border-[#d2d2d2] shadow-sm overflow-hidden">
                    <div tabIndex={3} className="card h-full flex flex-col justify-between">
                        <div className="h-80 overflow-hidden">
                            <Image loading={"lazy"} decoding="async" src={imageService4} className="w-full h-full group-hover:scale-110 transition-transform duration-700 object-cover" alt="فك وتركيب المكيفات السبلت" />
                            <h4 className="w-fit bg-gradient-to-r from-blue-400 to-blue-500 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-sky-500 dark:text-slate-50 absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2 text-nowrap text-center text-xl rounded">فك وتركيب مكيفات السبلت</h4>
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5 ">
                                <h5 className="pt-5 dark:text-white text-black text-2xl lg:text-3xl text-center">
                                    خدمة فك وتركيب مكيفات السبلت                            </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text dark:text-slate-200 text-black text-center sm:text-right font-semibold pb-2 text-lg font-cairo ">
                                    نقدم خدمة فك وتركيب مكيفات سبليت بأعلى معايير الجودة والاحترافية. فريقنا المدرب والمؤهل يضمن لك تركيبًا سلسًا وآمنًا لمكيفك، مع مراعاة أدق التفاصيل لضمان أفضل أداء.
                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold grow flex flex-col justify-end">
                            <Accordion slotProps={{ heading: { component: 'div' } }} className="dark:bg-[#151a24] border-t border-[#d2d2d2] border-solid ">
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo dark:text-white" expandIcon={<div aria-label="زر سهم لإظهار العناصر الخفية"> <ExpandMoreOutlined className="dark:text-white" /></div>}
                                    aria-controls="panel1-content"
                                    id="panel1-header" >
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-lg dark:text-slate-200 flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">فنيون معتمدون ومتخصصون.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">استخدام أفضل الأدوات لتفادي أي ضرر.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">إعادة التشغيل وضمان الكفاءة بعد التركيب.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
            </section>
        </section>
    </>
}