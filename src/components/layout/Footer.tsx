import styles from "./Footer.module.css"

export default function Footer() {
  return (
      <div className="container mx-auto py-4 px-4 text-center">
        <p>© {new Date().getFullYear()} Chaii Stop. All rights reserved.</p>
      </div>
  );
}