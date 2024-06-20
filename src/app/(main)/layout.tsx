import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";
import styles from "./styles/layoutstyles.module.css";
function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.homelayout}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
export default layout;
