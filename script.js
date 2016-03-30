

$("ul").on("click", "button", function(e) {
    e.preventDefault();
    $(this).parent().remove();
});

$('#list_form').submit(function(event) {
  event.preventDefault(); // <-- prevents browser refresh on submit

  $(this).children('input:text').each(function(index, elem) {
    var value = $(elem).val() // <-- makes variable for the value of input fields

    if (!value) {
    alert('Please enter text to add a list item');
    return;
    } else {
    $('.to_do_list').append('<li><label>' + value + '</label><button class ="del">Delete</button></li>'); // <-- appends input values to location specified
    $(elem).val(''); // <-- clears inputs
    }
  });

  console.log(event);
})

