import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  const [value, setValue] = useState(0);
  const add = () => {
    setValue(value + 1);
  };
  const remove = () => {
    setValue(value - 1);
  };
  if (value < 0) {
    setValue("this is a negetive value");
  }

  return (
    <>
      <Navbar />
      <Layout>
        {/* <h1>This is Home</h1>
        <h3>Here is your {value}</h3>
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button> */}

        <div class="bg-black">
          <div class="flex relative text-center">
            <h1 class="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">
              Welcome to Lightning deals
            </h1>
            <img
              class="w-full object-cover h-72 block mx-auto  sm:block sm:w-full"
              src="https://images.unsplash.com/photo-1505934333218-8fe21ff87e69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Banner"
              width="1920"
              height="288"
            />
          </div>
        </div>

        <div class="p-5 mx-auto max-w-screen-xl">
          <h2 class="font-bold uppercase text-xl pb-4">Best sellers</h2>

          <div class="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
            <div>
              <img
                class="border border-yellow-700 mb-1 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1594760467096-03761ecedde4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzE2fHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Indoor light 2021 USA
              </h2>
              <p>$210</p>
              <p class="text-green-500 italic font-medium">In Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1592009104079-88046bd5a09a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQwfHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Indoor light 2021 USA
              </h2>
              <p>$210</p>
              <p class="text-green-500 italic font-medium">In Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1562635254-c14536b57bcb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGxpZ2h0aW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Indoor light 2021 USA
              </h2>
              <p>$210</p>
              <p class="text-green-500 italic font-medium">In Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1595389397394-01fed35d24bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Outdoor light 2021 USA
              </h2>
              <p>$210</p>
              <p class="text-red-500 italic font-medium">Out of Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1577430605074-47eb89cc8969?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Indoor light 2020 USA
              </h2>
              <p>$210</p>
              <p class="text-green-500 italic font-medium">In Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1565475266382-7870244b60f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYzfHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Indoor light 2021 USA
              </h2>
              <p>$210</p>
              <p class="text-green-500 italic font-medium">In Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1588707698376-559b54b41846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgyfHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Outdoor light 2020 USA
              </h2>
              <p>$210</p>
              <p class="text-red-500 italic font-medium">Out of Stock</p>
            </div>
            <div class="">
              <img
                class="border border-yellow-700 border-solid w-full hover:border-yellow-500"
                alt="Best seller"
                src="https://images.unsplash.com/photo-1533637268824-0da337d92744?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAyfHxsaWdodGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                loading="lazy"
              />
              <h2 class="pt-2 m-0 leading-4 font-semibold">
                Outdoor light 2021 USA
              </h2>
              <p>$210</p>
              <p class="text-green-500 italic font-medium">In Stock</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-200">
          <section class="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
            <article class="flex-col justify-center inline-flex self-stretch  p-6">
              <h2 class="uppercase font-semibold text-xl">Design</h2>
              <strong class="text-lg pb-2 font-normal font-sans sm:text-2xl">
                Our 30 Year Journey
              </strong>
              <p class="text-sm pb-4">
                Join us as we revisit our roots, tracing the path from bright
                idea to industry disruptors with a plan to fight climate change
                while creating beautiful things.{" "}
              </p>
              <button class="font-semibold uppercase border-black border p-3 max-w-max hover:bg-gray-600 hover:text-white">
                Join us
              </button>
            </article>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxpZ2h0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Banner"
                looding="lazy"
              />
            </figure>
          </section>
        </div>
      </Layout>

      <Footer />
    </>
  );
}
