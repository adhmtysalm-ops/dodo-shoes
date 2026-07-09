"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useCart } from '@/hooks/useCart';
import { API_URL } from '@/lib/api';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_URL}/api/products`);
    const products = await res.json();
    return products.map((p: any) => ({
      id: p.id.toString(),
    }));
  } catch (err) {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
  }
}

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: any) => p.id === parseInt(params.id as string));
        setProduct(found || null);
      });
  }, [params.id]);

  if (!product) return <div className="py-20 text-center font-bold">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-gray-100 aspect-square rounded-2xl overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1200" 
            alt={product.name}
            className="object-cover w-full h-full"
          />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">{product.name}</h1>
        <p className="text-2xl font-medium mb-6">${product.price}</p>
        <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
          {product.description || "The perfect companion for your daily runs. Engineered for maximum speed and comfort."}
        </p>
        
        <div className="space-y-4">
          <button onClick={() => addToCart(product)} className="w-full bg-brand-black text-brand-white py-4 rounded-full font-bold uppercase hover:bg-gray-800 transition-colors">
            Add to Bag
          </button>
          <button className="w-full bg-gray-100 text-brand-black py-4 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
