import styles from './MarkdownTable.module.css';

export default function MarkdownTable ({ content }:{ content:string })  {
  // Separar las filas
  const rows = content.split('\n');
  let maxCells = 0;

  // Crear una fila para cada una
  const tableRows = rows.map((row, index) => {
    const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell);

    // Las celdas de la primera fila son las cabeceras
    if (index === 0) {
      maxCells = cells.length;
      return (
        <tr key={index}>
          {cells.map((cell, index) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      );
    }
    if( index === 1 ) return;

    // Las celdas de las demás filas son los datos
    return (
      <tr key={index}>
        {Array( maxCells - cells.length ).fill(1).map( (cell, index) =>  (
          <td key={`fill-${index}`}></td>
        )) }
        {cells.map((cell, index) => (
          <td key={index}>{cell}</td>
        ))}
      </tr>
    );
  });

  // Crear la tabla completa
  return (
    <table className={styles.table}>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};