"use server"
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)
export const sendEmail = async ({content})=>{
    await resend.emails.send({
        from:"customer@tamez-furniture.site",
        to:"tamez.furniture.sa@gmail.com",
        subject:`طلب حجز`,
        html:`${content}`
    })
}