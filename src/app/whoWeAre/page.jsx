import NumberToClipboard from "@/components/NumberToClipboard/NumberToClipboard";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import DiamondIcon from '@mui/icons-material/Diamond';
export const metadata = {
    title: "من نحن",
    description: "شركة التميز هي شركة متخصصة في خدمات نقل العفش بالرياض، نقدم حلولًا شاملة تشمل الفك والتركيب والتغليف وفك وتركيب مكيفات السبلت بأعلى جودة وبأيدٍ محترفة لضمان راحة عملائنا.",
};
export default function whoWeAre() {
    return <>
        <section className="pt-3 sm:pt-7 dark:bg-[#080c14] bg-[#ededed] md:pt-10 pb-5">
            <div className="container space-y-10">
                <div>
                    <header className="dark:text-white text-black">
                        <h2 className="text-3xl font-cairo font-extrabold text-center ">من نحن</h2>
                    </header>
                    <article className="mt-7 px-3 dark:text-slate-100 text-black">
                        <p className="text-base font-cairo  text-center">شركة التميز لنقل العفش من الشركات الرائدة في مجال نقل العفش بمدينة الرياض. بخبرة تمتد لأكثر من عشر عامًا، نقدم خدمات متكاملة تشمل نقل الأثاث، الفك والتركيب، التغليف الاحترافي، وفك وتركيب مكيفات السبلت. نحرص على تقديم خدماتنا بأعلى معايير الجودة والاحترافية لضمان راحة وسلامة عملائنا.</p>
                    </article>
                </div>
                <section className="grid grid-cols-12 gap-5 sm:gap-3 px-2 sm:px-0 ">
                    <div tabIndex={2} className="col-span-12 sm:col-span-6 justify-self-center flex flex-col items-center lg:col-span-4 dark:bg-[#1e293b] dark:shadow-green-200 rounded-md hover:shadow-lg group transition-shadow duration-200 p-10 text-white">
                        <i className="text-5xl dark:text-white text-gray-900 group-hover:text-[#0078ff] dark:group-hover:text-cyan-300 group-hover:scale-110 transition-[color,background-color,transform] duration-200"><CommentOutlinedIcon fontSize="inherit" /></i>
                        <header className="font-cairo text-xl font-bold mt-2 text-black dark:text-slate-100">
                            <h3>رسالتنا</h3>
                        </header>
                        <article className="font-cairo text-base mt-4">
                            <p className="text-[#181818] dark:text-slate-100 leading-7 text-center">توفير حلول نقل متكاملة تتسم بالأمان والاحترافية مع الالتزام بالمواعيد وتقديم أفضل الأسعار
                            </p>
                        </article>
                    </div>
                    <div tabIndex={2} className="col-span-12 sm:col-span-6 justify-self-center flex flex-col items-center lg:col-span-4 dark:bg-[#1e293b] dark:shadow-green-200 rounded-md hover:shadow-lg group transition-shadow duration-200 p-10">
                        <i className="fa-regular fa-pen-to-square text-5xl dark:text-white text-gray-900 group-hover:text-[#0078ff] dark:group-hover:text-cyan-300 group-hover:scale-110 transition-[color,background-color,transform] duration-200"></i>
                        <header className="font-cairo text-xl font-bold mt-2 text-black dark:text-slate-100">
                            <h3>رؤيتنا</h3>
                        </header>
                        <article className="font-cairo  text-base mt-4">
                            <p className="text-[#181818] dark:text-slate-100 leading-7 text-center text-base">أن نكون الخيار الأول للعملاء في مجال نقل العفش بالرياض من خلال تقديم خدمات موثوقة وآمنة
                            </p>
                        </article>

                    </div>
                    <div tabIndex={2} className="col-span-12 sm:col-span-6  justify-self-center flex flex-col items-center lg:col-span-4 dark:bg-[#1e293b] dark:shadow-green-200 rounded-md hover:shadow-lg group transition-shadow duration-200 p-10 w-full">
                        <i className="text-5xl dark:text-white text-gray-900 group-hover:text-[#0078ff] dark:group-hover:text-cyan-300 group-hover:scale-110 transition-[color,background-color,transform] duration-200"><DiamondIcon fontSize="inherit" /></i>
                        <header className="font-cairo text-xl font-bold mt-2 text-black dark:text-slate-100">
                            <h3>قيمنا</h3>
                        </header>
                        <article className="font-cairo text-base mt-4 space-y-4 w-full text-center">
                            <p className="text-[#181818] dark:text-slate-100 leading-7 text-center text-base">الجودة والإحترافية الأمان والموثوقية والإلتزام بالمواعيد التسليمية</p>
                        </article>
                    </div>

                </section>
                <div className="col-span-12 select-none flex justify-center">
                    <a tabIndex={2} href="#footer" className="px-4 py-2 rounded-md flex space-x-2 hover:bg-opacity-0 dark:hover:bg-opacity-0 bg-yellow-500 dark:bg-yellow-300 text-slate-100 dark:text-slate-900 border-2 dark:border-yellow-300 border-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200 font-cairo font-bold text-lg">معرفة المزيد</a>
                </div>
                <div className="p-10 text-white font-cairo font-bold">
                    <div className="dark:bg-white dark:bg-opacity-25 bg-slate-300 w-fit mx-auto flex gap-2 p-5 rounded-md">
                        
                        <p className="text-xs sm:text-xl dark:text-white text-black flex items-center">تواصل واتس اب</p>
                        <div className="select-none w-44 relative flex items-center justify-center rounded-sm shadow-sm">
                            <NumberToClipboard />
                        </div>

                    </div>
                </div>
            </div>


        </section>
    </>
}