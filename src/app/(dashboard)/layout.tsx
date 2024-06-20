import Header from "./_components/Header/Header";
import NewsScroll from "./_components/NewsScroll/NewsScroll";
import Sidebar from "./_components/Sidebar/Sidebar";
import styles from "./styles/main.module.css";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
// const MainStyle = styled.div`
//     display: flex;
// `;

export default async function DashLayout({ children }: { children: any }) {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/auth");
    }
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
