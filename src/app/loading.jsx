"use client"
export default function loading() {
    return <>
        <section aria-hidden={true}>
            <div className="fixed pt-20 top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-30 flex items-center justify-center">
                <span className="loaderBase text-white text-3xl font-cairo font-bold"></span>
            </div>
        </section>
    </>
}