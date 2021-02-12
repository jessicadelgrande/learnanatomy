"use strict";

var bodyMap = [{
	name: "Deltoid",
	displayName: "Deltoid",
	origin: "Acromion process and clavicle and scapula",
	insertion: "Deltoid tuberosity of humerus",
	innervation: "Axillary nerve"
}, {
	name: "Pectoralis-major",
	displayName: "Pectoralis major",
	origin: "Ribs 2-6, sternum, clavicle",
	insertion: "Lateral crest of intertubercular groove of humerus",
	innervation: "Pectoral nerve"

}, {
	name: "Biceps-brachii-long-head",
	displayName: "Biceps brachii (long head)",
	origin: "Supraglenoid tubercle on scapula",
	insertion: "Radial tuberosity",
	innervation: "Musculocutaneous nerve"

}, {
	name: "Biceps-brachii-short-head",
	displayName: "Biceps brachii (short head)",
	origin: "Coracoid process of scapula",
	insertion: "Radial tuberosity",
	innervation: "Musculocutaneous nerve"

}, {
	name: "Brachioradialis",
	displayName: "Brachioradialis",
	origin: "Lateral supracondylar ridge of humerus",
	insertion: "Styloid process of radius",
	innervation: "Radial nerve"

}, {
	name: "External-abdominal-obliques",
	displayName: "External abdominal obliques",
	origin: "Ribs 5-12",
	insertion: "Rectus sheath, inguinal ligament, iliac crest",
	innervation: "Lower thoracic nerve"

}, {
	name: "Rectus-abdominis",
	displayName: "Rectus abdominis",
	origin: "Superior pubis, pelvic crest",
	insertion: "Inferior ribs, xiphoid process",
	innervation: "Lower thoracic nerve"

}, {
	name: "Gluteus-medius",
	displayName: "Gluteus medius",
	origin: "Outer aspect of ilium",
	insertion: "Superior aspect of greater trochanter of femur",
	innervation: "Superior gluteal nerve"

}, {
	name: "Sartorius",
	displayName: "Sartorius",
	origin: "Anterior superior iliac spine",
	insertion: "Medial surface of tibial tuberosity",
	innervation: "Femoral nerve"

}, {
	name: "Rectus-femoris",
	displayName: "Rectus femoris",
	origin: "Anterior inferior iliac spine",
	insertion: "Patella",
	innervation: "Femoral nerve"

}, {
	name: "Vastus-lateralis",
	displayName: "Vastus lateralis",
	origin: "Greater trochanter of femur",
	insertion: "Patella",
	innervation: "Femoral nerve"

}, {
	name: "Vastus-medialis",
	displayName: "Vastus medialis",
	origin: "Linea aspera of femur",
	insertion: "Patella",
	innervation: "Femoral nerve"

}, {
	name: "Gastrocnemius",
	displayName: "Gastrocnemius",
	origin: "Femoral condyles",
	insertion: "Calcaneus",
	innervation: "Tibial nerve"

}, {
	name: "Tibialis-anterior",
	displayName: "Tibialis anterior",
	origin: "Tibia and interosseous membrane",
	insertion: "1st metatarsal and medial cuneiform bone",
	innervation: "Deep fibular nerve"

}, {
	name: "Fibularis-longus",
	displayName: "Fibularis longus",
	origin: "Fibula",
	insertion: "1st metatarsal and medial cuneiform bone",
	innervation: "Superficial fibular nerve"

}];

