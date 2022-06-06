import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div class="container mx-auto px-20">
        <div>
          <h1 className="m-10 border-4 ">DUMMY Articles</h1>
          <div
            class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20"
            // style="cursor: auto;"
          >
            <div class="p-6 bg-gray-100 rounded-lg">
              <h3 class="text-lg font-bold mb-2">1. Product</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            <div class="p-6 bg-gray-100 rounded-lg">
              <div class="mb-5"></div>

              <h3 class="text-lg font-bold mb-2">2. Features</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            <div class="p-6 bg-gray-100 rounded-lg">
              <div class="mb-5"></div>

              <h3 class="text-lg font-bold mb-2">3. Card</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>

            <div class="p-6 bg-gray-100 rounded-lg">
              <div class="mb-5"></div>

              <h3 class="text-lg font-bold mb-2">4. Design</h3>

              <p class="text-sm leading-6 text-gray-600">
                Metus potenti velit sollicitudin porttitor magnis elit lacinia
                tempor varius, ut cras orci vitae parturient id nisi vulputate
                consectetur, primis venenatis cursus tristique malesuada viverra
                congue risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
