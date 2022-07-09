// Nama: "Filbert",
// NIM: 1,
// Matkul: [
//     {
//     Semester: "Satu",
//     MK: [
//         {
//         Nama_MK: "Algoritma",
//         Nilai: 65
//         },
//         {
//         Nama_MK: "C++",
//         Nilai: 41
//         },
//         {
//         Nama_MK: "MatDis",
//         Nilai: 0
//     }
//     ]
//     },
//     {
//     Semester: "Dua",
//     MK: [
//         {
//         Nama_MK: "Aljabar",
//         Nilai: 95
//         },
//         {
//         Nama_MK: "PBO I",
//         Nilai: 49
//         },
//         {
//         Nama_MK: "Kalkulus I",
//         Nilai: 75
//         }
//     ]
//     }
// ]

var a = [
  {
    Nama: "Mhs1",
    NIM: 1,
    Kelompok: [
      {
        Nama_Kel: "Data Science",
        MK: [
          {
            Nama_MK: "Data Mining and Data Analytics",
            Nilai: 80,
            Hasil: "B",
          },
          {
            Nama_MK: "Machine Learning",
            Nilai: 88,
            Hasil: "B",
          },
          {
            Nama_MK: "Natural Language Processing",
            Nilai: 0,
            Hasil: "C",
          },
          {
            Nama_MK: "Bussiness Process Re-Engineering",
            Nilai: 62,
            Hasil: "C",
          },
        ],
      },
      {
        Nama_Kel: "Intelligence Systems",
        MK: [
          {
            Nama_MK: "Artificial Neural Network",
            Nilai: 80,
            Hasil: "B",
          },
          {
            Nama_MK: "Computer Vision",
            Nilai: 65,
            Hasil: "C",
          },
        ],
      },
      {
        Nama_Kel: "Game Development",
        MK: [
          {
            Nama_MK: "Game Development",
            Nilai: 80,
            Hasil: "B",
          },
          {
            Nama_MK: "Game Design",
            Nilai: 0,
            Hasil: "C",
          },
          {
            Nama_MK: "Java Programming",
            Nilai: 55,
            Hasil: "C",
          },
        ],
      },
    ],
  },
  {
    Nama: "Mhs2",
    NIM: 2,
    Kelompok: [
      {
        Nama_Kel: "Data Science",
        MK: [
          {
            Nama_MK: "Data Mining and Data Analytics",
            Nilai: 85,
            Hasil: "B",
          },
          {
            Nama_MK: "Machine Learning",
            Nilai: 64,
            Hasil: "C",
          },
          {
            Nama_MK: "Natural Language Processing",
            Nilai: 75,
            Hasil: "C",
          },
          {
            Nama_MK: "Bussiness Process Re-Engineering",
            Nilai: 60,
            Hasil: "C",
          },
        ],
      },
      {
        Nama_Kel: "Intelligence Systems",
        MK: [
          {
            Nama_MK: "Artificial Neural Network",
            Nilai: 63,
            Hasil: "C",
          },
          {
            Nama_MK: "Computer Vision",
            Nilai: 41,
            Hasil: "D",
          },
        ],
      },
      {
        Nama_Kel: "Game Development",
        MK: [
          {
            Nama_MK: "Game Development",
            Nilai: 71,
            Hasil: "C",
          },
          {
            Nama_MK: "Game Design",
            Nilai: 56,
            Hasil: "C",
          },
          {
            Nama_MK: "Java Programming",
            Nilai: 55,
            Hasil: "C",
          },
        ],
      },
    ],
  },
  {
    Nama: "Mhs3",
    NIM: 3,
    Kelompok: [
      {
        Nama_Kel: "Data Science",
        MK: [
          {
            Nama_MK: "Data Mining and Data Analytics",
            Nilai: 95,
            Hasil: "A",
          },
          {
            Nama_MK: "Machine Learning",
            Nilai: 70,
            Hasil: "C",
          },
          {
            Nama_MK: "Natural Language Processing",
            Nilai: 78,
            Hasil: "B",
          },
          {
            Nama_MK: "Bussiness Process Re-Engineering",
            Nilai: 55,
            Hasil: "B",
          },
        ],
      },
      {
        Nama_Kel: "Intelligence Systems",
        MK: [
          {
            Nama_MK: "Artificial Neural Network",
            Nilai: 72,
            Hasil: "B",
          },
          {
            Nama_MK: "Computer Vision",
            Nilai: 76,
            Hasil: "B",
          },
        ],
      },
      {
        Nama_Kel: "Game Development",
        MK: [
          {
            Nama_MK: "Game Development",
            Nilai: 42,
            Hasil: "D",
          },
          {
            Nama_MK: "Game Design",
            Nilai: 56,
            Hasil: "C",
          },
          {
            Nama_MK: "Java Programming",
            Nilai: 59,
            Hasil: "C",
          },
        ],
      },
    ],
  },
];

