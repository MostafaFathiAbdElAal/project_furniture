'use client'
import { Alert } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useAlertSuccess, useAlertWarning, useAlertWrong } from "@/hooks/Alerts/Alerts";
import { useCheckTime } from "@/hooks/checkTime/checkTime";
import { sendEmail } from "@/app/api/send/route";
export default function FormRequestService() {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    // Validation Schema
    const validationSchema = Yup.object({
        Full_Name: Yup.string().required("لا يمكن ترك الحقل فارغاً").min(10, "الحد الأدنى عشر حروف").max(40, "الحد الأقصى أربعين حرف"),
        Phone_Number: Yup.string().required("لا يمكن ترك الحقل فارغاً").matches(phoneRegex, "برجاء إدحال رقم هاتف صالح"),
        Address: Yup.string().required("لا يمكن ترك الحقل فارغاً").min(10, "الحد الأدنى عشر حروف").max(200, ""),
        Service_Type: Yup.string().required("لا يمكن ترك الحقل فارغاً"),
        Date_and_time: Yup.string().required("يلزم تحديد الوقت والتاريخ")
    })
    // send message to email
        function send(values) {
            // check 
            if (useCheckTime()) {
                useAlertSuccess()
                sendEmail({
                    content: `<table>
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
            <tr>
            <td>${values.Service_Type}</td>
            <td><strong>: الخدمة</strong></td>
            </tr>
            <tr>
            <td>${values.Date_and_time}</td>
            <td><strong>: موعد التوصيل</strong></td>
            </tr>
        </tbody>
        </table>`})
            } else {
                const timeValid = 5 - (Math.ceil(Date.now() / (1000 * 60)) - Math.ceil(JSON.parse(localStorage.getItem('storedTime')) / (1000 * 60)))
                useAlertWarning({ title: "عفوا مسموح لك بالإرسال مجددا بعد ",text:` متبقي من الوقت ${timeValid !== 0 ? timeValid : 30} ${timeValid !== 0 ? " دقائق " : " ثانية "}لإعادة الإرسال` })
            }
        }
    // Controlled inputs
    const Formik = useFormik({
        initialValues: {
            "Full_Name": "",
            "Phone_Number": "",
            "Address": "",
            "Service_Type": "نقل العفش",
            "Date_and_time": ""
        },
        validationSchema,
        onSubmit:send
    })
    function formIsEmpty() {
        if (!Formik.isValid || !Formik.dirty) {
            useAlertWrong()
        }
    }
    return <>
            <form data-nosnippet className="space-y-4 flex flex-col" onSubmit={Formik.handleSubmit}>
                <div>
                    <input  tabIndex={2} placeholder="الأسم بالكامل" className={`dark:bg-[#222831] bg-gray-100 text-gray-800 dark:text-white border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full`} type="text" name="Full_Name" value={Formik.values.Full_Name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.Full_Name && Formik.touched.Full_Name ? <Alert severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-lg font-bold">{Formik.errors.Full_Name}</span></Alert> : null}
                </div>
                <div>
                    <input tabIndex={2} placeholder="رقم الجوال" type="tel" className={`dark:bg-[#222831] bg-gray-100 text-gray-800 dark:text-white border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full`} name="Phone_Number" value={Formik.values.Phone_Number} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.Phone_Number && Formik.touched.Phone_Number ? <Alert severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-lg font-bold">{Formik.errors.Phone_Number}</span></Alert> : null}
                </div>
                <div>
                    <textarea tabIndex={2} placeholder="العنوان بالتفصيل" className={`dark:bg-[#222831] bg-gray-100 text-gray-800 dark:text-white border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full resize-none`} name="Address" rows={3} value={Formik.values.Address} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></textarea>
                    {Formik.errors.Address && Formik.touched.Address ? <Alert severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-lg font-bold">{Formik.errors.Address}</span></Alert> : null}
                </div>
                <div className="grid grid-cols-12 items-center">
                    <p className="col-span-12 sm:col-span-3 sm:translate-y-[40%] mb-1 sm:mb-5 text-lg dark:text-white text-black"> نوع الخدمة</p>
                    <select tabIndex={2} className={`dark:bg-[#222831] bg-gray-100 text-gray-800 dark:text-white border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full col-span-12 sm:col-span-9`} name="Service_Type" value={Formik.values.Service_Type} onChange={Formik.handleChange}>
                        <option value="نقل العفش">نقل العفش</option>
                        <option value="تغليف">تغليف</option>
                        <option value="فك وتركيب">فك وتركيب</option>
                        <option value="فك / تركيب مكيفات">فك / تركيب مكيفات</option>
                    </select>
                    
                </div>
                <div className="grid grid-cols-12 items-center">
                    <p className="col-span-12 sm:col-span-3 sm:translate-y-[40%] mb-1 sm:mb-5 text-lg dark:text-white text-black"> موعد التوصيل</p>
                    <div className="col-span-12 sm:col-span-9">
                    <input tabIndex={2} type="datetime-local" className={`dark:bg-[#222831] bg-gray-100 text-gray-800 dark:text-white border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full`} name="Date_and_time" value={Formik.values.Date_and_time} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.Date_and_time && Formik.touched.Date_and_time ? <Alert severity="error" style={{ padding: 0 }} className="flex items-center gap-1 mt-1" ><span className="text-lg font-bold">{Formik.errors.Date_and_time}</span></Alert> : null}
                    </div>
                </div>
                <button tabIndex={2} onClick={formIsEmpty} className="border-2 text-white py-2 px-4 rounded-md mt-4  font-cairo font-bold text-lg bg-green-500 border-green-500 dark:bg-cyan-500 dark:border-cyan-500 hover:bg-opacity-0 dark:hover:bg-opacity-0 hover:text-green-500 dark:hover:text-cyan-500 transition-colors duration-200">أحجز الان</button>
            </form>
        </>
}