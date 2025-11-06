export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 text-sm mt-8">
      <div className="container mx-auto py-4 px-4 text-center">
        <p>© {new Date().getFullYear()} Chaii Stop. All rights reserved.</p>
      </div>
    </footer>
  );
}