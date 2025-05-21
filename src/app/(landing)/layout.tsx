import FooterHyper from "@/components/layout/footer-hyper";
import { Navbar } from "@/components/layout/navbar";

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <FooterHyper />
        </div>
    );
}