console.log(a);

var totalMK = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var rataMK = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var totalMhs = [0, 0, 0];
var rataMhs = [0, 0, 0];

var nilaimhs = {
  M1: [0],
  M2: [0],
  M3: [0],
};
var hasil1 = {
  A: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  B: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  C: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};


// // total nilai MK
// for (var c = 0; c < a.length; c++) {
//   for (var b = 0; b < a[c].Kelompok.length; b++) {
//     for (var d = 0; d < a[c].Kelompok[b].MK.length; d++) {
//       totaltest[c] =totaltest[c] + a[c].Kelompok[b].MK[d].Nilai;
//     }
//   }
// }

// console.log(totaltest)

// for (var c=0; c < a.length; c++){
//   ratacek[c] = totaltest[c]/(a[c].Kelompok[0].MK.length+a[c].Kelompok[1].MK.length+a[c].Kelompok[2].MK.length)
//   }

// total nilai MK
for (var c = 0; c < a.length; c++) {
  for (var b = 0; b < a[c].Kelompok.length; b++) {
    for (var d = 0; d < a[c].Kelompok[b].MK.length; d++) {
      if (a[c].Kelompok[b].MK[d].Nama_MK == "Data Mining and Data Analytics") {
        totalMK[0] = totalMK[0] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Machine Learning") {
        totalMK[1] = totalMK[1] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Natural Language Processing") {
        totalMK[2] = totalMK[2] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Bussiness Process Re-Engineering") {
        totalMK[3] = totalMK[3] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Artificial Neural Network") {
        totalMK[4] = totalMK[4] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Computer Vision") {
        totalMK[5] = totalMK[5] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Game Development") {
        totalMK[6] = totalMK[6] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Game Design") {
        totalMK[7] = totalMK[7] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Kelompok[b].MK[d].Nama_MK == "Java Programming") {
        totalMK[8] = totalMK[8] + a[c].Kelompok[b].MK[d].Nilai;
      }
    }
  }
}

console.log(totalMK);

// rata-rata MK
for (var c = 0; c < 9; c++) {
  rataMK[c] = Math.ceil(totalMK[c] / a.length);
}

console.log(rataMK)

//total nilai MHs
for (var c = 0; c < a.length; c++) {
  for (var b = 0; b < a[c].Kelompok.length; b++) {
    for (var d = 0; d < a[c].Kelompok[b].MK.length; d++) {
      if (a[c].Nama == "Mhs1") {
        totalMhs[0] = totalMhs[0] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Nama == "Mhs2") {
        totalMhs[1] = totalMhs[1] + a[c].Kelompok[b].MK[d].Nilai;
      } else if (a[c].Nama == "Mhs3") {
        totalMhs[2] = totalMhs[2] + a[c].Kelompok[b].MK[d].Nilai;
      }
    }
  }
}

console.log(totalMhs);

// rata-rata Mhs
for (var c = 0; c < a.length; c++) {
  rataMhs[c] = Math.ceil( totalMhs[c] / (a[c].Kelompok[0].MK.length + a[c].Kelompok[1].MK.length + a[c].Kelompok[2].MK.length)
  );
}

console.log(rataMhs);

// nilai baru
for (var c = 0; c < a.length; c++) {
  for (var b = 0; b < a[c].Kelompok.length; b++) {
    for (var d = 0; d < a[c].Kelompok[b].MK.length; d++) {
      if (c == 0) {
        if (b == 0) {
          nilaimhs.M1[d] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        } else if (b == 1) {
          nilaimhs.M1[d + 4] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        } else if (b == 2) {
          nilaimhs.M1[d + 6] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        }
      } else if (c == 1) {
        if (b == 0) {
          nilaimhs.M2[d] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        } else if (b == 1) {
          nilaimhs.M2[d + 4] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        } else if (b == 2) {
          nilaimhs.M2[d + 6] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        }
      } else if (c == 2) {
        if (b == 0) {
          nilaimhs.M3[d] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        } else if (b == 1) {
          nilaimhs.M3[d + 4] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        } else if (b == 2) {
          nilaimhs.M3[d + 6] = a[c].Kelompok[b].MK[d].Nilai - rataMhs[c];
        }
      }
    }
  }
}
console.log(nilaimhs);

