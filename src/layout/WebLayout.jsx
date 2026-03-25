import { Helmet } from "react-helmet-async";
import HeaderComponent from "../components/shared/Header/HeaderComponent";
import FooterComponent from "../components/shared/Footer/FooterComponent";

const WebLayout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <header>
                <HeaderComponent />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <FooterComponent />
            </footer>
        </>
    )
}

export default WebLayout