const { events } = require("brigadier");

//Test
events.on("push", function(e, project) {
  console.log("received push for commit " + e.revision.commit)
})