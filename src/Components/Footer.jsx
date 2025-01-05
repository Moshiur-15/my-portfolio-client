export default function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-800 py-12 text-center">
      <div className="text-md text-gray-900">
        <p>
          &copy; {new Date().getFullYear()} Moshiur Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
