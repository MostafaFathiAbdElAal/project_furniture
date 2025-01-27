import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css"
import '@fontsource-variable/cairo/slnt.css';
import "@fontsource/poppins";
import "./globals.css";
export const viewport = {
  themeColor: '#2E088FE8',
}
const websiteUrl = ""
export const metadata = {
  openGraph: {
    title: "يمكنك متابعة صفحة التميز لنقل العفش على الإنستغرام",
    description: "استكشف ما لدينا على صفحتنا فى الإسنتغرام وقدم لنا اقتراحات للقيام بها شكرا لكم",
    type: "website",
    local: "ar_SA",
    url: websiteUrl // File env 
  }
}
export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <meta name="google-site-verification" content="tvthiMQUDUHEE_pj-AKgRE17Qazr3dN8LALyg2MHU4E" />
      <body>

        {<Navbar />}
        <a tabIndex={0} href="https://api.whatsapp.com/send/?phone=966508137522&text&app_absent=0" target="_blank" className="z-50 w-12 h-12 bg-[#075E54] bg-opacity-85 hover:bg-opacity-100 transition-colors duration-300 fixed bottom-5 right-5 flex justify-center items-center rounded-full">
          <span className="text-white fa-brands fa-whatsapp transition-transform duration-200 text-3xl"></span>
        </a>
        <a tabIndex={0} href="tel:+966542683288" className="z-50 w-12 h-12 bg-black bg-opacity-90 hover:bg-opacity-100 transition-colors duration-300 fixed bottom-5 left-5 flex justify-center items-center rounded-full">
          <span className="text-white fa-solid fa-phone transition-transform duration-200 text-xl"></span>
        </a>
        <section className="mt-[80px]">
          {children}
        </section>
        {<Footer />}
      </body>
    </html>
  );
}
