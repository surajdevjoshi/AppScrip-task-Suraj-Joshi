export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await response.json();
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

        <div className="logo">
          LOGO
        </div>

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

        <h1>
          DISCOVER OUR PRODUCTS
        </h1>

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

          <span>
            12 ITEMS
          </span>

          <select>

            <option>
              RECOMMENDED
            </option>

            <option>
              PRICE: LOW TO HIGH
            </option>

            <option>
              PRICE: HIGH TO LOW
            </option>

          </select>

        </div>


        {/* CATALOG */}

        <div className="catalog">


          {/* SIDEBAR */}

          <aside className="sidebar">

            <div className="customizable">

              <input type="checkbox" />

              <span>
                CUSTOMIZABLE
              </span>

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

                  <h3>
                    {product.title}
                  </h3>

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

        <h3>
          BE THE FIRST TO KNOW
        </h3>

        <p>
          Sign up for updates from metta muse.
        </p>

      </footer>

    </main>
  );
}