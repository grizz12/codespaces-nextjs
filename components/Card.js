export default (props) => {
  return (
    <div className="flex-1 p-3">
      <div className="max-w-sm w-full lg:max-w-full shadow px-6 py-6 bg-white rounded-lg mb-6">
        <div className="flex justify-between mb-4">
          <div className="mb-2 text-left">
            <h2 className="mb-2 text-gray-900">Github Profile</h2>
            <p className="uppercase font-bold text-gray-600 text-xs">1 Shots</p>
          </div>
          <div className="text-right">{props.children}</div>
        </div>
        <div className="">
          <p className="flex item-center mb-2 text-xs">
            <box-icon
              size="xs"
              name="time-five"
              flip="horizontal"
              color="rgba(0,0,0,0.54)"
              type="solid"
            ></box-icon>
            <span className="px-2">Every day at 10:30pm</span>
          </p>
          <p className="flex item-center mb-2 text-xs">
            <box-icon
              size="xs"
              name="right-arrow-circle"
              type="solid"
              color="rgba(0,0,0,0.54)"
            ></box-icon>
            <span className="px-2">Next shot in 9 hours</span>
          </p>
          <p className="flex item-center mb-2 text-xs">
            <box-icon
              size="xs"
              name="chalkboard"
              type="solid"
              color="rgba(0,0,0,0.54)"
            ></box-icon>
            <span className="px-2">Screen 1024x768 (full page)</span>
          </p>

          <p className="flex item-center mb-2 text-xs">
            <box-icon
              size="xs"
              name="link"
              type="solid"
              color="rgba(0,0,0,0.54)"
            ></box-icon>
            <span className="px-2">https://github.com/xyz</span>
          </p>
        </div>
      </div>

      <div className="max-w-sm w-full lg:max-w-full shadow rounded-lg bg-white p-6">
        <div className="flex justify-between mb-4">
          <div className="text-left">
            <h2 className="mb-2 text-gray-900">Latest shot</h2>
            <p className="font-bold text-gray-600">14 Minutes ago</p>
          </div>
          <div className="text-right">{props.children}</div>
        </div>
        <div className="flex">
          <div className="w-2/3">
            <img
              src="https://picsum.photos/600/300"
              alt=""
              className="object-cover h-60 rounded-lg"
            />
          </div>
          <div className="w-1/3">
            <div className="px-4 mb-4">
              <h2 className="text-gray-700">Github profile</h2>
              <p className="font-bold text-gray-500 uppercase text-xs">
                Nov 5th 2020 at 9:00pm
              </p>
            </div>
            <div className="lg:flex-col  px-5">
              <p className="flex item-center mb-2 text-xs">
                <box-icon
                  size="xs"
                  name="time-five"
                  flip="horizontal"
                  color="rgba(0,0,0,0.54)"
                  type="solid"
                ></box-icon>
                <span className="px-2">Every day at 9:00pm</span>
              </p>
              <p className="flex item-center mb-2 text-xs">
                <box-icon
                  size="xs"
                  name="right-arrow-circle"
                  type="solid"
                  color="rgba(0,0,0,0.54)"
                ></box-icon>
                <span className="px-2">Next shot in 9 hours</span>
              </p>
              <p className="flex item-center mb-2 text-xs">
                <box-icon
                  size="xs"
                  name="link"
                  type="solid"
                  color="rgba(0,0,0,0.54)"
                ></box-icon>
                <span className="px-2">https://github.com/grizz12</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
