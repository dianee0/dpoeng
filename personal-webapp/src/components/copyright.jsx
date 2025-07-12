import "./copyright.css";

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>&copy; {currentYear} Diane Poeng. All rights reserved.</p>
    </div>
  );
}

export default Copyright;