// document.ready function wraps content
$(function () {
	// selects the muscle pair
	// let bilateral = $(this).data("name");
	// let bilateralSelector = $(`path[data-name=${bilateral}]`);
	//// TODO: pass as an argument into child functions?

	// body click handler
	$("path").on("click", function bodyClickHandler(oneMuscle, twoMuscle) {
		// clicked item pair will fill with colour
		// colour removed from anything not clicked
		var bilateralClick = $(this).data("name");
		var bilateralSelectorClick = $("path[data-name=" + bilateralClick + "]");
		bilateralSelectorClick.attr("class", "selectedMuscle");
		bilateralSelectorClick.addClass("selectedMuscle");
		$("path").not(bilateralSelectorClick).attr("class", "");

		// gets muscle information corresponding to the muscle clicked
		var muscleName = $(this).data("name");
		var matchedItem = bodyMap.filter(function (item) {
			return item.name.toUpperCase() === muscleName.toUpperCase();
		});

		// prints form results to screen
		//// TODO: should I loop this???
		var nameInfo = bodyMap.displayName;
		$('span.name').text(matchedItem[0].displayName);
		var originInfo = bodyMap.origin;
		$('span.origin').text(matchedItem[0].origin);
		var insertionInfo = bodyMap.insertion;
		$('span.insertion').text(matchedItem[0].insertion);
		var innervationInfo = bodyMap.innervation;
		$('span.innervation').text(matchedItem[0].innervation);

		// reset feedback when another muscle is clicked
		$("#nameFeedback, #originFeedback, #insertionFeedback, #innervationFeedback").text("");
		// erase previous user answer when new muscle is clicked
		$(".quizInput").val("");
		// quiz form appears when muscle is selected
		$(".quizForm").css({ "display": "inline" });

		// quiz form
		$("form").submit(function (e) {
			e.preventDefault();
			// name quiz
			var userInputName = $("#name__userAnswer").val().toLowerCase();
			var correctName = matchedItem[0].displayName.toLowerCase();
			if (userInputName === correctName) {
				$("span#nameFeedback").html("You're correct! The selected muscle is <font color=\"#5698af>" + correctName + "</font>.").css({ "color": "#19c452" });
			} else {
				$("span#nameFeedback").html("Sorry! The selected muscle is <font color=\"#5698af\">" + correctName + "</font>.").css({ 'color': '#f00' });
			}
			// origin quiz
			var userInputOrigin = $('#origin__userAnswer').val().toLowerCase();
			var correctOrigin = matchedItem[0].origin.toLowerCase();
			if (userInputOrigin === correctOrigin) {
				$('span#originFeedback').html("You're correct! The origin of " + correctName + " is <font color=\"#5698af\">" + correctOrigin + "</font>.").css({ 'color': '#19c452' });
			} else {
				$('span#originFeedback').html("Sorry! The correct origin of " + correctName + " is <font color=\"#5698af\">" + correctOrigin + "</font>.").css({ 'color': '#f00' });
			}
			// insertion quiz
			var userInputInsertion = $('#insertion__userAnswer').val().toLowerCase();
			var correctInsertion = matchedItem[0].insertion.toLowerCase();
			if (userInputInsertion === correctInsertion) {
				$('span#insertionFeedback').html("You're correct! The insertion of " + correctName + " is <font color=\"#5698af\">" + correctInsertion + "</font>.").css({ 'color': '#19c452' });
			} else {
				$('span#insertionFeedback').html("Sorry! The correct insertion of " + correctName + " is <font color=\"#5698af\">" + correctInsertion + "</font>.").css({ 'color': '#f00' });
			}
			// innervation quiz
			var userInputInnervation = $('#innervation__userAnswer').val().toLowerCase();
			var correctNerve = matchedItem[0].innervation.toLowerCase();
			if (userInputInnervation === correctNerve) {
				$('span#innervationFeedback').html("You're correct! The innervation of " + correctName + " is <font color=\"#5698af\">" + correctNerve + "</font>.").css({ 'color': '#19c452' });
			} else {
				$('span#innervationFeedback').html("Sorry! The correct innervation of " + correctName + " is <font color=\"#5698af\">" + correctNerve + "</font>.").css({ 'color': '#f00' });
			}
		});
	});

	// body hover handler
	$("path").on("mouseover", function () {
		var bilateral = $(this).data("name");
		var bilateralSelector = $("path[data-name=" + bilateral + "]");
		bilateralSelector.attr("id", "hoverMuscle");
		bilateralSelector.css("cursor", "pointer");
		$("path").not(bilateralSelector).attr("id", "");
	});
	$("path").on("mouseout", function () {
		$("path").attr("id", "");
	});

	// menu selection handlers and display of matching content
	$("#study__link").on("click", function () {
		$("path").attr("class", "");
		// content
		$("#about__content, #nameQuiz__content, #originQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#study__content").fadeIn();
		// menu
		$("#about__link, #nameQuiz__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#study__link").addClass("selectedLink");
	});
	$("#about__link").on("click", function () {
		$("path").attr("class", "");
		// content
		$("#nameQuiz__content, #originQuiz__content, #insertionQuiz__content, #innervationQuiz__content, #study__content").hide();
		$("#about__content").fadeIn();
		// menu
		$("#study__link, #nameQuiz__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#about__link").addClass("selectedLink");
	});
	$("#nameQuiz__link").on("click", function () {
		$("path").attr("class", "");
		// content
		$("#study__content, #about__content, #originQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#nameQuiz__content").fadeIn();
		// menu
		$("#study__link, #about__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#nameQuiz__link").addClass("selectedLink");
	});
	$("#originQuiz__link").on("click", function () {
		$("path").attr("class", "");
		// content
		$("#study__content, #about__content, #nameQuiz__content, #insertionQuiz__content, #innervationQuiz__content").hide();
		$("#originQuiz__content").fadeIn();
		// menu
		$("#study__link, #about__link, #nameQuiz__link, #insertionQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#originQuiz__link").addClass("selectedLink");
	});
	$("#insertionQuiz__link").on("click", function () {
		$("path").attr("class", "");
		// content
		$("#study__content, #about__content, #nameQuiz__content, #originQuiz__content, #innervationQuiz__content").hide();
		$("#insertionQuiz__content").fadeIn();
		// menu
		$("#study__link, #about__link, #nameQuiz__link, #originQuiz__link, #innervationQuiz__link").removeClass("selectedLink");
		$("#insertionQuiz__link").addClass("selectedLink");
	});
	$("#innervationQuiz__link").on("click", function () {
		$("path").attr("class", "");
		// content
		$("#study__content, #about__content, #nameQuiz__content, #originQuiz__content, #insertionQuiz__content").hide();
		$("#innervationQuiz__content").fadeIn();
		// menu
		$("#study__link, #about__link, #nameQuiz__link, #originQuiz__link, #insertionQuiz__link").removeClass("selectedLink");
		$("#innervationQuiz__link").addClass("selectedLink");
	});

	// clicking on new quiz in menu clears existing text input
	$("#nameQuiz__link, #originQuiz__link, #insertionQuiz__link, #innervationQuiz__link").on("click", function () {
		$("#nameFeedback, #originFeedback, #insertionFeedback, #innervationFeedback").text("");
	});
});