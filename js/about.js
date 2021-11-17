// jQuery to flip the text or image on click
// Referance: https://jefferson-cuartas.medium.com/how-to-create-a-flip-card-effect-using-javascript-767dd945210c
$('.flipContainer .flipper').click(function() {
	$(this).closest('.flipContainer').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
});
