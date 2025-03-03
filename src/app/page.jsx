import Image from "next/image"
import homeBackground from "@/images/image8.jpg"
import image1 from "@/images/image5.jpg"
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation"
import CardsInHome from "@/components/CardsInHome/CardsInHome";
export const metadata = {
  title: "الرئيسية - التميز لنقل العفش",
  description: "مرحبا بك في شركة التميز لنقل العفش ، وجهتك الموثوقة لخدمات نقل العفش داخل وخارج الرياض. نقدم حلولًا متكاملة تشمل النقل، الفك، التركيب، التغليف، وفك وتركيب مكيفات السبلت ونلتزم بتقديم أفضل جودة بأيدي فريق محترف.",
  keywords: ["نقل عفش", "نقل الأثاث", "أفضل شركة لنقل العفش", "نقل الأثاث بالرياض", "شركة مضمونة لنقل العفش"]
  , openGraph: {
    title: "الرئيسية - التميز لنقل العفش",
    description: "مرحبا بك في شركة التميز لنقل العفش ، وجهتك الموثوقة لخدمات نقل العفش داخل وخارج الرياض. نقدم حلولًا متكاملة تشمل النقل، الفك، التركيب، التغليف، وفك وتركيب مكيفات السبلت ونلتزم بتقديم أفضل جودة بأيدي فريق محترف.",
    url: "https://www.tamez-furniture.site",
    
  },
};
export default function Home() {
  return <>
    <section className="homePage relative  overflow-hidden font-cairo font-bold min-h-[50vh]">
      <div className="px-2 sm:px-10 grid grid-cols-12 sm:max-md:gap-5 z-10 overflow-hidden relative min-h-[50vh] py-10">
        <div className="col-span-12 md:col-span-7 h-full flex flex-col gap-5 justify-center self-center">
          <header className="gap-2 sm:gap-3 flex flex-col-reverse">
            <h1 className="text-2xl sm:text-3xl md:ps-2 text-center md:text-right font-extrabold text-[#fdfefe]">التميز لنقل العفش</h1>
            <h2 className="text-xl text-center md:text-right text-[#f2f9fe]">مرحبا بكم  في</h2>
          </header>
          <TypingAnimation />
        </div>
        <div className="col-span-12 md:col-span-5 self-center justify-self-center select-none">
          <div className="relative hidden sm:block">
            <figure className="max-h-72 max-w-72 relative rounded-lg overflow-hidden after:bg-black after:bg-opacity-20 after:absolute after:top-0 after:bottom-0 after:w-full">
              <Image src={image1} className="w-full h-full object-cover" alt="نقل الأثاث" priority />
            </figure>
            <article className="absolute p-3 top-10 -right-16 bg-[#fcfdff] dark:bg-[rgb(8,21,49)] dark:text-white rounded-md grid grid-cols-12 items-center gap-2">
              <span className="col-span-3 text-xl text-[#68ccea] dark:text-[rgb(150,226,249)]">
                10
              </span>
              <p className="col-span-9 text-sm ">سنوات<br /> من الخبرة</p>
            </article>
            <article className="absolute p-3 bottom-10 -left-16 bg-[#fcfdff] dark:bg-[rgb(8,21,49)] dark:text-white rounded-md grid grid-cols-12 items-center gap-2">
              <span className="col-span-3 text-xl text-[#e76777] dark:text-[rgb(251,145,159)]">
                10
              </span>
              <p className="col-span-9 text-sm ">سنوات<br /> من الإبداع</p>
            </article>
          </div>
        </div>
      </div>
      <figure className="absolute top-0 bottom-0 w-full flex flex-col justify-center select-none items-center after:bg-black after:bg-opacity-60 after:absolute after:top-0 after:bottom-0 after:w-full  ">
        <Image src={homeBackground} className="w-full h-full object-cover object-center " alt="أثاث رائع" priority />
      </figure>
    </section>
    <section className="dark:bg-[#080c14] bg-[#ededed] p-5  font-cairo font-bold text-lg sm:text-xl md:text-xl">
      <div className="shadow-2xl dark:bg-white dark:bg-opacity-5 overflow-hidden bg-white p-3 md:p-5 ">
        <header>
          <h2 className="after:block after:w-[40%] dark:text-white text-black after:mx-auto after:translate-x-3 after:h-[3px] after:bg-[#0078ff] dark:after:bg-[#0d9488] after:mt-2 w-fit font-bold text-2xl sm:text-4xl xl:text-5xl text-center font-Poppins mb-4 mx-auto">
            لماذا نحن <span className="dark:text-[#eab308] text-[#06b6d4] font-cairo">؟</span>
          </h2>
        </header>
        <section className="pt-5 px-10 flex flex-col items-center">
          <CardsInHome />
        </section>
      </div>
    </section>
  </>
}
