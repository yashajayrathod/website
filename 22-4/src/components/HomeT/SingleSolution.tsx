import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const SingleProduct = ({ product }: { product: Product }) => {
  const { image, title, paragraph, href } = product;

  return (
    <Link href={href}>
      {" "}
      {/* Wrap the entire card inside Link */}
      <a>
        <div className="max-w-sm  border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div >
            <Image src={image} alt="" width={500} height={200} />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
              {paragraph}
            </p>
            <div className="flex justify-center">
              <a
                href={href}
                className="ml-8 mt-4 inline-flex items-center rounded-full bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SingleProduct;
