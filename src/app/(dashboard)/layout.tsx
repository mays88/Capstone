import Header from "./_components/Header/Header";
import NewsScroll from "./_components/NewsScroll/NewsScroll";
import Sidebar from "./_components/Sidebar/Sidebar";
import styles from "./styles/main.module.css";

// const MainStyle = styled.div`
//     display: flex;
// `;

export default async function DashLayout({ children }: { children: any }) {
    return (
        <>
            <div className={styles.container}>
                <Sidebar />
                <div>
                    <Header />
                    <NewsScroll />
                    {children}
                </div>
            </div>
        </>
    );
}
