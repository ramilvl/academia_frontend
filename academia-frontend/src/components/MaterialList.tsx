interface MaterialListProps {
  materials: { id: number; title: string }[];
  onSelect: (id: number) => void;
}

const MaterialList = ({ materials, onSelect }: MaterialListProps) => (
  <div className="material-list">
    <ul>
      {materials.map(material => (
        <li key={material.id} onClick={() => onSelect(material.id)}>
          {material.title}
        </li>
      ))}
    </ul>
  </div>
);

export default MaterialList;
