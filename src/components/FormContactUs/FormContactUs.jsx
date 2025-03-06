'use client'
import { Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlertWrong, useAlertSuccess, useAlertWarning } from "../../hooks/Alerts/Alerts";
import { useState } from "react";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { sendEmail } from "@/app/api/send/route";
import { useCheckTime } from "@/hooks/checkTime/checkTime";
export default function FormContactUs() {
    const [countDown, setCountDown] = useState(300)
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    // Validation Schema
    const validationSchema = Yup.object({
        Full_Name: Yup.string().required("لا يمكن ترك الحقل فارغاً").min(10, "الحد الأدنى عشر حروف").max(40, "الحد الأقصى أربعين حرف"),
        Phone_Number: Yup.string().required("لا يمكن ترك الحقل فارغاً").matches(phoneRegex, "برجاء إدحال رقم هاتف صالح"),
        Address: Yup.string().required("لا يمكن ترك الحقل فارغاً").min(10, "الحد الأدنى عشر حروف").matches(/^.{0,300}$/, "الحد الأقصى هو 300 حرف"),
    })
    // send message to email
    function send(values) {
        // check
        if (useCheckTime()) {
            useAlertSuccess()
            sendEmail({
                content: `<table style="margin-left:auto;">
    <tbody>
        <tr>
        <td>${values.Full_Name}</td>
        <td><strong>: الأسم كامل</strong></td>
        </tr>
        <tr>
        <td>${values.Phone_Number}</td>
        <td><strong>: رقم الهاتف</strong></td>
        </tr>
        <tr>
        <td>${values.Address}</td>
        <td><strong>: العنوان</strong></td>
        </tr>
    </tbody>
    </table>`})
        } else {
            const timeValid = 5 - (Math.round(Date.now() / (1000 * 60)) - Math.round(JSON.parse(localStorage.getItem('submitTime')) / (1000 * 60)))
            useAlertWarning({ title: "عفوا مسموح لك بالإرسال مجددا بعد ", text: ` متبقي من الوقت ${timeValid !== 0 ? timeValid : 30} ${timeValid !== 0 ? " دقائق " : " ثانية "}لإعادة الإرسال` })
        }
    }
    // Controlled inputs
    const Formik = useFormik({
        initialValues: {
            "Full_Name": "",
            "Phone_Number": "",
            "Address": "",
        },
        validationSchema, onSubmit: send
    })
    // count down textarea
    function lengthTextarea(e) {
        e.target.value.length >= 0 ? setCountDown(300 - e.target.value.length) : null
    }
    function formIsEmpty() {
        if (!Formik.isValid || !Formik.dirty) {
            useAlertWrong()
        }
    }
    return <fieldset className="font-cairo font-bold select-none">
        <form className="space-y-4 flex flex-col" onSubmit={Formik.handleSubmit}>
            <div className="relative">
                <p className="mb-1 mr-1 text-sm text-[#d7d7d7]">الأسم :</p>
                <input placeholder="الأسم بالكامل" className={`bg-[#222831] text-[#f1f1f1] border-0 p-2  focus:outline-none  transition ease-in-out duration-150 w-full pl-9`} type="text" maxLength={40} name="Full_Name" value={Formik.values.Full_Name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.errors.Full_Name && Formik.touched.Full_Name ? <Alert variant="outlined" severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-sm font-bold font-cairo">{Formik.errors.Full_Name}</span></Alert> : null}
                <span className="absolute z-10 top-8 text-white left-2"><BadgeOutlinedIcon /></span>
            </div>
            <div className="relative">
                <p className="mb-1 mr-1 text-sm text-[#d7d7d7]">رقم الجوال :</p>
                <input placeholder="رقم الجوال" type="tel" className={`bg-[#222831] text-[#f1f1f1] border-0 p-2  focus:outline-none  transition ease-in-out duration-150 w-full pl-9`} maxLength={20} name="Phone_Number" value={Formik.values.Phone_Number} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.errors.Phone_Number && Formik.touched.Phone_Number ? <Alert variant="outlined" severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-sm font-bold font-cairo">{Formik.errors.Phone_Number}</span></Alert> : null}
                <span className="absolute z-10 top-[33px] text-white left-[6px]"><LocalPhoneOutlinedIcon /></span>
            </div>
            <div> 
                <div className="relative">
                    <p className="mb-1 mr-1 text-sm text-[#d7d7d7]">العنوان :</p>
                    <textarea placeholder="العنوان بالتفصيل" className={`bg-[#222831] text-[#f1f1f1] border-0 p-2  focus:outline-none  transition ease-in-out duration-150 w-full resize-none  pb-10 pl-8`} name="Address" rows={8} maxLength={200} value={Formik.values.Address} onChange={(e) => {
                        Formik.handleChange(e)
                        lengthTextarea(e)
                    }} onBlur={Formik.handleBlur}></textarea>
                    <span className="absolute z-10 bottom-2 dark:text-cyan-500 text-green-500 right-2">{countDown}</span>
                    <span className="absolute z-10 top-8 text-white left-2"><LocalOfferOutlinedIcon /></span>
                </div>
                {Formik.errors.Address && Formik.touched.Address ? <Alert variant="outlined" severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-sm font-bold font-cairo">{Formik.errors.Address}</span></Alert> : null}
            </div>
            <button onClick={formIsEmpty} className="border-2 text-white py-2 px-4 rounded-md mt-4  font-cairo font-bold text-lg bg-green-500 border-green-500 dark:bg-cyan-500 dark:border-cyan-500 hover:bg-opacity-0 dark:hover:bg-opacity-0 hover:text-green-500 dark:hover:text-cyan-500 transition-colors duration-200">أحجز الان</button>
        </form>
    </fieldset>
}