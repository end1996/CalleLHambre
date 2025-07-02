import type { Product } from "../types";

interface CartProps {
  cart: Product[];
}

export function Cart({ cart }: CartProps) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const resumen = cart.map((item) => `- ${item.name}`).join("\n");

  const mensaje = encodeURIComponent(`Hola, quiero pedir:\n${resumen}\nTotal: S/${total.toFixed(2)}`);
  const whatsappURL = `https://wa.me/51984101254?text=${mensaje}`;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Resumen del Pedido</h2>
      <ul className="space-y-2 mb-4">
        {cart.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item.name} - S/{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Total: <span className="text-green-600">S/{total.toFixed(2)}</span>
      </p>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
      >
        Enviar por WhatsApp
      </a>
    </div>
  );
}
