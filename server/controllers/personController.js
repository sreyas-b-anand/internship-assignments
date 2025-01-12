const Person = require("../models/personSchema");
const mongoose = require("mongoose");
const getPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    if (!persons) {
      throw new Error("Unable to fetch data");
    }

    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getPerson = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findById(id);
    if (!person) {
      return res.status(404).json({ error: "No such person" });
    }
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPerson = async (req, res) => {
  const { name, dob } = req.body;
  if(!name || !dob ){
    throw new Error("An error occured")
  }
  try {
    await Person.create({ name, dob });

    res.status(200).json({ response: "added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePerson = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such person" });
    }
    await Person.findByIdAndDelete({ _id: id });

    res.status(200).json({ response: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editPerson = async (req, res) => {
  const { id } = req.params
  const { name,  dob } = req.body;
console.log(req.method )
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such person" });
    }
    await Person.findOneAndUpdate(
      { _id: id },
      { name, dob },
      { new: true, runValidators: true }
    );

    res.status(200).json({ response: "Edited successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPersons, getPerson, addPerson, deletePerson, editPerson };
