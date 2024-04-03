import Image from "next/image";
import { Inter } from "next/font/google";
import Cards from "@/Components/Cards";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Navbar />
      <>
        <h1 className=" text-center text-4xl my-5">Products</h1>
        {/* <div className="flex flex-wrap justify-center">
          {props.data.map((i) => {
            return (
              <Cards
                title={i?.title}
                images={i?.images[0]}
                description={i?.description}
                stock={i?.stock}
                price={i?.price}
                id={i?.id}
              />
            );
          })}
        </div> */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {props.data.map((i) => {
                return (
                  <Cards
                    title={i?.title}
                    images={i?.images[0]}
                    description={i?.description}
                    stock={i?.stock}
                    price={i?.price}
                    id={i?.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return {
      props: {
        data: data.products,
      },
    };
  } catch (error) {
    console.error("Error fetching dataa:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}
