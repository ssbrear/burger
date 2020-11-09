$(".btn-danger").on("click", function (event) {
  const id = $(this).data("id");
  console.log(id);
  const newStatus = true;
  const statusObj = {
    devoured: newStatus,
  };

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: statusObj,
  }).then(() => {
    console.log("Changed status of burger " + id + " to " + newStatus);
    location.reload();
  });
});

$("#create-form").on("submit", function (event) {
  event.preventDefault();
  const newName = $("#burger_name").val().trim();
  console.log(newName);
  const newBurger = {
    burger_name: newName,
    devoured: 0,
  };

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(() => {
    console.log("created new burger");
    location.reload();
  });
});
