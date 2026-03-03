import Image from "next/image";
import Banner from "./components/Home/Banner";
import Products from "./components/Home/Products";

export default function Home() {
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
