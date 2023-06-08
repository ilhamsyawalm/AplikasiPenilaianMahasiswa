import React, { useState } from "react";
import "./App.css";

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
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <th>
            <tr>Mahasiswa</tr>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
                {/* <input placeholder="Mahasiswa ke " /> */}
                <p>Mahasiswa ke {index + 1}</p>
              </tr>
            ))}
          </th>
          <th>
            <tr>Aspek Penilaian 1</tr>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
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
              </tr>
            ))}
          </th>
          <th>
            <tr>Aspek Penilaian 2</tr>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
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
              </tr>
            ))}
          </th>
          <th>
            <tr>Aspek Penilaian 3</tr>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
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
              </tr>
            ))}
          </th>
          <th>
            <tr>Aspek Penilaian 4</tr>
            {[...Array(10)].map((_, index) => (
              <tr key={index}>
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
              </tr>
            ))}
          </th>
        </thead>

        <tbody></tbody>
      </table>
      <button onClick={handleSimpan}>Simpan</button>
    </div>
  );
};

export default App;
