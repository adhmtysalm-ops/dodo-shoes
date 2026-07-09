import ProductDetailsClient from './ProductDetailsClient';
import { API_URL } from '@/lib/api';

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

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ProductDetailsClient id={resolvedParams.id} />;
}
