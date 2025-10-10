$(".darkBtn").click(function () {
	$(".box").toggleClass("dark");
	$("body").toggleClass("dark");
});

$(".spinBtn").click(function () {
	$(".box").toggleClass("spin");
});

$(".revealBtn").click(function () {
	// $(".chair").addClass("reveal");
	// $(".chair").css("display", "block");
	$(".chair").show();
	$(".revealBtn").hide();
});

$(".draggable").draggable({
    snap:true
});
