// targeting anchor elements that wrap the targeted images

$('#gallery2').rebox({ selector: 'a' });

// search filter


$('#image_search').on('keyup', function() {
  let $search_value = $(this)
    .val()
    .toLowerCase();

  let $imageList = $('#gallery2 a');

  $imageList.each(function(i, image) {
    let $caption = $(image)
      .attr('title')
      .toLowerCase();

    if ($caption.includes($search_value)) {
      $(image).show();
    } else {
      $(image).hide();
    }
  });
});
