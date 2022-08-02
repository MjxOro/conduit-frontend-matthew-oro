function TextArea({ name, rows, placeholder }) {
  return (
    <textarea
      name={name}
      rows={rows}
      className="block p-2.5 w-full text-sm text-black bg-white rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none mb-4"
      placeholder={placeholder}
    />
  );
}
export default TextArea;
