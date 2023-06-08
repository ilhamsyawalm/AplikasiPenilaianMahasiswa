import "./App.css";

function App() {
  return (
    <div>
      <h1>Aplikasi Penilaian Mahasiswa</h1>

      <table>
        <thead>
          <th>Mahasiswa Ke-X</th>
          <th>Aspek Penilaian 1</th>
          <th>Aspek Penilaian 2</th>
          <th>Aspek Penilaian 3</th>
          <th>Aspek Penilaian 4</th>
        </thead>

        <tbody>
          <tr class="Mahasiswa1">
            <td>Mahasiswa 1</td>
            <td><input type="number" range="1" min="1" max="10"></td>
            <td><input type="text"></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
