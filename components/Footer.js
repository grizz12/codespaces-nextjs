export default () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://github.com/grizz12" className="hover:underline">
          RakaTrust
        </a>{" "}
        Hosted By Netlify
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/grizz12"
            className="mr-4 hover:underline md:mr-6 "
          >
            Support Me In Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
