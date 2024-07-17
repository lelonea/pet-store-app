import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
        <h1>Header</h1>
        <main>
            <Outlet />
        </main>
        <h3>Footer</h3>
        </div>
    );
}

export default Layout;