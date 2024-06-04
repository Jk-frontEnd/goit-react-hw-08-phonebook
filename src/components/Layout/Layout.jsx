import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import { AuthNav } from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";

export const Layout = () => {
    const token = useSelector(state => state.auth.token);

    return (
        <>
            <header>
                <Navigation />
                {token ? <UserMenu /> : <AuthNav />}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}