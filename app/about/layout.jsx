import Footer from "@/components/Footer";

export const metadata = {
  title: "Datachunk Media Designs | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
