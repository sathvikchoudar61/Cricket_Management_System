const Card = ({ label, value, highlight }) => {
  return (
    <div
      className={`p-2 rounded-md border text-center transition-all
      ${
        highlight
          ? "bg-blue-50 border-blue-400"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <p className="text-[10px] text-gray-500 uppercase tracking-wide">
        {label}
      </p>

      <p
        className={`text-sm font-semibold ${
          highlight ? "text-blue-700" : "text-gray-800"
        }`}
      >
        {value ?? "-"}
      </p>
    </div>
  );
};

export default Card;