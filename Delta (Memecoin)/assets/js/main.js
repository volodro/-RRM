$(document).ready(function() {
  headerScroll();
  switchFaq();
  scrollToSection();

  function scrollToSection() {
    var $links = $('.header__menu-item a');
    var $document = $('html, body');

    $links.on('click', function(e) {
      e.preventDefault();
      
      var anchor = $(this).attr('href');

      console.log(anchor);
    });
  }

  function headerScroll() {
    var $html = $('html');
    var $header = $('.header');
    var className = 'header_blur';
    var headerHeight = $header.outerHeight();
    var scrollTop = $html.scrollTop();

    toggleHeaderClass();

    function toggleHeaderClass() {
      if (scrollTop >= headerHeight) {
        $header.addClass(className)
      } else {
        $header.removeClass(className)
      }
    }

    $(window).scroll(function() {
      scrollTop = $html.scrollTop();
      toggleHeaderClass();
    })
  }

  function switchFaq() {
    var currentClass = 'current';
    var faqItemsClass = '.faq__item';
    var itemBoxClass = '.faq__item-box';
    var textBoxClass = '.faq__item-text';
    var $faqTitle = $('.faq__item-title');
    var $faqItems = $(faqItemsClass);

    $faqTitle.on('click', function() {
      var $currentItem = $(this).closest(faqItemsClass);
      var textHeight = $currentItem.find(textBoxClass).outerHeight();

      $(itemBoxClass).height(0);
      $faqItems.removeClass(currentClass);
      $currentItem.addClass(currentClass);

      $currentItem.find(itemBoxClass).height(textHeight);
    });
  }
});