// // perkallian antar nilai (a*a, a*b, dst)
for (var c = 0; c < nilaimhs.M1.length; c++) {
    hasil1.A = nilaimhs.M1[0] * nilaimhs.M2[0]
    hasil1.A = nilaimhs.M1[1] * nilaimhs.M2[1]
    hasil1.A = nilaimhs.M1[2] * nilaimhs.M2[2]
    hasil1.A = nilaimhs.M1[3] * nilaimhs.M2[3]
    hasil1.A = nilaimhs.M1[4] * nilaimhs.M2[4]
}

console.log(hasil1)
// for (var d = 0; d < nilaibaru.K2.length; d++) {
//     hasil2.K21[d] = (nilaibaru.K2[d] * nilaibaru.K1[d]);
//     hasil2.K22[d] = (nilaibaru.K2[d] * nilaibaru.K2[d]);
//     hasil2.K23[d] = (nilaibaru.K2[d] * nilaibaru.K3[d]);
//     hasil2.K24[d] = (nilaibaru.K2[d] * nilaibaru.K4[d]);
//     hasil2.K25[d] = (nilaibaru.K2[d] * nilaibaru.K5[d]);
// }
// for (var d = 0; d < nilaibaru.K3.length; d++) {
//     hasil3.K31[d] = (nilaibaru.K3[d] * nilaibaru.K1[d]);
//     hasil3.K32[d] = (nilaibaru.K3[d] * nilaibaru.K2[d]);
//     hasil3.K33[d] = (nilaibaru.K3[d] * nilaibaru.K3[d]);
//     hasil3.K34[d] = (nilaibaru.K3[d] * nilaibaru.K4[d]);
//     hasil3.K35[d] = (nilaibaru.K3[d] * nilaibaru.K5[d]);
// }
// for (var d = 0; d < nilaibaru.K4.length; d++) {
//     hasil4.K41[d] = (nilaibaru.K4[d] * nilaibaru.K1[d]);
//     hasil4.K42[d] = (nilaibaru.K4[d] * nilaibaru.K2[d]);
//     hasil4.K43[d] = (nilaibaru.K4[d] * nilaibaru.K3[d]);
//     hasil4.K44[d] = (nilaibaru.K4[d] * nilaibaru.K4[d]);
//     hasil4.K45[d] = (nilaibaru.K4[d] * nilaibaru.K5[d]);
// }
// for (var d = 0; d < nilaibaru.K5.length; d++) {
//     hasil5.K51[d] = (nilaibaru.K5[d] * nilaibaru.K1[d]);
//     hasil5.K52[d] = (nilaibaru.K5[d] * nilaibaru.K2[d]);
//     hasil5.K53[d] = (nilaibaru.K5[d] * nilaibaru.K3[d]);
//     hasil5.K54[d] = (nilaibaru.K5[d] * nilaibaru.K4[d]);
//     hasil5.K55[d] = (nilaibaru.K5[d] * nilaibaru.K5[d]);
// }

// console.log(hasil1);
// // console.log(hasil2);
// // console.log(hasil3);
// // console.log(hasil4);
// // console.log(hasil5);

// var totalK11 = 0; var totalK12 = 0; var totalK13 = 0; var totalK14 = 0; var totalK15 = 0;
// var totalK21 = 0; var totalK22 = 0; var totalK23 = 0; var totalK24 = 0; var totalK25 = 0;
// var totalK31 = 0; var totalK32 = 0; var totalK33 = 0; var totalK34 = 0; var totalK35 = 0;
// var totalK41 = 0; var totalK42 = 0; var totalK43 = 0; var totalK44 = 0; var totalK45 = 0;
// var totalK51 = 0; var totalK52 = 0; var totalK53 = 0; var totalK54 = 0; var totalK55 = 0;

