import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Product() {
  const [addItem, setAddItem] = useState("");
  const [addToTodo, setAddToTodo] = useState([]);

  const toDoAddItems = () => {
    addToTodo.push(addItem);
    setAddToTodo([...addToTodo]);
  };

  return (
    <>
      <Navbar />
      <Layout>
        <h1 class="text-3xl font-bold text-center py-4 ">Our Products</h1>

        {/* <input
          onChange={(event) => setAddItem(event.target.value)}
          type="text"
          placeholder="Add Item"
        />
        <button onClick={toDoAddItems}>Add To Todo</button>

        <table>
          <tbody>
            {addToTodo.length !== 0 ? (
              addToTodo.map((element, index) => {
                return (
                  <tr>
                    <td>{element}</td>
                    <td>
                      <button>Remove</button>{" "}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table> */}

        <div class="">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                  Machined Mechanical Pencil
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
            </div>
          </div>
        </div>

        <div class="">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                  Machined Mechanical Pencil
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
              </a>
            </div>
          </div>
        </div>
      </Layout>

      <Footer />
    </>
  );
}
