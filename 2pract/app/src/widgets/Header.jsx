import { Link } from "react-router-dom";
import { Home, Search, Heart, ShoppingCart } from "lucide-react";
import { useStore } from "@/shared/lib/store";

export function Header() {
    const { searchQuery, setSearchQuery, likedCount, cartCount } = useStore();

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Лево: Домой */}
                    <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
                        <Home size={28} strokeWidth={2.5} />
                        <span className="font-bold text-xl hidden sm:inline">Мой Магазин</span>
                    </Link>

                    {/* Центр: ПОИСК */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Поиск по товарам..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-500" size={22} />
                        </div>
                    </div>

                    {/* Право: Иконки */}
                    <div className="flex items-center gap-5">
                        <Link to="/liked" className="relative p-2 text-gray-700 hover:text-red-600 transition group">
                            <Heart size={26} strokeWidth={2} />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                {likedCount()}
              </span>
                        </Link>

                        <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition group">
                            <ShoppingCart size={26} strokeWidth={2} />
                            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount()}
              </span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}