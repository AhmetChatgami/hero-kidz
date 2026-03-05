import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/app/components/buttons/CartButton";
import Error404 from "@/app/not-found";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

export async function generateMetadata({ params }) {
    const {id}= await params;
  const product = await getSingleProduct(id); 

  return {
    title: product.title,
    description: product.description,

    openGraph: {
      title: product.title,
      description: product.description,
      url: `https://yourdomain.com/products/${params.id}`,
      images: [
        {
          url: "https://i.ibb.co/dJGjW7dy/product-page-preview.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: ["https://i.ibb.co/dJGjW7dy/product-page-preview.png"],
    },
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product.title) {
    return <Error404></Error404>;
  }

  // Discounted Price Calculation
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-2xl shadow-sm">
        {/* 1. Image section */}
        <div className="relative h-[400px] md:h-[500px] w-full group">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 2. information section */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-lg text-gray-500 mb-4">{product.bangla}</p>

          {/* rating & review */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-500">
              <FaStar />{" "}
              <span className="ml-1 text-gray-700 font-medium">
                {product.ratings}
              </span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{product.reviews} Reviews</span>
            <span className="text-gray-400">|</span>
            <span className="text-blue-600 font-medium">
              {product.sold} Sold
            </span>
          </div>

          {/* Price section */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-blue-700">
                ৳{discountedPrice}
              </span>
              {product.discount > 0 && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ৳{product.price}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">
                    -{product.discount}% OFF
                  </span>
                </>
              )}
            </div>
          </div>

          {/* short highlights (info) */}
          <div className="mb-6">
            <h3 className="font-bold mb-3 text-gray-700">Key Highlights:</h3>
            <ul className="space-y-2">
              {product.info?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <FaCheckCircle className="text-green-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* button*/}
          <div className="flex gap-4 mt-auto">
            <div className="flex-1 bg-primary  text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
              {/* <FaShoppingCart /> Add to Cart */}
            <CartButton product={product}></CartButton>
            </div>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description (Q&A) */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Product Description
          </h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {product.description}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Common Questions
          </h2>
          <div className="space-y-6">
            {product.qna?.map((item, index) => (
              <div key={index}>
                <p className="font-bold text-gray-800">Q: {item.question}</p>
                <p className="text-gray-600 mt-1">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
