$('.up,.down').click(function () {
    var row = $(this).parents('tr:first'), $reindex_start;
    if ($(this).is('.up')) {
          row.insertBefore(row.prev());
          $reindex_start=row;
    }
    else {
          $reindex_start=row.next()
          row.insertAfter(  $reindex_start );
    }
    var index= $reindex_start.index();
    $reindex_start.nextAll().andSelf().each(function(i){         
     /* since header row is zero, starting index and row number are the same*/
          $(this).find('.form-label[id^="index"]').attr( 'id', 'index'+  index+i  );
    })

});