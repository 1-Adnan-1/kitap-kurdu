import { useEffect, useState } from "react";

const RomanSayfasi = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/books")
      .then((response) => response.json())
      .then((data) => {
        const filteredBooks = data.filter((book) => book.type === "Roman");
        setBooks(filteredBooks);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-primary">Roman Kitapları</h1>
      <div className="row g-4">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={book.id}>
              <div className="card shadow-sm border-0 rounded-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <strong>Yazar:</strong> {book.author}
                    </div>
                    <div>
                      <strong>Fiyat:</strong> {book.price}₺
                    </div>
                  </div>
                  <div className="mt-3">
                    <strong>Yıl:</strong> {book.year} |{" "}
                    <strong>Sayfa Sayısı:</strong> {book.page}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="mt-3">Kitaplar yükleniyor...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RomanSayfasi;