// // total nilai kali
// for (var d = 0; d < hasil1.K11.length;d++) {
//     totalK11 = totalK11+ hasil1.K11[d]
//     totalK12 = totalK12+ hasil1.K12[d]
//     totalK13 = totalK13+ hasil1.K13[d]
//     totalK14 = totalK14+ hasil1.K14[d]
//     totalK15 = totalK15+ hasil1.K15[d]
// }
// for (var d = 0; d < hasil2.K21.length;d++) {
//     totalK21 = totalK21+ hasil2.K21[d]
//     totalK22 = totalK22+ hasil2.K22[d]
//     totalK23 = totalK23+ hasil2.K23[d]
//     totalK24 = totalK24+ hasil2.K24[d]
//     totalK25 = totalK25+ hasil2.K25[d]
// }
// for (var d = 0; d < hasil3.K31.length;d++) {
//     totalK31 = totalK31+ hasil3.K31[d]
//     totalK32 = totalK32+ hasil3.K32[d]
//     totalK33 = totalK33+ hasil3.K33[d]
//     totalK34 = totalK34+ hasil3.K34[d]
//     totalK35 = totalK35+ hasil3.K35[d]
// }
// for (var d = 0; d < hasil4.K41.length;d++) {
//     totalK41 = totalK41+ hasil4.K41[d]
//     totalK42 = totalK42+ hasil4.K42[d]
//     totalK43 = totalK43+ hasil4.K43[d]
//     totalK44 = totalK44+ hasil4.K44[d]
//     totalK45 = totalK45+ hasil4.K45[d]
// }
// for (var d = 0; d < hasil5.K51.length;d++) {
//     totalK51 = totalK51+ hasil5.K51[d]
//     totalK52 = totalK52+ hasil5.K52[d]
//     totalK53 = totalK53+ hasil5.K53[d]
//     totalK54 = totalK54+ hasil5.K54[d]
//     totalK55 = totalK55+ hasil5.K55[d]
// }

// console.log(totalK11)
// // console.log(totalK12)

// // K=Kuadrat
// for (var d = 0; d < hasil1.K11.length;d++) {
//     KA1 = Math.sqrt(totalK11)
//     KA2 = Math.sqrt(totalK12)
//     KA3 = Math.sqrt(totalK13)
//     KA4 = Math.sqrt(totalK14)
//     KA5 = Math.sqrt(totalK15)
// }

// // console.log(KA1)
// // console.log(KA2)
// // console.log(KA3)
// // console.log(KA4)
// // console.log(KA5)

// // var sim = [simK11, simK12, simK13, simK14, simK15]

// var simK11 = 0; var simK12 = 0; var simK13 = 0; var simK14 = 0; var simK15 = 0;
// var simK21 = 0; var simK22 = 0; var simK23 = 0; var simK24 = 0; var simK25 = 0;
// var simK31 = 0; var simK32 = 0; var simK33 = 0; var simK34 = 0; var simK35 = 0;
// var simK41 = 0; var simK42 = 0; var simK43 = 0; var simK44 = 0; var simK45 = 0;
// var simK51 = 0; var simK52 = 0; var simK53 = 0; var simK54 = 0; var simK55 = 0;

// // perhitungan similarity + total nilai sim
// for (var d = 0; d < hasil1.K11.length;d++) {
//     simK11 = totalK11/(KA1*KA1)
//     simK12 = totalK12/(KA1*KA2)
//     simK13 = totalK13/(KA1*KA3)
//     simK14 = totalK14/(KA1*KA4)
//     simK15 = totalK15/(KA1*KA5)
//     var sumSim1 = Math.abs(simK11+simK12+simK13+simK14+simK15)
// }

// for (var d = 0; d < hasil2.K21.length;d++) {
//     simK21 = totalK12/(KA2*KA1)
//     simK22 = totalK22/(KA2*KA2)
//     simK23 = totalK23/(KA2*KA3)
//     simK24 = totalK24/(KA2*KA4)
//     simK25 = totalK25/(KA2*KA5)
//     var sumSim2 = Math.abs(simK21+simK22+simK23+simK24+simK25)
// }

// for (var d = 0; d < hasil3.K31.length;d++) {
//     simK31 = totalK31/(KA3*KA1)
//     simK32 = totalK32/(KA3*KA2)
//     simK33 = totalK33/(KA3*KA3)
//     simK34 = totalK34/(KA3*KA4)
//     simK35 = totalK35/(KA3*KA5)
//     var sumSim3 = Math.abs(simK31+simK32+simK33+simK34+simK35)
// }

