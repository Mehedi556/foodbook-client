import Footer from "./_components/footer";
import NavbarComponent from "./_components/navbar";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
            <div className="bg-solid min-h-screen text-colorSolid">
                <NavbarComponent />

                {children}

                <Footer />
            </div>
    );
}
