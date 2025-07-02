import type { Product } from "../types";

interface MenuProps {
  menu: Product[];
  addToCart: (product: Product) => void;
}

export function Menu({ menu, addToCart }: MenuProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {menu.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">Categoría: {product.category}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-lg font-bold text-green-600">
              S/{product.price.toFixed(2)}
            </span>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
            >
              Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
