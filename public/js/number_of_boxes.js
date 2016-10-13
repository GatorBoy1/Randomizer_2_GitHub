var el = '<div class="form-group">' + 
   '<input type="text" class="form-control"  name="name[]" placeholder="Enter name" required="required">' +
  '</div>' +
'</div>';



$('#numNames').on('input', function(e) {
  var numSelected = Number($(this).val());
  appendControls(numSelected);
});

function appendControls(num) {
  $('#elcontainer').empty();
  for (var i=0; i<num; i++) {
     $('#elcontainer').append(el);
  }; 
};
 
