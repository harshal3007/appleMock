function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Company
            </h3>
            <p className="text-sm text-gray-600">
              Apple Inc. One Apple Park Way, Cupertino, CA 95014, U.S.A.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              © {new Date().getFullYear()} Apple Inc. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Section
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="#carousel"
                  onClick={(e) => scrollToSection(e, 'carousel')}
                  className="hover:text-gray-900 underline"
                >
                  Hero
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => scrollToSection(e, 'products')}
                  className="hover:text-gray-900 underline"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  onClick={(e) => scrollToSection(e, 'sponsors')}
                  className="hover:text-gray-900 underline"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
