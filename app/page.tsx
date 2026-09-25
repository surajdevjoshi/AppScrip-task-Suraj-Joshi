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
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
        description: "Classic everyday white t-shirt.",
        price: 29.99,
      },
      {
        id: 2,
        title: "Premium Casual Shirt",
        image:
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
        description: "Comfortable casual shirt.",
        price: 39.99,
      },
      {
        id: 3,
        title: "Classic Denim Jacket",
        image:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        description: "Modern denim jacket.",
        price: 59.99,
      },
      {
        id: 4,
        title: "Elegant Black Dress",
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
        description: "Elegant black dress.",
        price: 69.99,
      },
      {
        id: 5,
        title: "Casual Sneakers",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        description: "Comfortable everyday sneakers.",
        price: 49.99,
      },
      {
        id: 6,
        title: "Leather Backpack",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        description: "Minimal leather backpack.",
        price: 79.99,
      },
      {
        id: 7,
        title: "Minimal Wrist Watch",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        description: "Minimal everyday wrist watch.",
        price: 89.99,
      },
      {
        id: 8,
        title: "Classic Sunglasses",
        image:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        description: "Classic frame sunglasses.",
        price: 34.99,
      },
      {
        id: 9,
        title: "Cotton Hoodie",
        image:
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80",
        description: "Soft cotton hoodie.",
        price: 54.99,
      },
      {
        id: 10,
        title: "Running Shoes",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        description: "Lightweight running shoes.",
        price: 74.99,
      },
      {
        id: 11,
        title: "Canvas Tote Bag",
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        description: "Reusable canvas tote bag.",
        price: 24.99,
      },
      {
        id: 12,
        title: "Classic Cotton Cap",
        image:
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
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