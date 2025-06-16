import { MapPin, Phone, Clock, Instagram, Twitter, Facebook } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rcb-black to-rcb-red-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-rcb-gold">ABC</span>Delivers
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Bringing you the finest culinary experience inspired by the legacy of the beloved Indian Premier League cricket team, Royal Challengers Bangalore and the Mr. 360°, the legendary AB de Villiers. Every meal here, is a celebration of cricket and flavor.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-rcb-gold hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-rcb-gold hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-rcb-gold hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-rcb-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-rcb-gold" />
                <span className="text-sm">Mahatma Gandhi Rd, Shivaji Nagar, Bangalore, Karnataka 560017</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rcb-gold" />
                <span className="text-sm">+91 987654317</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-rcb-gold" />
                <span className="text-sm">Open 11 AM - 11 PM, 24/7 Daily</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-rcb-gold">Quick Links</h4>
            <div className="space-y-2">
              <div className="text-sm hover:text-rcb-gold cursor-pointer transition-colors">Our Menu</div>
              <div className="text-sm hover:text-rcb-gold cursor-pointer transition-colors">About RCB</div>
              <div className="text-sm hover:text-rcb-gold cursor-pointer transition-colors">Delivery Areas</div>
              <div className="text-sm hover:text-rcb-gold cursor-pointer transition-colors">Track Order</div>
              <div className="text-sm hover:text-rcb-gold cursor-pointer transition-colors">Special Offers</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ABCDelivers. All rights reserved. | Serving since 2016.
          </p>
        </div>
      </div>
    </footer>
  );
};