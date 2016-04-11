$(document).ready(function () {
		var log = $("#log");
		//click event
		//user wants to order
		$("button").on("click", function () {

			log.append($("input").val() + "<br/>")
				.append($("textarea").val() + "<br/>")
				.append($("select").val() + "<br/>")
				.append($("[name='gender']:checked").val() + "<br/>")
				.append($('input:checkbox:checked').map(function () {
					return this.value;
				}).get().join());

		})

		//focus event
		//changes background to grey
		$("input[type='text']").on("focus", function () {
			log.append("User focussed on the input <br/>");
			$(this).css("background-color", "grey");

		})

		//blur event
		//changes background to white
		$("input[type='text']").on("blur", function () {
			log.append("User moved away from the input <br/>");
			$(this).css("background-color", "white");

		})

		//mouseenter mouseleave envent
		//changes message on the button text
		$("button").on("mouseenter", function () {
				log.append("User is hovering on button <br/>");
				$(this).text("Order Now");

			})
			.on("mouseleave", function () {
				log.append("User is no longer hovering on the button <br/>");
				$(this).text("Order Now");

			})

		//select event
		//writes some html on the screen depending on the selection
		$("select").on("change", function () {
			log.append("User changed selection <br/>");
			var selInfo = $("#selectInfo"),
				choice = $(this).val();

			if (choice == "Galaxy S6") {
				selInfo.html("Galaxy S6");
			} else if (choice == "Iphone 6S") {
				selInfo.html("Iphone 6S");
			}
		})

	}) //end doc ready