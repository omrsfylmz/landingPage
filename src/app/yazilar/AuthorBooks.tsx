// components/AuthorBooks.tsx
import Link from "next/link";

interface Book {
  title: string;
  description: string;
  publishedYear: string;
  link: string; // Add a link property for each book
}

interface AuthorBooksProps {
  author: string;
  books: Book[];
}

const AuthorBooks: React.FC<AuthorBooksProps> = ({ author, books }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {author} YAZILARI
      </h1>
      <ul className="space-y-4">
        {books.map((book, index) => (
          <li key={index}>
            <Link href={book.link}>
              <div className="block border border-gray-200 rounded-lg shadow-md p-4 hover:bg-gray-50 transition">
                <h2 className="text-xl font-semibold text-blue-600">
                  {book.title}
                </h2>
                <p className="text-gray-600 mt-2">{book.description}</p>
                <span className="text-gray-500 text-sm">
                  {book.publishedYear}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorBooks;
