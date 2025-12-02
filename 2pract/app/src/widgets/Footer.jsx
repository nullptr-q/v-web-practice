export function Footer() {
    return (
        <footer className="bg-white mt-20 py-10 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">

                    <div>
                        <h3 className="font-bold text-gray-900 mb-3">Мой Магазин</h3>
                        <p>Интернет-магазин одежды и аксессуаров</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-3">Информация</h3>
                        <p>Доставка по России</p>
                        <p>Оплата при получении</p>
                    </div>

                    <div className="text-right md:text-left">
                        <p className="font-medium text-gray-900">© 2025 Мой Магазин</p>
                        <p className="text-xs mt-1">Все права защищены</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}