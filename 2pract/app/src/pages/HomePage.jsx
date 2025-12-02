import { ProductCard } from "@/shared/ui/ProductCard";
import { useStore } from "@/shared/lib/store";

const hoodies = [
    { id: 1, name: "Худи oversize серое", price: 3290 },
    { id: 2, name: "Худи с капюшоном чёрное", price: 2990, discount: 2490 },
    { id: 3, name: "Худи тёплое флисовое", price: 3790 },
    { id: 4, name: "Худи с принтом 'Кот'", price: 3490 },
    { id: 5, name: "Худи на молнии", price: 4190, discount: 3590 },
    { id: 6, name: "Худи базовое белое", price: 2890 },
];

const shorts = [
    { id: 7, name: "Шорты спортивные синие", price: 1590, discount: 1380},
    { id: 8, name: "Шорты пляжные в полоску", price: 1390 },
    { id: 9, name: "Шорты cargo бежевые", price: 2190, discount: 1790 },
    { id: 10, name: "Шорты джинсовые", price: 2490 },
    { id: 11, name: "Шорты трикотажные", price: 1290 },
    { id: 12, name: "Шорты с карманами", price: 1890 },
];

export function HomePage() {
    const { searchQuery } = useStore();

    // Фильтрация
    const filteredHoodies = hoodies.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredShorts = shorts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const hasResults = filteredHoodies.length > 0 || filteredShorts.length > 0;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="px-4 py-8 sm:px-6 lg:px-8">

                {/* Заголовок — центрируем */}
                <div className="text-center mb-12 max-w-7xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                        Добро пожаловать в <span className="text-blue-600">Мой Магазин</span>
                    </h1>
                    <p className="text-lg text-gray-600">Лучшие худи и шорты по выгодным ценам</p>
                </div>

                {/* === ПОИСКОВЫЕ РЕЗУЛЬТАТЫ === */}
                {!hasResults && searchQuery && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">Ничего не найдено по запросу:</p>
                        <p className="text-2xl font-semibold text-gray-800 mt-2">"{searchQuery}"</p>
                    </div>
                )}

                {/* === Худи === */}
                {filteredHoodies.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 max-w-7xl mx-auto">
                            Худи {searchQuery && `(${filteredHoodies.length})`}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                            {filteredHoodies.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    discount={item.discount}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* === Шорты === */}
                {filteredShorts.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 max-w-7xl mx-auto">
                            Шорты {searchQuery && `(${filteredShorts.length})`}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                            {filteredShorts.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    discount={item.discount}
                                />
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
}