exports.seed = async function(knex) {
  await knex("cars").insert([
    { 
      make: "Cheverolet", 
      model: "K10", 
      VIN: "VF38EAHRMFL039576", 
      milage: "300000", 
      transmission: "automatic",
      title: "clean"
    },
    { 
      make: "Cheverolet", 
      model: "K5 Blazer", 
      VIN: "VF38EAHRMFL039576", 
      milage: "300000", 
      transmission: "automatic",
      title: "clean"
    },
    { 
      make: "GMC", 
      model: "C2500", 
      VIN: "VF38EAHRMFL039576", 
      milage: "300000", 
      transmission: "automatic",
      title: "clean"
    }
  ])
};
