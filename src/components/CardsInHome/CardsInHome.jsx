"use client"
import image2 from "@/images/image10.jpg"
import image3 from "@/images/image11.jpg"
import image4 from "@/images/imageWorkers.jpg"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import Image from "next/image"
import AOS from 'aos';
import { useEffect } from "react"
export default function CardsInHome() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
        })
    }, [])
    return <div className="grid grid-cols-12 gap-5 mt-2">
        <div
            data-aos="zoom-in-up"
            className="col-span-12 sm:col-span-6 lg:col-span-4">
            <Card sx={{ maxWidth: 450, borderRadius: "0px", marginInline: "auto" }} className="h-full hover:shadow-xl hover:shadow-green-200 transition-[background,box-shadow] duration-300" >
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia height="140">
                        <figure className="w-full">
                            <Image decoding="async" loading="lazy" src={image2} alt="الجدة في العمل" />
                        </figure>
                    </CardMedia>
                    <CardContent className="dark:bg-[#111827] dark:text-white grow">
                        <Typography gutterBottom sx={{ textAlign: "center", fontFamily: "Cairo Variable , sans-serif", fontWeight: "700", fontSize: "21px" }} variant="h3" component="div">
                            الجدة في العمل
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: "Cairo Variable , sans-serif", lineHeight: "1.5", fontWeight: "700" }} className="text-center dark:text-[#9ca3af] sm:text-right text-[rgba(0,0,0,0.6)]">
                            نحن نؤمن بأن الجودة هي مفتاح السعادة، ونعمل على توفيرها لك في كل خطوة .
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        <div
            data-aos="zoom-in-up"
            className="col-span-12 sm:col-span-6 lg:col-span-4">
            <Card sx={{ maxWidth: 450, borderRadius: "0px", marginInline: "auto" }} className="h-full hover:shadow-xl hover:shadow-green-200 transition-[background,box-shadow] duration-300" >
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia height="140">
                        <figure className="w-full">
                            <Image decoding="async" loading="lazy" src={image3} alt="مستوى الخدمة" />
                        </figure>
                    </CardMedia>
                    <CardContent className="dark:bg-[#111827] dark:text-white grow">
                        <Typography gutterBottom sx={{ textAlign: "center", fontFamily: "Cairo Variable , sans-serif", fontWeight: "700", fontSize: "21px" }} variant="h3" component="div">
                            مستوى الخدمة
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: "Cairo Variable , sans-serif", lineHeight: "1.5", fontWeight: "700" }} className="text-center dark:text-[#9ca3af] sm:text-right text-[rgba(0,0,0,0.6)]">
                            نقدم لكم خدمة نقل الأثاث بأعلى معايير الجودة والسلامة، مع ضمان شامل لنقل العفش .
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        <div
            data-aos="zoom-in-up"
            className="col-span-12 sm:col-span-6 lg:col-span-4">
            <Card sx={{ maxWidth: 450, borderRadius: "0px", marginInline: "auto" }} className="h-full hover:shadow-xl hover:shadow-green-200 transition-[background,box-shadow] duration-300">
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia height="140">
                        <figure className="w-full">
                            <Image decoding="async" loading="lazy" src={image4} alt="فريقنا" />
                        </figure>
                    </CardMedia>
                    <CardContent className="dark:bg-[#111827] dark:text-white grow">
                        <Typography gutterBottom sx={{ textAlign: "center", fontFamily: "Cairo Variable , sans-serif", fontWeight: "700", fontSize: "21px" }} variant="h3" component="div">
                            فريقنا
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: "Cairo Variable , sans-serif", lineHeight: "1.5", fontWeight: "700" }} className="text-center dark:text-[#9ca3af] sm:text-right text-[rgba(0,0,0,0.6)]">
                            فريقنا يخضعون لبرامج تدريبية و فريقنا هو ضمان مستوى الخدمة المقدمة .
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    </div>
}