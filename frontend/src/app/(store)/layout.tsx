import Link from 'next/link';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nike-style Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter uppercase italic text-brand-black">
            DODO
          </Link>
          <nav className="hidden md:flex gap-8 font-medium text-sm">
            <Link href="/" className="hover:text-brand-red transition-colors">New Releases</Link>
            <Link href="/" className="hover:text-brand-red transition-colors">Men</Link>
            <Link href="/" className="hover:text-brand-red transition-colors">Women</Link>
            <Link href="/" className="hover:text-brand-red transition-colors">Sale</Link>
          </nav>
          <div className="flex gap-4 items-center">
            <Link href="/admin" className="text-sm font-medium hover:text-brand-red">Admin</Link>
            <Link href="/cart" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              🛒
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">Find A Store</h3>
            <h3 className="font-bold uppercase text-sm mb-4">Become A Member</h3>
          </div>
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">Get Help</h3>
            <ul className="text-gray-400 text-xs space-y-2">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase text-sm mb-4">About DODO</h3>
            <ul className="text-gray-400 text-xs space-y-2">
              <li>News</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
