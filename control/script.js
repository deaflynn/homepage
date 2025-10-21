/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

// changing theme
$(".lightBtn").click(function () {
	$(".container").removeClass("garden jazz metal");
	$(".profile").removeClass("garden jazz metal");
	$(".pfp").removeClass("garden jazz metal");
	$("body").removeClass("garden jazz metal");
});
$(".gardenBtn").click(function () {
	$(".container").toggleClass("garden");
	$(".profile").toggleClass("garden");
	$(".pfp").toggleClass("garden");
	$("body").toggleClass("garden");

	$(".container").removeClass("jazz metal");
	$(".profile").removeClass("jazz metal");
	$(".pfp").removeClass("jazz metal");
	$("body").removeClass("jazz metal");
});
$(".jazzBtn").click(function () {
	$(".container").toggleClass("jazz");
	$(".profile").toggleClass("jazz");
	$(".pfp").toggleClass("jazz");
	$("body").toggleClass("jazz");

	$(".container").removeClass("garden metal");
	$(".profile").removeClass("garden metal");
	$(".pfp").removeClass("garden metal");
	$("body").removeClass("garden metal");
});
$(".metalBtn").click(function () {
	$(".container").toggleClass("metal");
	$(".profile").toggleClass("metal");
	$(".pfp").toggleClass("metal");
	$("body").toggleClass("metal");

	$(".container").removeClass("garden jazz");
	$(".profile").removeClass("garden jazz");
	$(".profile").removeClass("garden jazz");
	$("body").removeClass("garden jazz");
});

$(function () {
	$(".dropdown-content button").on("click", function () {
		$(".dropdown-content button").removeClass("active"); // clear previous
		$(this).addClass("active"); // highlight current
		$(".banner").hide(); // keep your existing behavior
	});
});
