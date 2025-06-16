import { Hero } from "@/components/Hero";
import { MenuCategories } from "@/components/MenuCategories";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Footer } from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MenuCategories />
      <FeaturedDishes />
      <Footer />
    </div>
  );
};
export default Index;