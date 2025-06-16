import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Zap } from "lucide-react";
export const FeaturedDishes = () => {
  const dishes = [
    {
      name: "The Boerewors Burger",
      description: "Premium South African sausage burger with chakalaka relish and farm-style chips.",
      price: "₹549",
      rating: "4.9",
      category: "AB's Favourites",
      badge: "Most Popular",
      badgeColor: "bg-rcb-red text-white",
      image: "🍔"
    },
    {
      name: "Challenger's Biryani Bowl",
      description: "Aromatic Hyderabadi biryani with tender mutton, served with raita and pickle.",
      price: "₹449",
      rating: "4.8",
      category: "Champions' Mains",
      badge: "Chef's Special",
      badgeColor: "bg-rcb-red text-white",
      image: "🍛"
    },
    {
      name: "Victory Tandoori Platter",
      description: "Mixed tandoori with chicken tikka, seekh kebab, and naan bread.",
      price: "₹699",
      rating: "4.7",
      category: "Champions' Mains",
      badge: "Family Favourite",
      badgeColor: "bg-rcb-red text-white",
      image: "🍖"
    },
    {
      name: "Royal Chocolate Lava",
      description: "Decadent chocolate cake with molten center, served with vanilla ice cream.",
      price: "₹299",
      rating: "4.9",
      category: "Royal Desserts",
      badge: "Sweet Victory",
      badgeColor: "bg-rcb-red text-white",
      image: "🍫"
    }
  ];
  return (
    <section className="py-20 bg-rcb-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-rcb-gold">Featured</span> Signature Dishes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Handpicked favourites by our favourites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <Card 
              key={index}
              className="bg-white text-rcb-black border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="bg-gradient-to-br from-rcb-red-light to-rcb-red p-8 text-center">
                    <div className="text-6xl mb-4">{dish.image}</div>
                    <Badge className={`${dish.badgeColor} font-semibold transform transition hover:scale-105`}>
                      {dish.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <Heart className="w-5 h-5 text-rcb-red" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-rcb-red bg-rcb-red/10 px-2 py-1 rounded">
                      {dish.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-rcb-gold fill-current" />
                      <span className="text-sm font-semibold">{dish.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-rcb-red">{dish.price}</span>
                    <button className="bg-rcb-red hover:bg-rcb-red-dark text-white px-4 py-2 rounded-lg font-semibold transition-all">
                      Add
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-rcb-gold hover:bg-rcb-gold/90 text-rcb-black font-bold text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};