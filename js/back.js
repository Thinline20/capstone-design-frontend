

$(document).ready(function() {
	const id = $.cookie("id");
	const department = $.cookie("department");
	const role = $.cookie("role");
});
	
$(document).on('click','#idCheck',function(){
  const id= $("#id").val();
  $.post('../idCheck',{id},function(data){
    alert(data);
  });
});