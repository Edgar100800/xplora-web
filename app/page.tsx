import Header from "./ui/landing/header-web";
import Footer from "./ui/landing/footer-web";
import { ImageGallery } from "@/components/landingPage/ImageGallery";
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
    return (
        <main className="App">
            <div className="relative w-full h-[300px] sm:h-[600px]">
                <h1 className="w-full z-10 text-3xl sm:text-6xl text-center font-bold mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    Conoce nuevos lugares y experiencias
                </h1>
                <ImageGallery />
            </div>

            <div className="h-[300px] sm:h-[500px] bg-[#F7F4ED] px-40 py-20 flex flex-row justify-center ">
                <div className="flex-1 p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="w-full h-full aspect-square bg-gray-200 overflow-hidden flex justify-center items-center rounded-lg"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
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

            <div className=" bg-[#edf1f7] px-40 py-20 flex flex-row justify-center ">
                <div className="flex-1 p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="w-full h-full aspect-square bg-gray-200 overflow-hidden flex justify-center items-center rounded-lg"
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
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
