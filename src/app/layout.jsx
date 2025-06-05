import "@fortawesome/fontawesome-free/css/all.min.css"
import '@fontsource-variable/cairo/slnt.css';
import "@fontsource/poppins";
import 'aos/dist/aos.css';
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import CardWarning from "@/components/CardWarning/CardWarning";
export const viewport = {
  themeColor: '#2E088FE8',
}
export const metadata = {
  openGraph: {
    type: "website",
    locale: "ar_AR",
    siteName: 'التميز لنقل العفش بالرياض',
  },
}
export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar" className="dark">
      <body>
        {<Navbar />}
        <div className="backdrop-blur-md fixed flex items-center justify-center z-[99999999999999999999] top-0 bottom-0 left-0 right-0">

        <CardWarning/>
        </div>
        <main className="max-w-[1550px] mx-auto ">
          <a aria-label="راسلنا على الواتس اب" tabIndex={0} href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" rel="noreferrer" className="z-50 w-12 h-12 2xl:h-20 2xl:w-20 dark:bg-[#075E54] bg-[#25D366] bg-opacity-85 dark:bg-opacity-85 dark:hover:bg-opacity-100 hover:bg-opacity-100 transition-colors duration-300 fixed bottom-9 right-3 flex justify-center items-center rounded-full">
            <span className="text-white fa-brands fa-whatsapp text-3xl 2xl:text-5xl"></span>
          </a>
          <a aria-label="اتصل بنا" tabIndex={0} href="tel:+966543824038" rel="noreferrer" className="z-50 w-12 h-12 2xl:h-20 2xl:w-20 bg-black shadow-md group hover:rotate-12 text-white dark:bg-white dark:text-[#085cce] bg-opacity-90 dark:bg-opacity-90 dark:hover:bg-opacity-100 hover:bg-opacity-100 fixed bottom-9 left-3 flex transition-colors duration-300 justify-center items-center rounded-full">
            <span className="fa-solid fa-phone transition-transform duration-200 text-2xl 2xl:text-4xl group-hover:-translate-y-1"></span>
          </a>
          <section className="mt-20 overflow-hidden">
            {children}
          </section>
        </main>
        {<Footer />}
        <SpeedInsights />
        
        </body>
      
    </html>
  );
}