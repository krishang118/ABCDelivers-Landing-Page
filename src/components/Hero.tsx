import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Clock } from "lucide-react";
export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rcb-red via-rcb-red-dark to-rcb-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border-4 border-white rounded-full animate-float-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-4 border-white rounded-full animate-float-reverse"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-40 pb-20">
        <div className="text-center text-white">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
              <span className="text-rcb-gold">ABC</span>
              <span className="text-white">Delivers</span>
            </h1>
            <p className="text-xl md:text-2xl text-rcb-gold font-semibold mb-2">
              A Royal Challengers Bangalore Themed Restaurant
            </p>
            <p className="text-lg md:text-xl opacity-90">
              Serving Champions Since The AB de Villiers Era.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Experience the taste of victory with our signature dishes inspired by the 
              <span className="text-rcb-gold font-semibold"> Royal Challengers Bangalore </span>
              legacy. From AB's favourite South African delicacies to Bangalore's finest cuisine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-6 h-6 text-rcb-gold" />
                <span className="text-lg font-semibold">4.8 Star Rating</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 text-rcb-gold" />
                <span className="text-lg font-semibold">25 Min Delivery</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCart className="w-6 h-6 text-rcb-gold" />
                <span className="text-lg font-semibold">Free Delivery</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-rcb-gold hover:bg-rcb-gold/90 text-rcb-black font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform transition hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Order Now
              </Button>
              <Button 
                size="lg" 
                className="bg-white hover:bg-white text-rcb-red font-bold text-lg px-8 py-6 rounded-full shadow-2xl transform transition hover:scale-105"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rcb-black/50 to-transparent"></div>
    </div>
  );
};