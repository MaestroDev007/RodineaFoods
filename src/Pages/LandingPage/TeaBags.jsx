import React, { useState, useEffect } from 'react';
import { Coffee, Leaf, Recycle, ArrowRight } from 'lucide-react';

const TeaBags = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const teaFlavors = [
    { name: 'Honey Lemon', color: '#f9a825' },
    { name: 'Mint Fresh', color: '#66bb6a' },
    { name: 'Ginger Spice', color: '#ef6c00' },
    { name: 'Chamomile', color: '#ffd54f' }
  ];

  const benefits = [
    { icon: Coffee, text: 'Premium Quality' },
    { icon: Leaf, text: 'Natural Ingredients' },
    { icon: Recycle, text: 'Eco-Friendly' }
  ];

  return (
    <div 
      className="relative min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Title */}
            <div className={`transform transition-all duration-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Rich Blend Of
                <br />
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  Natural Ingredients
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full" />
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-800 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Rodinea Label Tea Bags is a rich blend of natural ingredients that are carefully selected to provide a unique and flavorful experience.
              </p>
            </div>

            {/* Benefits */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-800 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="group text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-green-500/50 group-hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-white font-medium">{benefit.text}</h3>
                  </div>
                );
              })}
            </div>

            {/* Flavors Section */}
            <div className={`space-y-6 transform transition-all duration-800 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  Same Tea,{' '}
                  <span className="text-transparent bg-gradient-to-r from-green-500 to-green-400 bg-clip-text">
                    Different Flavours
                  </span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Rodinea Label Tea Bags are available in different flavours, making it easy for you to choose the perfect taste for your needs.
                </p>
              </div>

              {/* Flavor Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {teaFlavors.map((flavor, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: flavor.color }}
                    />
                    <span className="text-white text-sm font-medium">{flavor.name}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Our Teas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Feature Card */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-96 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 flex flex-col justify-center items-center text-center hover:bg-white/15 transition-all duration-500 group">
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Coffee className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    Premium Tea Collection
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    Discover the perfect blend of tradition and innovation in every carefully crafted cup.
                  </p>
                  
                  <div className="flex justify-center gap-2 pt-4">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-green-500 rounded-full opacity-60"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-80" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaBags;