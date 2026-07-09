import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-sans">
      {/* Vercel-like Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center px-6 gap-6">
          <Link href="/admin" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-black rounded-full text-brand-white flex items-center justify-center text-xs">▲</div>
            DODO
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/admin" className="hover:text-black transition-colors">Overview</Link>
            <Link href="/admin/products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/admin/orders" className="hover:text-black transition-colors">Orders</Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-red to-orange-400"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 pt-10">
        {children}
      </main>
    </div>
  );
}
