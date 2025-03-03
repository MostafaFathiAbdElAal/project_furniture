'use client'
import FormContactUs from "@/components/FormContactUs/FormContactUs"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapGoogle from "../MapGoogle/MapGoogle";
export default function Footer() {
    const date = new Date()
    const currentYear = date.getFullYear() 
    return <footer id='footer' className="bg-[#080c14] text-[#eee]">
        <section className="sm:p-2 lg:p-5 mb-10 max-w-[1550px] mx-auto">
            <div className="h-1/2 rounded-sm">
                <div className="grid grid-cols-12 px-4 gap-5 p-5">
                    <div className="col-span-12 sm:col-span-12 md:col-span-6">
                        <header>
                            <h2 className="after:block mx-auto sm:mx-0 after:w-[40%] after:h-[3px] after:bg-green-300 dark:after:bg-cyan-600 after:mx-[auto] sm:after:mx-[5px] after:mt-[10px] w-fit font-bold text-4xl font-Poppins mb-4">أرسل لنا رسالة</h2>
                        </header>
                        <article className="mt-10">
                            <p className="text-lg font-cairo font-bold text-center sm:text-right">سيتم الإتصال خلال لحظات لتأكيد الحجز</p>
                        </article>
                        <div className="mt-[54px]">
                            <FormContactUs />
                        </div>
                    </div>
                    <div className="col-span-12 left sm:col-span-12 md:col-span-6 space-y-5 flex flex-col">
                        <header>
                            <h3 className="after:block mx-auto sm:mx-0 after:w-[40%]  after:h-[3px] after:bg-green-300 dark:after:bg-cyan-600 after:mx-[auto] sm:after:mx-[5px] after:mt-[10px] w-fit font-bold text-4xl font-Poppins mb-4">لا تنسى زيارتنا</h3>
                        </header>
                        <article className=" font-cairo space-y-5 font-semibold">
                            <p className="text-xl text-center sm:text-right">نوفر لك خدمة تغليف احترافية باستخدام أفضل المواد مثل الفقاعات الهوائية والكرتون المقوى لتوفير أقصى درجات الحماية لأثاثك أثناء النقل.
                            </p>
                            <p className="text-lg text-center sm:text-right">
                                ماذا تنتظر راسلنا الان عبر مواقع التواصل الإجتماعي او بتسجيل بيانتك هنا
                            </p>
                        </article>
                        <section className="flex flex-col gap-7 grow">
                        <ul className="font-Poppins text-xs sm:text-sm  font-bold">
                            <li className="w-fit">
                                <a aria-label="موقعنا على الخريطة" href="https://maps.app.goo.gl/QimrsfF8j62Qxf2U6" target="_blank" rel="noreferrer"><p className="flex items-center hover:underline"><span className="me-2 text-center text-green-200 dark:text-cyan-200 text-xl"><LocationOnOutlinedIcon fontSize="inherit" /></span>Riyadh-Saudi Arabia</p> </a>
                            </li>
                            <li className="w-fit">
                                <a aria-label="الاتصال بنا هاتفيا" href="tel:+966542683288" target="_blank" rel="noreferrer"><p className="flex items-center hover:underline tracking-tight"><span className="me-2 text-center text-green-200 dark:text-cyan-200 text-xl mb-1"><SmartphoneOutlinedIcon fontSize="inherit" /></span>966542683288+</p></a>
                            </li>
                            <li className="w-fit">
                                <a aria-label="التواصل معنا واتس اب" href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" rel="noreferrer"><p className="flex items-center hover:underline"><span className="me-2 text-center text-green-200 dark:text-cyan-200 text-xl mb-1"><WhatsAppIcon fontSize="inherit" /></span>966508137522+</p></a>
                            </li>
                            <li className="w-fit">
                                <a aria-label="إرسال رسالة لنا على البريد الإلكتروني" href="mailto:tamez.furniture.sa@gmail.com" target="_blank" rel="noreferrer"><p className="flex items-center hover:underline"><span className="me-2 text-center text-green-200 dark:text-cyan-200 text-xl "><EmailOutlinedIcon fontSize="inherit" /></span>tamez.furniture.sa@gmail.com</p></a>
                            </li>
                        </ul>
                        <MapGoogle />
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-2 px-2 sm:px-0 bg-[#f1f1f1] text-white dark:bg-black">
            <div className="w-full sm:w-3/4  mx-auto flex gap-1 sm:gap-0 justify-between items-center sm:justify-between sm:items-center max-w-[1550px] ">
                <ul className="flex gap-1 text-xl">
                    <li>
                        <a aria-label="تابع صفحتنا على الإنستغرام" href="https://www.instagram.com/ltmyzlnql?utm_source=qr&igsh=MTh1eHJ1dzZscXVjdQ==" target="_blank" rel="noreferrer" className="flex items-center justify-center w-7 h-7 group sm:w-9 sm:h-9 rounded-full bg-[#b9b8b8] hover:bg-[#9b9b9b] dark:bg-[#3838389f] dark:hover:bg-[#383838] hover:rotate-6 transition-[color,background,transform] duration-300">
                            <span className=" flex items-center group-hover:scale-110 transition-transform duration-300">
                                <InstagramIcon fontSize="inherit" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a aria-label="تواصل معنا على الواتس اب" href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" rel="noreferrer" className="flex items-center justify-center w-7 h-7 group sm:w-9 sm:h-9 rounded-full bg-[#b9b8b8] hover:bg-[#9b9b9b] dark:bg-[#3838389f] dark:hover:bg-[#383838] hover:rotate-6 transition-[color,background,transform] duration-300">
                            <span className=" flex items-center group-hover:scale-110 transition-transform duration-300">
                                <WhatsAppIcon fontSize="inherit" />
                            </span>
                        </a>
                    </li>
                </ul>
                <p className="text-[#9b9b9b] dark:text-white font-cairo font-bold text-[10px] sm:text-sm text-center">جميع الحقوق محفوظة لدى شركة التميز لنقل العفش {currentYear}©</p>
            </div>
        </section>
    </footer>
}