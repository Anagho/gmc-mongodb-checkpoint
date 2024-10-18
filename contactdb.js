// Create a database called "contact"
/**
    use contact
**/
// Create contactlist collection
db.createCollection("contactlist");

// Insert documents into the collection
db.contactlist.insertMany([
  { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  {
    lastName: "Emilie",
    firstName: "brouge",
    email: "emilie.b@gmail.com",
    age: 40,
  },
  { lastName: "Alex", firstName: "brown", age: 4 },
  { lastName: "Denzel", firstName: "Washington", age: 3 },
]);

// Display the contact list
db.contactlist.find().pretty();

// Find a specific contact by their unique _id. Replace ObjectId with the actual ID of the contact:
db.contactlist.find({ _id: ObjectId("6711c72b64baac84b186b01d") }).pretty();

// Show contacts with age > 18 and name containing "ah"
db.contactlist
  .find({
    age: { $gt: 18 },
    $or: [
      { firstName: { $regex: "ah", $options: "i" } },
      { lastName: { $regex: "ah", $options: "i" } },
    ],
  })
  .pretty();

// Change the contact's first name from "Kefi Seif" to "Kefi Anis"
db.contactlist.updateOne(
  { firstName: "Seif", lastName: "Kefi" },
  { $set: { firstName: "Anis" } }
);

// Delete contacts aged under 5
db.contactlist.deleteMany({ age: { $lt: 5 } });

//  Show all of the contacts list (after deletion)
db.contactlist.find().pretty();




