import { Routes, Route } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { HomePage } from "@/pages/HomePage";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Другие страницы позже */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}