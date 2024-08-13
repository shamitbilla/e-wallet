interface InputBoxProps {
  title: string;
  content: string;
}

export default ({ title, content }: InputBoxProps) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </label>
      <input
        type="text"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5"
        placeholder={content}
      />
    </div>
  );
};