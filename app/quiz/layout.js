import Navbar from "../Components/Navbar";

export const metadata = {
    title: "CUI QUIZ App",
    description: "This app conatain quiz questions pn different topics",
};

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar/>
            {children}

        </>

    );
}
