import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Overwiew from "../components/Overwiew";
import Settings from "../components/Settings";
import Shots from "../components/Shots";

function Home() {
  return (
    <body className="bg-gray-100 h-screen antialiased">
      <div className="app">
        <nav className="bg-white shadow">
          <div className="md:max-w-5xl mx-auto flex justify-between items-center py-6">
            <a href="#" className="block uppercase flex item-center">
              <box-icon type="solid" name="rocket"></box-icon>
              <span className="inline-block text-sm font-bold ml-2">
                <span className="text-gray-700">Starter with nextjs</span>
              </span>
            </a>
            <div className="flex justify-between item-center">
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 px-4"
              >
                Trust
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Logout
              </a>
            </div>
          </div>
        </nav>
        <div className="py-6 md:max-w-5xl mx-auto flex mb-4 w-full">
          <div className="w-2/12 p-2">
            <Overwiew />
            <Shots />
            <Settings />
          </div>
          <Card>
            <Button>View All</Button>
          </Card>
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default Home;
