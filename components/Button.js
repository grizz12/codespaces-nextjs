export default (props) => {
  return (
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-5 rounded-lg focus:shadow-outline shadow">
      {props.children}
    </button>
  );
};
