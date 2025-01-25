import Image from "next/image";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import imageService1 from "@/images/image1.jpg";
import imageService4 from "@/images/image3.jpg";
import imageService3 from "@/images/images6.jpg";
import imageService2 from "@/images/images7.jpg";
export const metadata = {
    title: "الخدمات",
    description: "نقدم لك خدمة نقل عفش آمنة وسريعة داخل وخارج الرياض باستخدام شاحنات مجهزة بمعدات حديثة لضمان سلامة الأثاث. فريقنا ملتزم بالحفاظ على أثاثك من أي ضرر أثناء التحميل والتنزيل.",
};
export default function services() {
    return <>
        <section className="pt-3 sm:pt-7 md:pt-10 pb-5 service">
            <header>
                <h2 className="after:block after:w-[40%] after:mx-auto after:h-1 after:bg-[#0078ff] after:mt-1 w-fit font-bold text-2xl sm:text-4xl xl:text-5xl text-center font-Poppins mb-4 mx-auto">
                    خدماتنا المتكاملة لنقل الأثاث في الرياض
                </h2>
            </header>
            <div className="grid grid-cols-12 items-start gap-5 px-3 sm:px-5" >
                <div className="bg-white col-span-12 overflow-hidden sm:col-span-6 lg:col-span-4  relative rounded-md border border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card ">
                        <div className="h-80">
                            <Image src={imageService1} className="w-full h-full object-cover" alt="نقل الأثاث" />
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5 ">
                                <h4 className=" w-fit bg-[#0078ff] absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2  text-xl rounded text-nowrap text-center">النقل</h4>
                                <h5 className="pt-5 text-3xl text-center">
                                    خدمة نقل العفش
                                </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text text-center sm:text-right font-semibold pb-2 text-lg font-cairo  leading-8">
                                    نقدم لك خدمة نقل عفش آمنة وسريعة داخل وخارج الرياض باستخدام شاحنات مجهزة بمعدات حديثة لضمان سلامة الأثاث. فريقنا ملتزم بالحفاظ على أثاثك من أي ضرر أثناء التحميل والتنزيل.
                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold ">
                            <Accordion slotProps={{ heading: { component: 'h3' } }}>
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo" expandIcon={<ExpandMoreOutlined />}
                                    aria-controls="panel1-content"
                                    id="panel1-header" style={{ borderBlock: "1px solid #d2d2d2" }}>
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-xl flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">شاحنات حديثة ومجهزة بالكامل.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">فريق عمل مدرب على النقل الآمن.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">الالتزام بالمواعيد المحددة.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
                <div className="bg-white overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4  relative rounded-md border border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card">
                        <div className="h-80">
                            <Image src={imageService2} className="w-full h-full" alt="فك وتركيب الأثاث" />
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5 ">
                                <h4 className=" w-fit bg-[#0078ff] absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2  text-xl rounded text-nowrap text-center">فك وتركيب</h4>
                                <h5 className="pt-5 text-3xl text-center">
                                    خدمة فك وتركيب الأثاث
                                </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text text-center sm:text-right font-semibold pb-2 text-lg font-cairo ">
                                    فريق متخصص في فك وتركيب جميع أنواع الأثاث بما في ذلك الأثاث المنزلي والمكتبي بخبرة ودقة عالية، مع استخدام الأدوات المناسبة لضمان سلامة قطع الأثاث.

                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold ">
                            <Accordion slotProps={{ heading: { component: 'h3' } }}>
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo" expandIcon={<ExpandMoreOutlined />}
                                    aria-controls="panel1-content"
                                    id="panel1-header" style={{ borderBlock: "1px solid #d2d2d2" }}>
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-xl flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500  col-span-1"></i> <span className="col-span-9">فنيون محترفون بأدق التفاصيل.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500  col-span-1"></i> <span className="col-span-9">أدوات ومعدات حديثة للفك والتركيب.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500  col-span-1"></i> <span className="col-span-9">ضمان عدم حدوث أي تلف أثناء التركيب.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
                <div className="bg-white overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4  relative rounded-md border border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card">
                        <div className="h-80">

                            <Image src={imageService3} className="w-full h-full object-cover" alt="عمال تغليف" />
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5 ">
                                <h4 className=" w-fit bg-[#0078ff] absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2  text-xl rounded text-nowrap text-center">التغليق الاَمن</h4>
                                <h5 className="pt-5 text-3xl text-center">
                                    خدمة التغليف الآمن
                                </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text text-center sm:text-right font-semibold pb-2 text-lg font-cairo ">
                                    نوفر لك خدمة تغليف احترافية باستخدام أفضل المواد مثل الفقاعات الهوائية والكرتون المقوى لتوفير أقصى درجات الحماية لأثاثك أثناء النقل.
                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold ">
                            <Accordion slotProps={{ heading: { component: 'h3' } }}>
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo" expandIcon={<ExpandMoreOutlined />}
                                    aria-controls="panel1-content"
                                    id="panel1-header" style={{ borderBlock: "1px solid #d2d2d2" }}>
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-xl flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">مواد تغليف عالية الجودة.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">تغليف خاص للأجهزة الكهربائية والزجاج.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">تصنيف وفرز الأثاث لضمان سلامته.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
                <div className="bg-white col-span-12 sm:col-span-6 lg:col-span-4  relative rounded-md border border-[#d2d2d2] shadow-sm">
                    <div tabIndex={3} className="card">
                        <div className="overflow-hidden h-80">

                            <Image src={imageService4} className="w-full h-full object-cover" alt="فك وتركيب المكيفات السبلت" />
                        </div>
                        <div className="card-body min-h-52 font-Poppins font-bold">
                            <header className="px-5 ">
                                <h4 className=" w-fit bg-[#0078ff] absolute left-1/2 translate-x-[-50%] translate-y-[-60%] text-white px-7 py-2 text-nowrap text-center text-xl rounded">فك وتركيب مكيفات السبلت</h4>
                                <h5 className="pt-5 text-3xl text-center">
                                    خدمة فك وتركيب مكيفات السبلت                            </h5>
                            </header>
                            <article className="px-5 py-2">
                                <p className="card-text text-center sm:text-right font-semibold pb-2 text-lg font-cairo ">
                                    نوفر خدمة فك وتركيب مكيفات السبلت بجودة عالية من خلال فنيين معتمدين لضمان تشغيل المكيف بأعلى كفاءة بعد النقل.

                                </p>
                            </article>
                        </div>
                        <article className="font-Poppins font-bold ">
                            <Accordion slotProps={{ heading: { component: 'h3' } }}>
                                <AccordionSummary tabIndex={3} className="text-lg font-cairo" expandIcon={<ExpandMoreOutlined />}
                                    aria-controls="panel1-content"
                                    id="panel1-header" style={{ borderBlock: "1px solid #d2d2d2" }}>
                                    مميزات
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ol className="text-xl   flex flex-col gap-1">
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">فنيون معتمدون ومتخصصون.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">استخدام أفضل الأدوات لتفادي أي ضرر.</span></li>
                                        <li className="fa-solid fa-dot-circle-o grid grid-cols-10"><i className="fa-solid fa-arrow-alt-circle-left text-green-500 col-span-1"></i> <span className="col-span-9">إعادة التشغيل وضمان الكفاءة بعد التركيب.</span></li>
                                    </ol>
                                </AccordionDetails>
                            </Accordion>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    </>
}