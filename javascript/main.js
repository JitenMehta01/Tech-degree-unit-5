// targeting anchor elements that wrap the targeted images

$('#gallery2').rebox({ selector: 'a' });

// search filter

$('#image_search').on( 'keyup', function(){
      const search_value = $(this).val().toLowerCase();
      $('#gallery2 a[title]').filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(search_value) > -1)
      })
})