// for (var d = 0; d < hasil4.K41.length;d++) {
//     simK41 = totalK41/(KA4*KA1)
//     simK42 = totalK42/(KA4*KA2)
//     simK43 = totalK43/(KA4*KA3)
//     simK44 = totalK44/(KA4*KA4)
//     simK45 = totalK45/(KA4*KA5)
//     var sumSim4 = Math.abs(simK41+simK42+simK43+simK44+simK45)
// }

// for (var d = 0; d < hasil5.K51.length;d++) {
//     simK51 = totalK51/(KA5*KA1)
//     simK52 = totalK52/(KA5*KA2)
//     simK53 = totalK53/(KA5*KA3)
//     simK54 = totalK54/(KA5*KA4)
//     simK55 = totalK55/(KA5*KA5)
//     var sumSim5 = Math.abs(simK51+simK52+simK53+simK54+simK55)
// }

// var prediksiK11 = 0; var prediksiK12 = 0; var prediksiK13 = 0; var prediksiK14 = 0; var prediksiK15 = 0;
// var prediksiK21 = 0; var prediksiK22 = 0; var prediksiK23 = 0; var prediksiK24 = 0; var prediksiK25 = 0;
// var prediksiK31 = 0; var prediksiK32 = 0; var prediksiK33 = 0; var prediksiK34 = 0; var prediksiK35 = 0;
// var prediksiK41 = 0; var prediksiK42 = 0; var prediksiK43 = 0; var prediksiK44 = 0; var prediksiK45 = 0;
// var prediksiK51 = 0; var prediksiK52 = 0; var prediksiK53 = 0; var prediksiK54 = 0; var prediksiK55 = 0;

// // perhitungan nilai prediksi
// for (var d = 0; d < nilaibaru.K1.length;d++) {
//     prediksiK11 = (nilaibaru.K1[d] * simK11)+(nilaibaru.K2[d] * simK12)+(nilaibaru.K3[d] * simK13)+(nilaibaru.K4[d] * simK14)+(nilaibaru.K5[d] * simK15)
//     prediksiK21 = (nilaibaru.K1[d] * simK11)+(nilaibaru.K2[d] * simK12)+(nilaibaru.K3[d] * simK13)+(nilaibaru.K4[d] * simK14)+(nilaibaru.K5[d] * simK15)
//     prediksiK31 = (nilaibaru.K1[d] * simK11)+(nilaibaru.K2[d] * simK12)+(nilaibaru.K3[d] * simK13)+(nilaibaru.K4[d] * simK14)+(nilaibaru.K5[d] * simK15)
//     prediksiK41 = (nilaibaru.K1[d] * simK11)+(nilaibaru.K2[d] * simK12)+(nilaibaru.K3[d] * simK13)+(nilaibaru.K4[d] * simK14)+(nilaibaru.K5[d] * simK15)
//     prediksiK51 = (nilaibaru.K1[d] * simK11)+(nilaibaru.K2[d] * simK12)+(nilaibaru.K3[d] * simK13)+(nilaibaru.K4[d] * simK14)+(nilaibaru.K5[d] * simK15)
// }

// for (var d = 0; d < nilaibaru.K2.length;d++) {
//     prediksiK12 = (nilaibaru.K1[d] * simK21)+(nilaibaru.K2[d] * simK22)+(nilaibaru.K3[d] * simK23)+(nilaibaru.K4[d] * simK24)+(nilaibaru.K5[d] * simK25)
//     prediksiK22 = (nilaibaru.K1[d] * simK21)+(nilaibaru.K2[d] * simK22)+(nilaibaru.K3[d] * simK23)+(nilaibaru.K4[d] * simK24)+(nilaibaru.K5[d] * simK25)
//     prediksiK32 = (nilaibaru.K1[d] * simK21)+(nilaibaru.K2[d] * simK22)+(nilaibaru.K3[d] * simK23)+(nilaibaru.K4[d] * simK24)+(nilaibaru.K5[d] * simK25)
//     prediksiK42 = (nilaibaru.K1[d] * simK21)+(nilaibaru.K2[d] * simK22)+(nilaibaru.K3[d] * simK23)+(nilaibaru.K4[d] * simK24)+(nilaibaru.K5[d] * simK25)
//     prediksiK52 = (nilaibaru.K1[d] * simK21)+(nilaibaru.K2[d] * simK22)+(nilaibaru.K3[d] * simK23)+(nilaibaru.K4[d] * simK24)+(nilaibaru.K5[d] * simK25)
// }

