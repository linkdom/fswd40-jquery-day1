$("form").submit(function(e) {

	e.preventDefault();




});

//$("form#myform").remove()

var z = 5

for (var i = 0; i < z; i++) {
	var newItem = $("<div><p>Hallo</p></div>")
	$("article").append(newItem)
}

//document.getElementById('msg').value = "Search for..."
$('input#msg').val('Search for...')
$("input#msg").attr("value", "http://www.codefactory.wien")
$("div").addClass("box")
$("a").attr("href", "http://www.codefactory.wien")
