const { request } = require("express");
const Matakuliah = require("../models/DataTest");

module.exports = {
  viewmatakuliah: async (req, res) => {
    try {
    
      const matakuliahd = await Matakuliah.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
     
      res.render("index", {
        matakuliahd,
        alert,
        title: "Admin", 
      });
    } catch (error) {
      res.redirect("/datamatakuliah");
    }
  },

  addmatakuliah: async (req, res) => {
    try {
      const {Nama, NIM, nama_MK1, nama_MK2, nama_MK3, nama_MK4, nama_MK5, nama_MK6, nama_MK7, nama_MK8, nama_MK9, nilai1, nilai2, nilai3, nilai4, nilai5, nilai6, nilai7, nilai8, nilai9, hasil1, hasil2, hasil3, hasil4, hasil5, hasil6, hasil7, hasil8, hasil9} = req.body;
      await Matakuliah.create({
        Nama:Nama,NIM:NIM, matkul: [{nama_MK: nama_MK1, nilai: nilai1, hasil: hasil1}, {nama_MK: nama_MK2, nilai: nilai2, hasil: hasil2}, {nama_MK: nama_MK3, nilai: nilai3, hasil: hasil3}, {nama_MK: nama_MK4, nilai: nilai4, hasil: hasil4}, {nama_MK: nama_MK5, nilai: nilai5, hasil: hasil5}, {nama_MK: nama_MK6, nilai: nilai6, hasil: hasil6}, {nama_MK: nama_MK7, nilai: nilai7, hasil: hasil7}, {nama_MK: nama_MK8, nilai: nilai8, hasil: hasil8}, {nama_MK: nama_MK9, nilai: nilai9, hasil: hasil9}]
      });

      req.flash("alertMessage", "Success add data Mahasiswa");
      req.flash("alertStatus", "success");
      res.redirect("/datamatakuliah");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/datamatakuliah");
    }
  },

  editmatakuliah: async (req, res) => {
    try {
        const {Nama, NIM, nama_MK1, nama_MK2, nama_MK3, nama_MK4, nama_MK5, nama_MK6, nama_MK7, nama_MK8, nama_MK9, nilai1, nilai2, nilai3, nilai4, nilai5, nilai6, nilai7, nilai8, nilai9, hasil1, hasil2, hasil3, hasil4, hasil5, hasil6, hasil7, hasil8, hasil9} = req.body;
    
      const matakuliahd = await Matakuliah.findOne({ _id: id });
        matakuliahd.Nama = Nama;
        matakuliahd.NIM = NIM;
        matakuliahd.matkul[0].nama_MK[0] = nama_MK1;
        matakuliahd.matkul[0].nilai[0] = nilai1;
        matakuliahd.matkul[0].hasil[0] = hasil1;
        matakuliahd.matkul[0].nama_MK[1] = nama_MK2;
        matakuliahd.matkul[0].nilai[1] = nilai2;
        matakuliahd.matkul[0].hasil[1] = hasil2;
        matakuliahd.matkul[0].nama_MK[2] = nama_MK3;
        matakuliahd.matkul[0].nilai[2] = nilai3;
        matakuliahd.matkul[0].hasil[2] = hasil3;
        matakuliahd.matkul[0].nama_MK[3] = nama_MK4;
        matakuliahd.matkul[0].nilai[3] = nilai4;
        matakuliahd.matkul[0].hasil[3] = hasil4;
        matakuliahd.matkul[0].nama_MK[4] = nama_MK5;
        matakuliahd.matkul[0].nilai[4] = nilai5;
        matakuliahd.matkul[0].hasil[4] = hasil5;
        matakuliahd.matkul[0].nama_MK[5] = nama_MK6;
        matakuliahd.matkul[0].nilai[5] = nilai6;
        matakuliahd.matkul[0].hasil[5] = hasil6;
        matakuliahd.matkul[0].nama_MK[6] = nama_MK7;
        matakuliahd.matkul[0].nilai[6] = nilai7;
        matakuliahd.matkul[0].hasil[6] = hasil7;
        matakuliahd.matkul[0].nama_MK[7] = nama_MK8;
        matakuliahd.matkul[0].nilai[7] = nilai8;
        matakuliahd.matkul[0].hasil[7] = hasil8;
        matakuliahd.matkul[0].nama_MK[8] = nama_MK9;
        matakuliahd.matkul[0].nilai[8] = nilai9;
        matakuliahd.matkul[0].hasil[8] = hasil9;


      await matakuliahd.save();

      req.flash("alertMessage", "Success edit data mahasiswa");
      req.flash("alertStatus", "success");
      res.redirect("/datamatakuliah");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/datamatakuliah");
    }
  },

  deletematakuliah: async (req, res) => {
    try {
      const { id } = req.params;
      const matakuliahd = await Matakuliah.findOne({ _id: id });
      await matakuliahd.remove();
      req.flash("alertMessage", "Success delete data mahasiswa");
      req.flash("alertStatus", "warning");
      res.redirect("/datamatakuliah");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/datamatakuliah");
    }
  },
};