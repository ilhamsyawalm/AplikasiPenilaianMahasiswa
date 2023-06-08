import React, { useState } from "react";

const App = () => {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleChange = (aspek, mahasiswa, nilai) => {
    setPenilaian((prevPenilaian) => ({
      ...prevPenilaian,
      [aspek]: {
        ...prevPenilaian[aspek],
        [mahasiswa]: nilai,
      },
    }));
  };

  const handleSimpan = () => {
    console.log(JSON.stringify(penilaian));
  };

  return (
    <div>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <td>Aspek Penilaian 1</td>
            {[...Array(10)].map((_, index) => (
              <td key={index}>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(event) =>
                    handleChange(
                      "aspek_penilaian_1",
                      `mahasiswa_${index + 1}`,
                      event.target.value
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>Aspek Penilaian 2</td>
            {[...Array(10)].map((_, index) => (
              <td key={index}>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(event) =>
                    handleChange(
                      "aspek_penilaian_2",
                      `mahasiswa_${index + 1}`,
                      event.target.value
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>Aspek Penilaian 3</td>
            {[...Array(10)].map((_, index) => (
              <td key={index}>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(event) =>
                    handleChange(
                      "aspek_penilaian_3",
                      `mahasiswa_${index + 1}`,
                      event.target.value
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>Aspek Penilaian 4</td>
            {[...Array(10)].map((_, index) => (
              <td key={index}>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(event) =>
                    handleChange(
                      "aspek_penilaian_4",
                      `mahasiswa_${index + 1}`,
                      event.target.value
                    )
                  }
                />
              </td>
            ))}
          </tr>
          <tr>
            <th></th>
            <th>Mahasiswa 1</th>
            <th>Mahasiswa 2</th>
            <th>Mahasiswa 3</th>
            <th>Mahasiswa 4</th>
            <th>Mahasiswa 5</th>
            <th>Mahasiswa 6</th>
            <th>Mahasiswa 7</th>
            <th>Mahasiswa 8</th>
            <th>Mahasiswa 9</th>
            <th>Mahasiswa 10</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <button onClick={handleSimpan}>Simpan</button>
    </div>
  );
};

export default App;
