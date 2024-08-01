"use client";
// import Header from "./ui/landing/header-web";
// import Footer from "./ui/landing/footer-web";
import { ImageGallery } from "@/components/web/landing/image-gallery";
import { useRouter } from "next/navigation";
import HeaderBar from "@/components/web/landing/header-web";
import patagonia from "@/public/images/patagonia-1.webp";

const images = [
    "/images/patagonia-1.webp",
    "/images/patagonia-1.webp",
    "/images/patagonia-1.webp",
    "/images/patagonia-1.webp",
    "/images/patagonia-1.webp",
    "/images/patagonia-1.webp",
];

export default function Home() {
    const router = useRouter();
    return (
        <main>
            <HeaderBar />
            <div className="relative w-full h-[300px] sm:h-[600px]">
                <div className="w-full z-10 px-6 sm:px-40 text-center font-bold mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    <h1 className="text-3xl sm:text-6xl mb-4">
                        Conoce nuevos lugares y experiencias
                    </h1>
                    <h2 className="text-xl sm:text-2xl">
                        Sumergete en la vibrante cultura, los emocionantes
                        eventos y las exquisitas experiencias culinarias de
                        Barranco, Lima.
                    </h2>
                    <button
                        className="bg-[#4ec261] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => router.push("/explore")}
                    >
                        Explore
                    </button>
                </div>
                <ImageGallery />
            </div>

            <div className=" sm:h-[500px] bg-[#F7F4ED] px-6 sm:px-40 py-10 sm:py-20 flex flex-col sm:flex-row justify-center gap-4 ">
                <div className="flex-1 p-0 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="w-full h-full aspect-square bg-gray-200 overflow-hidden flex justify-center items-center rounded-lg "
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover bg-center"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex flex-col p-0 justify-center items-center">
                    <h2 className="text-3xl font-bold text-center mb-4">
                        Descubre aventuras que se adapten a tu espíritu
                    </h2>
                    <h3>
                        Ya sea que busques emociones fuertes o tranquilidad,
                        tenemos algo para ti.
                    </h3>
                </div>
            </div>

            <div className="p-6 sm:p-12 ">
                <section className="bg-[#f7f4ed] mb-3 flex flex-col sm:flex-row justify-center items-center px-4 sm:px-28 rounded-3xl">
                    <div className="flex justify-center items-center w-full mb-0 sm:w-1/2  sm:mb-0">
                        <img
                            // src="/images/xplora-app.webp"
                            src="/images/xplora-app2.png"
                            alt="Phone displaying reviews"
                            className="w-fit md:max-w-sm h-fit  mt-3 sm:mt-10"
                        />
                    </div>
                    <div className="hidden sm:flex flex-col justify-center items-start w-full sm:w-1/2 text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1D3041]">
                            Pick the right trail for your day
                        </h2>
                        <p className="text-lg sm:text-xl text-[#1D3041] mb-6">
                            All our trails are verified by experts and reviewed
                            by our global community of adventurers like you.
                        </p>
                        <button className="bg-[#1D3041] text-white py-2 px-6 rounded-full text-lg">
                            Sign up
                        </button>
                    </div>
                </section>
                <div className="sm:hidden flex-1 flex-col justify-center items-start w-full sm:w-1/2 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1D3041]">
                        Pick the right trail for your day
                    </h2>
                    <p className="text-lg sm:text-xl text-[#1D3041] mb-6">
                        All our trails are verified by experts and reviewed by
                        our global community of adventurers like you.
                    </p>
                    <button className="bg-[#1D3041] text-white py-2 px-6 rounded-full text-lg">
                        Sign up
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-6 sm:px-40 py-20 text-center">
                <h1 className="text-4xl font-bold mb-10">
                    Stay Updated with Barranco Vibes
                </h1>
                <div className="flex flex-col sm:flex-row justify-center gap-0">
                    <div className="sm:w-1/3 p-4">
                        <h2 className="text-5xl font-bold text-[#1D3041]">
                            150+
                        </h2>
                        <p className="text-xl font-semibold">Monthly Events</p>
                        <p className="text-gray-500">Never miss out</p>
                    </div>
                    <div className="sm:w-1/3 p-4">
                        <h2 className="text-5xl font-bold text-[#1D3041]">
                            10K+
                        </h2>
                        <p className="text-xl font-semibold">
                            Happy Subscribers
                        </p>
                        <p className="text-gray-500">Join the community</p>
                    </div>
                    <div className="sm:w-1/3 p-4">
                        <h2 className="text-5xl font-bold text-[#1D3041]">
                            50+
                        </h2>
                        <p className="text-xl font-semibold">Top Restaurants</p>
                        <p className="text-gray-500">Savor the best</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

// <main className="border-2 border-red-500 flex h-full overflow-y-auto min-h-screen flex-col items-center justify-between">
//             <Header />
//             <section className="flex flex-col boitems-center justify-center">
//                 <h1 className="text-4xl text-center">Bienvenido a Xplora</h1>
//                 <Image src="/logos/Xplora.svg" alt="Xplora" width={500} height={500} />
//             </section>
//             <div className="w-screen max-h-[539px] sm:h-[540px] xl:h-[600px]  overflow-hidden bg-center border-2 border-r-emerald-700">
//                 <Image
//                     src={patagonia}
//                     alt="Xplora"
//                     className="object-cover h-full bg-center w-full aspect-video "
//                 />
//             </div>
//             <Footer />
//         </main>
