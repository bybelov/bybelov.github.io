;
(function($) {

  "use strict";

  function toggleMenu(target, eopen, eclose) {
    var target = $(target);
    if (eopen == eclose) {
      $(eopen).click(function(e) {
        target.slideToggle(300);
        e.preventDefault();
      });
    } else {
      $(eopen).click(function(e) {
        target.slideDown(300);
        e.preventDefault();
      });
      $(eclose).click(function(e) {
        target.slideUp(300);
        e.preventDefault();
      });
    }
  }

/*	==========================================================================
	handleMobileMenu & showHideMobileMenu - navigation for header
	========================================================================== */

  function navbar(){
    $(".navbar-nav > li > a, .navbar-nav > li > ul > li > a").each(function() {
      if ($(this).next().is('ul')) {
        $(this).append('<i class="icon-arrow-down3 nav-arrow"></i>');
      }
    });
  }

  function exists(e) {
		return $(e).length > 0;
	}

	function handleMobileMenu() {
		var $menu = $('.navbar-nav');
		if ($(window).width() > 991) {
      setTimeout(function(){
        $menu.flexMenu({
          'showOnHover': true,
          'linkText': '...',
          'linkTitle': 'Ещё',
          'linkTitleAll': 'Меню',
          'linkTextAll': 'Меню'
        });
      }, 200);
			$("#mobile-menu").hide();
			$(".hamburger").removeClass("is-active");
		}
		else
		{
			if (!exists("#mobile-menu")) {
				$menu.flexMenu({
					undo: true
				});
				$(".navbar-nav").clone().attr({
					id: "mobile-menu",
          class: "fixed"
				}).insertAfter(".l-header");

				$("#mobile-menu .nav-arrow").click(function(event) {
					var $t = $(this);
					if ($t.hasClass("nav-arrow__opened")) {
						$t.parent().siblings("ul").slideUp(300);
						$t.removeClass("nav-arrow__opened icon-arrow-up3").addClass("icon-arrow-down3");
					}
          else {
						$t.parent().siblings("ul").slideDown(300);
						$t.removeClass("icon-arrow-down3").addClass("nav-arrow__opened icon-arrow-up3");
					}
					event.preventDefault();
				});
				$("#mobile-menu li, #mobile-menu li a, #mobile-menu ul").attr("style", "");
			}
		}
	}

	function showHideMobileMenu() {
		$(".hamburger").click(function(event) {
			var $t = $(this);
			var $n = $("#mobile-menu");
			if ($t.hasClass("is-active")) {
				$t.removeClass("is-active");
				$n.slideUp(300);
			} else {
				$t.addClass("is-active");
				$n.slideDown(300);
			}
			event.preventDefault();
		});
	}


  function filterSidebarToggle() {
    $('.filter-toggle').click(function() {
      $(this).toggleClass('open');
      $('.filter-block-toggle').toggle();
    });
  }

  function magnific() {

    if (typeof $.fn.magnificPopup != 'undefined') {

      $('.popup').magnificPopup({
        type: 'image',
        tClose: 'Закрыть',
        closeMarkup: '<button title="%title%" class="mfp-close"><span class="icon-close"></span></button>',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        mainClass: 'mfp-with-zoom mfp-fade',
        image: {
          markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</div>',
          tError: '<a href="%url%">Изображение</a> не может быть загружено.',
          verticalFit: true
        }
      });

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        tClose: 'Закрыть',
        closeMarkup: '<button title="%title%" class="mfp-close"><span class="icon-close"></span></button>',
        mainClass: 'mfp-with-zoom mfp-fade',
        removalDelay: 160,
        preloader: false,
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true
      });

      $('.popup-gallery').each(function() {
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          tClose: 'Закрыть',
          closeMarkup: '<button title="%title%" class="mfp-close"><span class="icon-close"></span></button>',
          closeOnContentClick: true,
          closeBtnInside: true,
          fixedContentPos: true,
          mainClass: 'mfp-with-zoom mfp-fade',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [
              0, 2
            ],
            arrowMarkup: '<span title="%title%" class="mfp-arrows icon-arrow-%dir%3"></span>',
            tPrev: 'Назад',
            tNext: 'Вперед',
            tCounter: ''
          },
          image: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' +
            //'<div class="mfp-counter"></div>'+
            '</div>' + '</div>',
            tError: '<a href="%url%">Изображение</a> не может быть загружено.',
            verticalFit: true
          },
          callbacks: {
            buildControls: function() {
              if (this.arrowLeft) {
                this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
              }
            }
          }
        });
      });

      $('.popup-modal').magnificPopup({tClose: 'Закрыть', closeMarkup: '<button title="%title%" class="mfp-close"><span class="icon-close"></span></button>'});
    }
  }

  function scroller() {
    if (typeof $.fn.perfectScrollbar != 'undefined') {
      $('.is-shadow').each(function() {
        $(this).perfectScrollbar();
      });
    }
  }

  $(document).ready(function() {
    navbar();

    $('.js-mh').matchHeight();
    magnific();

    handleMobileMenu();
		showHideMobileMenu();
    //
    // $('.navbar-nav').flexMenu({'showOnHover': true, 'linkText': '...', 'linkTitle': 'Ещё', 'linkTitleAll': 'Меню', 'linkTextAll': 'Меню'});

    toggleMenu('.search', '.search-toggle', '.search-toggle');
    toggleMenu('.sidebar-menu ul', '.sidebar-menu__header', '.sidebar-menu__header');

    $('.js-category-brands .category-brands__title').click(function() {
      $(this).toggleClass('is-opened');
      $(this).parent().find('ul').slideToggle(300);
    });

    $(".tel").mask("+7 (999) 999-99-99");

    filterSidebarToggle();
    scroller();

  });

  $(window).resize(function() {
    handleMobileMenu();
  });

})(window.jQuery);
