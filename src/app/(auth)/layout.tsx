type AuthProps = {
    children: React.ReactNode;
};
export default async function AuthLayout({ children }: AuthProps) {
    return <>{children}</>;
}
