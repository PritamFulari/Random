db.createCollection("Employee", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["Name", "joining_year", "Address"],
      properties: {
        Name: {
          bsonType: "string",
          description: "Employee's name must be a string",
        },
        joining_year: {
          bsonType: "int",
          minimum: 2010,
          maximum: 2024,
          description:
            "Employee's joining year must be an integer between 2000 and 2024",
        },
        Address: {
          bsonType: "string",
          description: "Employee's Address must be a string",
        },
      },
    },
  },
});


db.createCollection("Employee", {validator: {$jsonSchema: { bsonType: "object",required: ["Name", "joining_year", "Address"],properties: {Name: { bsonType: "string",  description: "Employee's name must be a string", }, joining_year: {  bsonType: "int",  minimum: 2010,  maximum: 2024,  description:   "Employee's joining year must be an integer between 2000 and 2024", }, Address: { bsonType: "string", description: "Employee's Address must be a string", }, }, }, },});

{
    Name:"Ajay", 
    joining_year:2005,
    Address: "Delhi"
}

db.runCommand({
  insert: "Employee",
  documents: [
    {
      name: "Anil",
      joining_year: 2005,
      Address: "Delhi"
    }
  ],
  bypassDocumentValidation: true
})


db.runCommand({ insert: "Employee",documents: [ { name: "Anil", joining_year: 2005,Address: "Delhi" } ], bypassDocumentValidation: true})
