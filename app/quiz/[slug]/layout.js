import Header from "@/app/Components/Header";

export const metadata = {
    title: "CUI QUIZ App",
    description: "This app conatain quiz questions pn different topics",
};

export default function RootLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}
