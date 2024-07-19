// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
import Footer from "../../components/movile-app/footer-app";
import Header from "../../components/movile-app/header-app";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-full ">
            <Header />
            <div className="flex-1 grow  overflow-y-auto">{children}</div>

            <Footer />
        </div>
    );
}
