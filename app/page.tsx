export default async function Home() {
  let products: any[] = [];

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      throw new Error("API did not return JSON");
    }

    products = await response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);

    products = [
      {
        id: 1,
        title: "Classic White T-Shirt",
        image: "https://picsum.photos/seed/product1/600/600",
        description: "Classic everyday white t-shirt.",
        price: 29.99,
      },
      {
        id: 2,
        title: "Premium Casual Shirt",
        image: "https://picsum.photos/seed/product2/600/600",
        description: "Comfortable casual shirt.",
        price: 39.99,
      },
      {
        id: 3,
        title: "Classic Denim Jacket",
        image: "https://picsum.photos/seed/product3/600/600",
        description: "Modern denim jacket.",
        price: 59.99,
      },
      {
        id: 4,
        title: "Elegant Black Dress",
        image: "https://picsum.photos/seed/product4/600/600",
        description: "Elegant black dress.",
        price: 69.99,
      },
      {
        id: 5,
        title: "Casual Sneakers",
        image: "https://picsum.photos/seed/product5/600/600",
        description: "Comfortable everyday sneakers.",
        price: 49.99,
      },
      {
        id: 6,
        title: "Leather Backpack",
        image: "https://picsum.photos/seed/product6/600/600",
        description: "Minimal leather backpack.",
        price: 79.99,
      },
      {
        id: 7,
        title: "Minimal Wrist Watch",
        image: "https://picsum.photos/seed/product7/600/600",
        description: "Minimal everyday wrist watch.",
        price: 89.99,
      },
      {
        id: 8,
        title: "Classic Sunglasses",
        image: "https://picsum.photos/seed/product8/600/600",
        description: "Classic frame sunglasses.",
        price: 34.99,
      },
      {
        id: 9,
        title: "Cotton Hoodie",
        image: "https://picsum.photos/seed/product9/600/600",
        description: "Soft cotton hoodie.",
        price: 54.99,
      },
      {
        id: 10,
        title: "Running Shoes",
        image: "https://picsum.photos/seed/product10/600/600",
        description: "Lightweight running shoes.",
        price: 74.99,
      },
      {
        id: 11,
        title: "Canvas Tote Bag",
        image: "https://picsum.photos/seed/product11/600/600",
        description: "Reusable canvas tote bag.",
        price: 24.99,
      },
      {
        id: 12,
        title: "Classic Cotton Cap",
        image: "https://picsum.photos/seed/product12/600/600",
        description: "Simple cotton cap.",
        price: 19.99,
      },
    ];
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Metta Muse Products",
    itemListElement: products.map((product: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        image: product.image,
        description: product.description,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
        },
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HEADER */}

      <header className="header">
        <div className="logo">LOGO</div>

        <nav>
          <a>SHOP</a>
          <a>SKILLS</a>
          <a>STORIES</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </nav>

        <div className="icons">
          ♡ &nbsp; 🛒
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur.
          Amet est posuere rhoncus scelerisque.
          Dolor integer scelerisque nibh amet mi
          et elementum dolor.
        </p>
      </section>

      {/* PRODUCTS */}

      <h2 className="sr-only">Our Products</h2>

      <section className="products-section">
        <div className="toolbar">
          <span>12 ITEMS</span>

          <select>
            <option>RECOMMENDED</option>
            <option>PRICE: LOW TO HIGH</option>
            <option>PRICE: HIGH TO LOW</option>
          </select>
        </div>

        {/* CATALOG */}

        <div className="catalog">
          {/* SIDEBAR */}

          <aside className="sidebar">
            <div className="customizable">
              <input type="checkbox" />
              <span>CUSTOMIZABLE</span>
            </div>

            <div className="filter">
              <div className="filter-title">
                IDEAL FOR
                <span>⌃</span>
              </div>

              <p>All</p>
              <p>Men</p>
              <p>Women</p>
              <p>Baby & Kids</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                OCCASION
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                WORK
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                FABRIC
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                SEGMENT
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                SUITABLE FOR
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                RAW MATERIALS
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>

            <div className="filter">
              <div className="filter-title">
                PATTERN
                <span>⌃</span>
              </div>

              <p>All</p>
            </div>
          </aside>

          {/* PRODUCTS GRID */}

          <div className="products">
            {products.map((product: any) => (
              <div
                className="product"
                key={product.id}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="product-info">
                  <h3>{product.title}</h3>

                  <button className="heart">
                    ♡
                  </button>
                </div>

                <p className="product-description">
                  Sign in or Create an account to see price
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <h3>BE THE FIRST TO KNOW</h3>

        <p>
          Sign up for updates from metta muse.
        </p>
      </footer>
    </main>
  );
}