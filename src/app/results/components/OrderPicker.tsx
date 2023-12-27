const ORDER_BY_OPTIONS = [
  {
    value: 'mas-relevantes',
    label: 'Más relevantes',
  },
  {
    value: 'menor-precio',
    label: 'Menor precio',
  },
  {
    value: 'mayor-precio',
    label: 'Mayor precio',
  },
]

export function OrderPicker() {
  return (
    <label className="self-end text-sm text-gray-700">
      <span className="font-semibold">Ordenar por</span>
      <select className="bg-none rounded-sm px-2 py-1 ml-2" name="order">
        {ORDER_BY_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
