import NumberToClipboard from "@/components/NumberToClipboard/NumberToClipboard";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
export const metadata = {
    title: "من نحن",
    description: "رؤيتنا أن نكون الخيار الأول للعملاء في مجال نقل العفش بالرياض من خلال تقديم خدمات موثوقة وآمنة ورسالتنا توفير حلول نقل متكاملة تتسم بالأمان والاحترافية مع الالتزام بالمواعيد وتقديم أفضل الأسعار وقيمنا نقدم خدمات ممتازة بقييم عالية ، الجودة هي رؤيتنا ، والأمان هو هدفنا ، والموثوقية هي قيمنا. نقدر الجودة والاحترافية ولدينا الأمان والموثوقية ونلتزم بالمواعيد التسليمية.",
};
export default function whoWeAre() {
     return <>
        <section className="pt-3 sm:pt-7 md:pt-10 pb-5">
        <div className="container space-y-10">
            <div>
                <header>
                    <h2 className="text-3xl font-cairo font-extrabold text-center">من نحن</h2>
                </header>
                <article className="mt-7 px-3">
                    <p className="text-base font-cairo  text-center">شركة التميز لنقل العفش من الشركات الرائدة في مجال نقل العفش بمدينة الرياض. بخبرة تمتد لأكثر من عشر عامًا، نقدم خدمات متكاملة تشمل نقل الأثاث، الفك والتركيب، التغليف الاحترافي، وفك وتركيب مكيفات السبلت. نحرص على تقديم خدماتنا بأعلى معايير الجودة والاحترافية لضمان راحة وسلامة عملائنا.</p>
                </article>
            </div>
            <div className="grid grid-cols-12 gap-5 sm:gap-3 px-2 sm:px-0 ">
                <div className="col-span-12 sm:col-span-6 justify-self-center flex flex-col items-center lg:col-span-4 hover:shadow-lg group transition-shadow duration-200 p-10">
                    <i className=" text-5xl group-hover:text-[#0078ff] transition-colors duration-300"><CommentOutlinedIcon fontSize="inherit" /></i>
                    <header className="font-cairo text-xl font-bold mt-2">
                        <h3 className="text-black">رسالتنا</h3>
                    </header>
                    <article className="font-cairo text-base mt-4">
                        <p className="text-[#181818] leading-7 text-center">توفير حلول نقل متكاملة تتسم بالأمان والاحترافية مع الالتزام بالمواعيد وتقديم أفضل الأسعار
                        </p>
                    </article>

                </div>
                <div className="col-span-12 sm:col-span-6 justify-self-center flex flex-col items-center lg:col-span-4 hover:shadow-lg group transition-shadow duration-200 p-10">
                    <i className="fa-regular fa-pen-to-square text-5xl text-gray-900 group-hover:text-[#0078ff] transition-colors duration-300"></i>
                    <header className="font-cairo text-xl font-bold mt-2">
                        <h3 className="text-black">رؤيتنا</h3>
                    </header>
                    <article className="font-cairo  text-base mt-4">
                        <p className="text-[#181818] leading-7 text-center text-base">أن نكون الخيار الأول للعملاء في مجال نقل العفش بالرياض من خلال تقديم خدمات موثوقة وآمنة
                        </p>
                    </article>

                </div>
                <div className="col-span-12 sm:col-span-6  justify-self-center flex flex-col items-center lg:col-span-4 hover:shadow-lg group transition-shadow duration-200 p-10 w-full">
                    <i className="text-5xl group-hover:text-[#0078ff] transition-colors duration-300"><DiamondIcon fontSize="inherit" /></i>
                    <header className="font-cairo text-xl font-bold mt-2">
                        <h3 className="text-black">قيمنا</h3>
                    </header>
                    <article className="font-cairo text-base mt-4 space-y-4 w-full text-center">
                        <p>الجودة والإحترافية الأمان والموثوقية والإلتزام بالمواعيد التسليمية</p>
                    </article>
                </div>

            </div>
            <div className="col-span-12 flex justify-center">
                <a href="#footer" className="bg-emerald-700 hover:bg-emerald-800 transition-colors duration-300 ease-in-out text-white py-2 px-4 mt-4  font-cairo font-bold text-lg">معرفة المزيد</a>
            </div>
            <div className="p-10 text-white font-cairo font-bold">
                <div className="bg-slate-300 w-fit mx-auto flex gap-2 p-5 rounded-md">
                <p className="text-xs sm:text-xl text-black flex items-center  ">تواصل واتس اب</p>
                <div className="w-44 relative flex items-center justify-center rounded-sm shadow-sm">
                    <NumberToClipboard/>
                </div>

                </div>
            </div>
        </div>


    </section>
    </>
}