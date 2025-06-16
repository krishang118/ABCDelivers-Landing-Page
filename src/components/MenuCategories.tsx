import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Coffee, Cookie, Pizza } from "lucide-react";
export const MenuCategories = () => {
  const categories = [
    {
      icon: Pizza,
      title: "AB's Favourites",
      description: "South African dishes loved by the legend himself.",
      image: "🏏",
      color: "bg-rcb-red"
    },
    {
      icon: Utensils,
      title: "Champions' Mains",
      description: "Hearty meals loved by the IPL champions.",
      image: "🍛",
      color: "bg-rcb-gold"
    },
    {
      icon: Coffee,
      title: "Victory Drinks",
      description: "Refreshing beverages to celebrate every win.",
      image: "🥤",
      color: "bg-rcb-red-light"
    },
    {
      icon: Cookie,
      title: "Royal Desserts",
      description: "Sweet treats worthy of cricket royalty.",
      image: "🍰",
      color: "bg-rcb-black"
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rcb-black mb-4">
            Our Menu Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated menu inspired by RCB's winning spirit and AB de Villiers' international taste.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`${category.color} p-8 text-center text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4 text-4xl opacity-20">
                    {category.image}
                  </div>
                  <category.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-center">
                    {category.description}
                  </p>
                  <button className="w-full mt-4 bg-rcb-red hover:bg-rcb-red-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Explore Menu
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};