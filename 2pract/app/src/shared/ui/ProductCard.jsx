import { ShoppingCart, Heart, Check, Percent } from "lucide-react";
import { useStore } from "@/shared/lib/store";

export function ProductCard({ id, name, price, discount }) {
    const { cart, liked, addToCart, removeFromCart, toggleLike } = useStore();

    const isAdded = cart.some((item) => item.id === id);
    const isLiked = liked.some((item) => item.id === id);
    const hasDiscount = discount !== undefined;

    const finalPrice = hasDiscount ? discount : price;

    const handleCartClick = (e) => {
        e.stopPropagation();
        if (isAdded) {
            removeFromCart(id);
        } else {
            addToCart({ id, name, price: finalPrice });
        }
    };

    const handleLikeClick = (e) => {
        e.stopPropagation();
        toggleLike({ id, name, price: finalPrice });
    };

    return (
        <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Иконка скидки */}
            {hasDiscount && (
                <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Percent size={14} />
                    СКИДКА
                </div>
            )}

            {/* Кнопка "Понравившееся" */}
            <button
                onClick={handleLikeClick}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition"
            >
                <Heart
                    size={20}
                    className={`transition ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                />
            </button>

            {/* Фото */}
            <div className="relative bg-gray-50 p-8 h-48 flex items-center justify-center overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-24 flex items-center justify-center">
                    <ShoppingCart size={36} className="text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Контент */}
            <div className="p-4">
                <h3 className="font-medium text-gray-900 line-clamp-2 h-12 leading-tight mb-2">
                    {name}
                </h3>

                {/* ЦЕНЫ */}
                <div className="mb-3">
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-blue-600">
                            {finalPrice.toLocaleString()} ₽
                        </p>
                        {hasDiscount && (
                            <p className="text-sm text-gray-500 line-through">
                                {price.toLocaleString()} ₽
                            </p>
                        )}
                    </div>
                </div>

                {/* Кнопка "В корзину" */}
                <button
                    onClick={handleCartClick}
                    className={`w-full py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 shadow-sm ${
                        isAdded
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                    }`}
                >
                    {isAdded ? (
                        <>
                            <Check size={18} />
                            Добавлено
                        </>
                    ) : (
                        <>
                            <ShoppingCart size={18} />
                            В корзину
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}