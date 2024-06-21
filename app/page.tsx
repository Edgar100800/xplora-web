import Image from "next/image";
import Header from "./ui/landing/header-web";
import Footer from "./ui/landing/footer-web";
export default function Home() {
    return (
        <main className=" border-2 border-red-500 flex h-full overflow-y-auto min-h-screen flex-col items-center justify-between p-24">
            <Header />
            <section className="flex flex-col boitems-center justify-center">
                <h1 className="text-4xl text-center">Bienvenido a Xplora</h1>
                <Image src="/logos/Xplora.svg" alt="Xplora" width={500} height={500} />
            </section>
            <Footer />
        </main>

    );
}
