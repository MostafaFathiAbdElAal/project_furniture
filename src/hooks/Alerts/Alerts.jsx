import Swal from "sweetalert2";
export const useAlertWrong = () => {
    Swal.fire({
        icon: "error",
        title: "حاول مرة أخرى",
        text: "هناك حقول لا تتبع القواعد",
    });
}
export const useAlertSuccess = () => {
    Swal.fire({
        icon: "success",
        title: "عملية تحقق ناجحة",
        text: "سيتم توجيهك لمتابعة الإرسال",
    });
}
export const useAlertConfirm = ({ e = null, titleMain, textMain, titleSusscess, textSuccess, titleWrong, textWrong, caseTrue = null, caseFalse = null }) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
        title: titleMain,
        text: textMain,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "نعم",
        cancelButtonText: "لا",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: titleSusscess,
                text: textSuccess,
                icon: "success"
            });
            caseTrue !== null ? caseTrue() : null
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: titleWrong,
                text: textWrong,
                icon: "error"
            });
            caseFalse !== null ? caseFalse() : null
        }
    });
}
