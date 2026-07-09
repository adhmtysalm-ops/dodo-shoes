"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_URL } from '@/lib/api';

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=2070" 
          alt="Hero Shoe" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 italic drop-shadow-lg">
            Feel the Speed
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-lg mx-auto">
            The new DODO Pegasus is here. Lighter, faster, and more responsive than ever.
          </p>
          <button className="bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Featured Footwear</h2>
          <Link href="/" className="font-medium hover:underline">Shop All</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.length > 0 ? products.map(product => (
            <Link key={product.id} href={`/products/${product.id}`} className="group block">
              <div className="bg-gray-100 aspect-square rounded-xl overflow-hidden mb-4 relative">
                <img 
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800" 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-medium text-lg">{product.name}</h3>
              <p className="text-gray-500 mb-2">Running Shoe</p>
              <p className="font-bold">${product.price}</p>
            </Link>
          )) : (
            <div className="col-span-3 py-20 text-center text-gray-500">
              <p>No products available right now. Visit the Admin dashboard to add some.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
