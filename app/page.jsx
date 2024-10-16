import { headers } from "next/headers";

export default function Home() {
  return (
    <div className='bg-backgroundcolor'>
      <div>
        <header className='relative'>
          <img
            src="https://i.ibb.co/qmYqmqk/bg-cafe.jpg"
            className='w-full h-[400px] object-cover'
          />
        </header>
      </div>

      {/* Card */}
      <div className='absolute top-24 left-1/2 transform -translate-x-1/2 w-[80%] bg-cardcolor rounded-2xl shadow-lg p-10 z-10'>
        <div className='text-center mb-4 p-10'>
          <h1 className='text-5xl font-sans text-titlecolor p-2'>
            Our Collection
          </h1>
          <p className='text-descriptioncolor font-sans text-2xl'>
            Introducing our Coffee Collection, a selection of unique coffees
          </p>
          <p className='text-descriptioncolor font-sans text-2xl'>
            from different roast types and origins, expertly roasted in small
          </p>
          <p className='text-descriptioncolor font-sans text-2xl'>
            batches and shipped fresh weekly.
          </p>

          {/* buttons */}
          <div className='flex justify-center gap-2 mb-6 p-5'>
            <button className='bg-buttoncolor text-titlecolor py-2 px-3 rounded-lg text-xl font-sans'>
              All Products
            </button>
            <button className='bg-cardcolor px-2 py-2 rounded-lg text-xl font-sans text-titlecolor'>
              Available Now
            </button>
          </div>

          {/* Products Card */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-cardcolor rounded-lg shadow p-4">
              <img
                src="https://i.ibb.co/NFF6C0S/cappu.jpg"
                alt="Cappuccino"
                className="w-full h-[180px] object-cover mb-4 rounded-2xl"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-sans">Cappuccino</h3>
                <p className="text-sm bg-green-100 text-backgroundcolor font-sans px-2 py-1 rounded-lg">$5.20</p>
              </div>
              <div className="flex items-center">
                <span className="text-titlecolor">⭐</span>
                <p className="font-sans text-sm text-titlecolor ml-2">4.7 </p> <p className='text-descriptioncolor font-sans text-sm ml-2'>(65 votes)</p>
              </div>
            </div>

            <div className="bg-cardcolor rounded-lg shadow p-4">
              <img
                src="https://i.ibb.co/NFF6C0S/cappu.jpg"
                alt="House Coffee"
                className="w-full h-[180px] object-cover mb-4 rounded-2xl"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-sans">House Coffee</h3>
                <p className="text-sm bg-green-100 text-backgroundcolor font-sans px-2 py-1 rounded-lg">$3.50</p>
              </div>
              <div className="flex items-center">
                <span className="text-titlecolor">⭐</span>
                <p className="font-sans text-sm text-titlecolor ml-2">4.85 </p><p className='text-descriptioncolor font-sans text-sm ml-2'>(14 votes)</p>
              </div>
            </div>

            <div className="bg-cardcolor rounded-lg shadow p-4">
              <img
                src="https://i.ibb.co/NFF6C0S/cappu.jpg"
                alt="Espresso"
                className="w-full h-[180px] object-cover mb-4 rounded-2xl"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-3xl font-sans ">Espresso</h3>
                <p className="text-sm bg-green-100 text-backgroundcolor font-sans px-2 py-1 rounded-lg">$2.50</p>
              </div>
              <div className="flex items-center">
                <span className="text-titlecolor">⭐</span>
                <p className="font-sans text-sm text-titlecolor ml-2">4.9 </p> <p className='text-descriptioncolor font-sans text-sm ml-2'>(55 votes)</p>
              </div>
            </div>

            <div className="bg-cardcolor rounded-lg shadow p-4">
              <img
                src="https://i.ibb.co/NFF6C0S/cappu.jpg"
                alt="Coffee Latte"
                className="w-full h-[180px] object-cover mb-4 rounded-2xl"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-sans">Coffee Latte</h3>
                <p className="text-sm bg-green-100 text-backgroundcolor font-sans px-2 py-1 rounded-lg">$4.50</p>
              </div>
              <div className="flex items-center">
                <span className="text-titlecolor">⭐</span>
                <p className="font-sans text-sm text-titlecolor ml-2">5.0 </p> <p className='text-descriptioncolor font-sans text-sm ml-2'>(23 votes)</p>
              </div>
            </div>

            <div className="bg-cardcolor rounded-lg shadow p-4">
              <img
                src="https://i.ibb.co/NFF6C0S/cappu.jpg"
                alt="Chocolate Coffee"
                className="w-full h-[180px] object-cover mb-4 rounded-2xl"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-sans">Chocolate Coffee</h3>
                <p className="text-sm bg-green-100 text-backgroundcolor font-sans px-2 py-1 rounded-lg">$4.00</p>
              </div>
              <div className="flex items-center">
                <span className="text-titlecolor">⭐</span>
                <p className=" font-sans text-sm text-titlecolor ml-2">4.65 </p> <p className='text-descriptioncolor font-sans text-sm ml-2'>(122 votes)</p> 
                {/* <p className='text-soldout font-sans text-sm ml-2 '>Sold out</p> */}
              </div>
            </div>

            <div className="bg-cardcolor rounded-lg shadow p-4">
              <img
                src="https://i.ibb.co/NFF6C0S/cappu.jpg"
                alt="Valentine Special"
                className="w-full h-[180px] object-cover mb-4 rounded-2xl"
              />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-sans">Valentine Special</h3>
                <p className="text-sm bg-green-100 text-backgroundcolor font-sans px-2 py-1 rounded-lg">$5.50</p>
              </div>
              <div className="flex items-center">
                <span className="text-titlecolor">⭐</span>
                <p className="font-sans text-sm text-descriptioncolor ml-2">No ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
