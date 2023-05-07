const navItems = [
  { label: "Categorías" },
  { label: "Ofertas" },
  { label: "Historia" },
  { label: "Supermercado" },
  { label: "Moda" },
  { label: "Vender" },
  { label: "Ayuda" },
];

export function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 text-sm">
        {navItems.map((item) => (
          <p>{item.label}</p>
        ))}
      </ul>
    </nav>
  );
}
