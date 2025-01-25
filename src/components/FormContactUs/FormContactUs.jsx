'use client'
import { Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAlertWrong, useAlertSuccess } from "../../hooks/Alerts/Alerts";
import { useState } from "react";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
export default function FormContactUs() {
    const [countDown, setCountDown] = useState(300)
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    // Validation Schema
    const validationSchema = Yup.object({
        Full_Name: Yup.string().required("لا يمكن ترك الحقل فارغاً").min(10, "الحد الأدنى عشر حروف").max(40, "الحد الأقصى أربعين حرف"),
        Phone_Number: Yup.string().required("لا يمكن ترك الحقل فارغاً").matches(phoneRegex, "برجاء إدحال رقم هاتف صالح"),
        Address: Yup.string().required("لا يمكن ترك الحقل فارغاً").min(10, "الحد الأدنى عشر حروف").matches(/^.{0,300}$/, "الحد الأقصى هو 300 حرف"),
    })
    // Controlled inputs
    const Formik = useFormik({
        initialValues: {
            "Full_Name": "",
            "Phone_Number": "",
            "Address": "",
        },
        validationSchema
    })
    // count down textarea
    function lengthTextarea(e) {
        e.target.value.length >= 0 ? setCountDown(300 - e.target.value.length) : null
    }
    // To check the status of the form, if it is correct, The form will be sent
    function isValid() {
        if (Formik.isValid && Formik.dirty) {
            return "submit"
        } else {
            return "button"
        }
    }
    function formIsEmpty() {
        if (!Formik.isValid || !Formik.dirty) {
            useAlertWrong()
        } else {
            useAlertSuccess()
        }

    }
    return <fieldset>
        <form className="space-y-4 flex flex-col font-cairo font-bold" action="https://formsubmit.co/a3ca0f662ae9ef151e9823104a9cbdff" method="POST">
            <div className="relative">
            <p className="mb-1 mr-1 text-sm text-[#d7d7d7]">الأسم :</p>
                <input  placeholder="الأسم بالكامل" className={`bg-[#222831] text-[#f1f1f1] border-0 p-2  focus:outline-none  transition ease-in-out duration-150 w-full pl-9`} type="text" maxLength={40} name="Full_Name" value={Formik.values.Full_Name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.errors.Full_Name && Formik.touched.Full_Name ? <Alert variant="outlined" severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-sm font-bold font-cairo">{Formik.errors.Full_Name}</span></Alert> : null}
                <span className="absolute z-10 top-8 text-white left-2"><BadgeOutlinedIcon/></span>
            
            </div>
            <div className="relative">
                <p className="mb-1 mr-1 text-sm text-[#d7d7d7]">رقم الجوال :</p>
                <input placeholder="رقم الجوال" type="tel" className={`bg-[#222831] text-[#f1f1f1] border-0 p-2  focus:outline-none  transition ease-in-out duration-150 w-full pl-9`} maxLength={20} name="Phone_Number" value={Formik.values.Phone_Number} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                {Formik.errors.Phone_Number && Formik.touched.Phone_Number ? <Alert variant="outlined" severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-sm font-bold font-cairo">{Formik.errors.Phone_Number}</span></Alert> : null}
                <span className="absolute z-10 top-[33px] text-white left-[6px]"><LocalPhoneOutlinedIcon/></span>
            
            </div>
            <div>
                <div className="relative">
                <p className="mb-1 mr-1 text-sm text-[#d7d7d7]">العنوان :</p>
                    <textarea placeholder="العنوان بالتفصيل" className={`bg-[#222831] text-[#f1f1f1] border-0 p-2  focus:outline-none  transition ease-in-out duration-150 w-full resize-none  pb-10 pl-8`} name="Address" rows={8} maxLength={200} value={Formik.values.Address} onChange={(e) => {
                        Formik.handleChange(e)
                        lengthTextarea(e)
                    }} onBlur={Formik.handleBlur}></textarea>
                    <span className="absolute z-10 bottom-2 text-green-700 right-2">{countDown}</span>
                    <span className="absolute z-10 top-8 text-white left-2"><LocalOfferOutlinedIcon/></span>
                
                </div>
                {Formik.errors.Address && Formik.touched.Address ? <Alert variant="outlined" severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-sm font-bold font-cairo">{Formik.errors.Address}</span></Alert> : null}
            </div>
            <button onClick={() => {
                formIsEmpty()
            }} className="bg-green-700 hover:bg-green-800 transition-colors duration-300 ease-in-out text-white py-2 px-4 mt-4  font-cairo font-bold text-lg" type={isValid()}>أحجز الان</button>
        </form>
    </fieldset>

}