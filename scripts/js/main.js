(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 750,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	//Buttons - long and short text.
	const short = document.getElementById('short');
	const long = document.getElementById('long');

	short.addEventListener('click', () => {
		long.classList.remove('active')
		short.classList.add('active');

		showShortText();
	});

	long.addEventListener('click', () => {
		short.classList.remove('active')
		long.classList.add('active');

		showLongText();
	});

	
	const longText = document.getElementsByClassName('longText');
	const shortText = document.getElementsByClassName('shortText');

	const showLongText = () => {
		for (let i = 0; i < longText.length; i++) {
			longText.item(i).style.display = 'block';
		 }

		for (let i = 0; i < shortText.length; i++) {
			shortText.item(i).style.display = 'none';
		 }
	}

	const showShortText = () => {
		for (let i = 0; i < shortText.length; i++) {
			shortText.item(i).style.display = 'block';
		 }

		for (let i = 0; i < longText.length; i++) {
			longText.item(i).style.display = 'none';
		 }
	}

	//Dark and light mode functionality.
	const showLightTheme = () => {
		dark.style.display = 'none';
		light.style.display = 'block';
	}

	const showDarkTheme = () => {
		light.style.display = 'none';
		dark.style.display = 'block';
	}

	const toggleDarkTheme = () => {
		document.body.classList.toggle("dark-theme");
		saveTheme('dark');
	}

	const toggleLightTheme = () => {
		document.body.classList.toggle("dark-theme");
		saveTheme('light')
	}

	const saveTheme = (theme) => {
		localStorage.setItem("theme", theme);
	}

	let dark = document.getElementById('dark-mode');
	let light = document.getElementById('light-mode');

	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const currentTheme = localStorage.getItem("theme");

	if (currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches)) {
		toggleDarkTheme();
		showLightTheme();
	}

	dark.addEventListener('click', () => {
		showLightTheme();
		toggleDarkTheme();
	});

	light.addEventListener('click', () => {
		showDarkTheme();
		toggleLightTheme();
	});

	//Menu bar active section

	const sections = document.querySelectorAll("section")
	
	const options = {
	  rootMargin: '-400px',
	  threshold: 0
	}
	
	let observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		let el = document.getElementById(entry.target.id + '-link');
		if (el) {
			if (entry.intersectionRatio > 0) {
				el.classList.add('active');
			} else {
				el.classList.remove('active');
			}
		}
	  })
	}, options)
	
	sections.forEach(section => { 
	  observer.observe(section)
	})
})(jQuery);