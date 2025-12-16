interface TradeCardProps {
  name: string;
}

export default function TradeCard({ name }: TradeCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
        <span className="text-blue-700 text-base sm:text-lg font-bold">{name.charAt(0)}</span>
      </div>
      <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">{name}</h3>
    </div>
  );
}