// for (var d = 0; d < nilaibaru.K3.length;d++) {
//     prediksiK13 = (nilaibaru.K1[d] * simK31)+(nilaibaru.K2[d] * simK32)+(nilaibaru.K3[d] * simK33)+(nilaibaru.K4[d] * simK34)+(nilaibaru.K5[d] * simK35)
//     prediksiK23 = (nilaibaru.K1[d] * simK31)+(nilaibaru.K2[d] * simK32)+(nilaibaru.K3[d] * simK33)+(nilaibaru.K4[d] * simK34)+(nilaibaru.K5[d] * simK35)
//     prediksiK33 = (nilaibaru.K1[d] * simK31)+(nilaibaru.K2[d] * simK32)+(nilaibaru.K3[d] * simK33)+(nilaibaru.K4[d] * simK34)+(nilaibaru.K5[d] * simK35)
//     prediksiK43 = (nilaibaru.K1[d] * simK31)+(nilaibaru.K2[d] * simK32)+(nilaibaru.K3[d] * simK33)+(nilaibaru.K4[d] * simK34)+(nilaibaru.K5[d] * simK35)
//     prediksiK53 = (nilaibaru.K1[d] * simK31)+(nilaibaru.K2[d] * simK32)+(nilaibaru.K3[d] * simK33)+(nilaibaru.K4[d] * simK34)+(nilaibaru.K5[d] * simK35)
// }

// for (var d = 0; d < nilaibaru.K4.length;d++) {
//     prediksiK14 = (nilaibaru.K1[d] * simK41)+(nilaibaru.K2[d] * simK42)+(nilaibaru.K3[d] * simK43)+(nilaibaru.K4[d] * simK44)+(nilaibaru.K5[d] * simK45)
//     prediksiK24 = (nilaibaru.K1[d] * simK41)+(nilaibaru.K2[d] * simK42)+(nilaibaru.K3[d] * simK43)+(nilaibaru.K4[d] * simK44)+(nilaibaru.K5[d] * simK45)
//     prediksiK34 = (nilaibaru.K1[d] * simK41)+(nilaibaru.K2[d] * simK42)+(nilaibaru.K3[d] * simK43)+(nilaibaru.K4[d] * simK44)+(nilaibaru.K5[d] * simK45)
//     prediksiK44 = (nilaibaru.K1[d] * simK41)+(nilaibaru.K2[d] * simK42)+(nilaibaru.K3[d] * simK43)+(nilaibaru.K4[d] * simK44)+(nilaibaru.K5[d] * simK45)
//     prediksiK54 = (nilaibaru.K1[d] * simK41)+(nilaibaru.K2[d] * simK42)+(nilaibaru.K3[d] * simK43)+(nilaibaru.K4[d] * simK44)+(nilaibaru.K5[d] * simK45)
// }

// for (var d = 0; d < nilaibaru.K5.length;d++) {
//     prediksiK15 = (nilaibaru.K1[d] * simK51)+(nilaibaru.K2[d] * simK52)+(nilaibaru.K3[d] * simK53)+(nilaibaru.K4[d] * simK54)+(nilaibaru.K5[d] * simK55)
//     prediksiK25 = (nilaibaru.K1[d] * simK51)+(nilaibaru.K2[d] * simK52)+(nilaibaru.K3[d] * simK53)+(nilaibaru.K4[d] * simK54)+(nilaibaru.K5[d] * simK55)
//     prediksiK35 = (nilaibaru.K1[d] * simK51)+(nilaibaru.K2[d] * simK52)+(nilaibaru.K3[d] * simK53)+(nilaibaru.K4[d] * simK54)+(nilaibaru.K5[d] * simK55)
//     prediksiK45 = (nilaibaru.K1[d] * simK51)+(nilaibaru.K2[d] * simK52)+(nilaibaru.K3[d] * simK53)+(nilaibaru.K4[d] * simK54)+(nilaibaru.K5[d] * simK55)
//     prediksiK55 = (nilaibaru.K1[d] * simK51)+(nilaibaru.K2[d] * simK52)+(nilaibaru.K3[d] * simK53)+(nilaibaru.K4[d] * simK54)+(nilaibaru.K5[d] * simK55)
// }

