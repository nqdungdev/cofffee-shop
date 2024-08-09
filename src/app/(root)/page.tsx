import About from "@/components/home/about/About";
import ProductCategory from "@/components/home/productCategory/ProductCategory";
import Slider from "@/components/home/slider/Slider";
import Products from "@/components/home/products/Products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Slider />

      {/* <ProductCategory /> */}

      <Products />

      <About />
    </main>
  );
}
