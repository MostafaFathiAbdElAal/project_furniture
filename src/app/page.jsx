import Image from "next/image"
import homeBackground from "@/images/image8.jpg"
import image1 from "@/images/image5.jpg"
import image2 from "@/images/image10.jpg"
import image3 from "@/images/image11.jpg"
import image4 from "@/images/imageWorkers.jpg"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import TypingAnimation from "@/components/TypingAnimation/TypingAnimation"
export const metadata = {
  title: "الرئيسية",
  description: "مرحبًا بك في شركة التميز العفش ، وجهتك الموثوقة لخدمات نقل العفش داخل وخارج الرياض. نقدم حلولًا متكاملة تشمل النقل، الفك، التركيب، التغليف، وفك وتركيب مكيفات السبلت. نلتزم بتقديم أفضل جودة بأيدي فريق محترف وبأسعار تنافسية",
};
export default function Home() {
  return <>
    <section className="homePage relative  overflow-hidden font-cairo font-bold min-h-[50vh]">
      <div className="px-2 sm:px-10 grid grid-cols-12 sm:max-md:gap-5 z-10 overflow-hidden relative min-h-[50vh] py-10">
        <div className="col-span-12 md:col-span-7 h-full flex flex-col gap-5 justify-center self-center">
          <header className="space-y-2 sm:space-y-3">
            <h2 className="text-xl text-center md:text-right text-[#f2f9fe]">مرحبا بكم  في</h2>
            <h3 className="text-2xl sm:text-3xl md:ps-2 text-center md:text-right font-extrabold text-[#fdfefe]">التميز لنقل العفش</h3>
          </header>
          <TypingAnimation />
        </div>

        <div className="col-span-12 md:col-span-5 self-center justify-self-center select-none">
          <div className="relative hidden sm:block">

            <div className="max-h-72 max-w-72 relative rounded-lg overflow-hidden after:bg-black after:bg-opacity-20 after:absolute after:top-0 after:bottom-0 after:w-full">
              <Image src={image1} className="w-full h-full object-cover" alt="نقل الأثاث" loading="lazy" />

            </div>
            <div className="absolute p-3 top-10 -right-16 bg-[#fcfdff] rounded-md grid grid-cols-12 items-center gap-2">
              <span className="col-span-3 text-xl text-[#68ccea]">
                10
              </span>
              <p className="col-span-9 text-sm ">سنوات<br /> من الخبرة</p>

            </div>
            <div className="absolute p-3 bottom-10 -left-16 bg-[#fcfdff] rounded-md grid grid-cols-12 items-center gap-2">
              <span className="col-span-3 text-xl text-[#e76777]">
                10
              </span>
              <p className="col-span-9 text-sm ">سنوات<br /> من الإبداع</p>

            </div>
          </div>

        </div>
      </div>
      <div className="absolute top-0 bottom-0 w-full flex flex-col justify-center select-none items-center after:bg-black after:bg-opacity-60 after:absolute after:top-0 after:bottom-0 after:w-full  ">
        <Image src={homeBackground} className="w-full h-full object-cover object-center " loading="lazy" alt="أثاث رائع" />
      </div>
    </section>
    <section className="bg-[#ededed] rounded-md p-5 font-cairo font-bold text-lg sm:text-xl md:text-xl">
      <div className="shadow-2xl p-3 md:p-5 ">
        <h2 className="after:block after:w-[40%] after:mx-auto after:translate-x-3 after:h-1 after:bg-[#0078ff] after:mt-1 w-fit font-bold text-2xl sm:text-4xl xl:text-5xl text-center font-Poppins mb-4 mx-auto">
          لماذا نحن ؟
        </h2>


        <div className="pt-5 px-10">
          <div className="grid grid-cols-12  justify-center  gap-5 mt-2">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
              <Card sx={{ maxWidth: 360 }}>
                <CardActionArea>
                  <CardMedia height="140">
                    <div className="w-full">
                      <Image src={image2} alt="الجدة في العمل" />
                    </div>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom sx={{ textAlign: "center", fontFamily: "Cairo Variable , sans-serif", fontWeight: "700", fontSize: "21px" }} variant="h3" component="div">
                      الجدة في العمل
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "Cairo Variable , sans-serif", lineHeight: "1.5", fontWeight: "700" }} className="text-center sm:text-right">
                      نحن نؤمن بأن الجودة هي مفتاح السعادة، ونعمل على توفيرها لك في كل خطوة.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
              <Card sx={{ maxWidth: 360 }} >
                <CardActionArea>
                  <CardMedia height="140">
                    <div className="w-full">
                      <Image src={image3} alt="مستوى الخدمة" />
                    </div>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom sx={{ textAlign: "center", fontFamily: "Cairo Variable , sans-serif", fontWeight: "700", fontSize: "21px" }} variant="h3" component="div">
                      مستوى الخدمة
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "Cairo Variable , sans-serif", lineHeight: "1.5", fontWeight: "700" }} className="text-center sm:text-right">
                      نقدم لكم خدمة نقل الأثاث بأعلى معايير الجودة والسلامة، مع ضمان شامل.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-center">
              <Card sx={{ maxWidth: 360 }}>
                <CardActionArea>
                  <CardMedia height="140">
                    <div className="w-full">
                      <Image src={image4} alt="فريقنا" />
                    </div>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom sx={{ textAlign: "center", fontFamily: "Cairo Variable , sans-serif", fontWeight: "700", fontSize: "21px" }} variant="h3" component="div">
                      فريقنا
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "Cairo Variable , sans-serif", lineHeight: "1.5", fontWeight: "700" }} className="text-center sm:text-right">
                      فريقنا يخضعون لبرامج تدريبية و فريقنا هو ضمان مستوى الخدمة المقدمة .
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
