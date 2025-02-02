import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css"
import '@fontsource-variable/cairo/slnt.css';
import "@fontsource/poppins";
import 'aos/dist/aos.css';
import "./globals.css";
export const viewport = {
  themeColor: '#2E088FE8',
}
export const metadata = {
  openGraph: {
    title: "يمكنك متابعة صفحة التميز لنقل العفش على الإنستغرام",
    description: "استكشف ما لدينا على صفحتنا فى الإسنتغرام وقدم لنا اقتراحات للقيام بها شكرا لكم",
    type: "website",
    local: "ar_SA",
    url: "https://project-furniture-omega.vercel.app/"
  },
}
export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar" className="dark">
      <head>
        <meta name="google-site-verification" content="tvthiMQUDUHEE_pj-AKgRE17Qazr3dN8LALyg2MHU4E" />
      </head>
      <body>
        {<Navbar />}
        <a aria-label="راسلنا على الواتس اب" tabIndex={0} href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" className="z-50 w-12 h-12 dark:bg-[#075E54] bg-[#25D366] bg-opacity-85 dark:bg-opacity-85 dark:hover:bg-opacity-100 hover:bg-opacity-100 transition-colors duration-300 fixed bottom-9 right-3 flex justify-center items-center rounded-full">
          <span className="text-white fa-brands fa-whatsapp text-3xl mb-[2px]"></span>
        </a>
        <a aria-label="اتصل بنا" tabIndex={0} href="tel:+966542683288" className="z-50 w-12 h-12 bg-black shadow-md group hover:rotate-12 text-white dark:bg-white dark:text-[#085cce] bg-opacity-90 dark:bg-opacity-90 dark:hover:bg-opacity-100 hover:bg-opacity-100 fixed bottom-9 left-3 flex transition-colors duration-300 justify-center items-center rounded-full">
          <span className="fa-solid fa-phone transition-transform duration-200 text-2xl group-hover:-translate-y-1"></span>
        </a>
        <section className="mt-[80px] overflow-hidden">
          {children}
        </section>
        {<Footer />}
        <SpeedInsights />
      </body>
    </html>
  );
}