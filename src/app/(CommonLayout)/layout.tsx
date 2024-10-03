import Footer from "./components/footer";
import NavbarComponent from "./components/navbar";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
            <div className="bg-gradient-to-t from-[#d9afd9] to-[#884D80] min-h-screen text-white">
                <NavbarComponent />

                {children}

                <Footer />
            </div>
    );
}