// for (var d = 0; d < nilaibaru.K1.length;d++) {
//     PK11 = rata[d] + (prediksiK11 / sumSim1)
//     PK21 = rata[d] + (prediksiK21 / sumSim1)
//     PK31 = rata[d] + (prediksiK31 / sumSim1)
//     PK41 = rata[d] + (prediksiK41 / sumSim1)
//     PK51 = rata[d] + (prediksiK51 / sumSim1)

//     PK12 = rata[d] + (prediksiK12 / sumSim2)
//     PK22 = rata[d] + (prediksiK22 / sumSim2)
//     PK32 = rata[d] + (prediksiK32 / sumSim2)
//     PK42 = rata[d] + (prediksiK42 / sumSim2)
//     PK52 = rata[d] + (prediksiK52 / sumSim2)

//     PK13 = rata[d] + (prediksiK13 / sumSim3)
//     PK23 = rata[d] + (prediksiK23 / sumSim3)
//     PK33 = rata[d] + (prediksiK33 / sumSim3)
//     PK43 = rata[d] + (prediksiK43 / sumSim3)
//     PK53 = rata[d] + (prediksiK53 / sumSim3)

//     PK14 = rata[d] + (prediksiK14 / sumSim4)
//     PK24 = rata[d] + (prediksiK24 / sumSim4)
//     PK34 = rata[d] + (prediksiK34 / sumSim4)
//     PK44 = rata[d] + (prediksiK44 / sumSim4)
//     PK54 = rata[d] + (prediksiK54 / sumSim4)

//     PK15 = rata[d] + (prediksiK15 / sumSim5)
//     PK25 = rata[d] + (prediksiK25 / sumSim5)
//     PK35 = rata[d] + (prediksiK35 / sumSim5)
//     PK45 = rata[d] + (prediksiK45 / sumSim5)
//     PK55 = rata[d] + (prediksiK55 / sumSim5)
// }

// for (var d = 0; d < nilaibaru.K1.length;d++) {
//     MAEK11 = PK11 - nilaibaru.K1[d]
//     MAEK21 = PK21 - nilaibaru.K2[d]
//     MAEK31 = PK31 - nilaibaru.K3[d]
//     MAEK41 = PK41 - nilaibaru.K4[d]
//     MAEK51 = PK51 - nilaibaru.K5[d]

//     MAEK12 = PK12 - nilaibaru.K1[d]
//     MAEK22 = PK22 - nilaibaru.K2[d]
//     MAEK32 = PK32 - nilaibaru.K3[d]
//     MAEK42 = PK42 - nilaibaru.K4[d]
//     MAEK52 = PK52 - nilaibaru.K5[d]

//     MAEK13 = PK13 - nilaibaru.K1[d]
//     MAEK23 = PK23 - nilaibaru.K2[d]
//     MAEK33 = PK33 - nilaibaru.K3[d]
//     MAEK43 = PK43 - nilaibaru.K4[d]
//     MAEK53 = PK53 - nilaibaru.K5[d]

//     MAEK14 = PK14 - nilaibaru.K1[d]
//     MAEK24 = PK24 - nilaibaru.K2[d]
//     MAEK34 = PK34 - nilaibaru.K3[d]
//     MAEK44 = PK44 - nilaibaru.K4[d]
//     MAEK54 = PK54 - nilaibaru.K5[d]

//     MAEK15 = PK15 - nilaibaru.K1[d]
//     MAEK25 = PK25 - nilaibaru.K2[d]
//     MAEK35 = PK35 - nilaibaru.K3[d]
//     MAEK45 = PK45 - nilaibaru.K4[d]
//     MAEK55 = PK55 - nilaibaru.K5[d]
// }

// for (var d = 0; d < nilaibaru.K1.length;d++) {
//     MAET1 = (MAEK11 + MAEK12 + MAEK13 + MAEK14 + MAEK15)/5
//     MAET2 = (MAEK21 + MAEK22 + MAEK23 + MAEK24 + MAEK25)/5
//     MAET3 = (MAEK31 + MAEK32 + MAEK33 + MAEK34 + MAEK35)/5
//     MAET4 = (MAEK41 + MAEK42 + MAEK43 + MAEK44 + MAEK45)/5
//     MAET5 = (MAEK51 + MAEK52 + MAEK53 + MAEK54 + MAEK55)/5
// }

// console.log(MAET1)
// console.log(MAET2)
// console.log(MAET3)
// console.log(MAET4)
// console.log(MAET5)
