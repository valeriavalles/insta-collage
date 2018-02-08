$(document).ready(function() {
let friendimg1 = $('.imgfb');
$.each(friendimg1, function(i, item) {
    console.log($(item));
 $(item).on('dragstart',function(event){
    
    event.originalEvent.dataTransfer.setData('text', event.target.id);
  });
});

let collegeimg1 = $('.collge-one');
$.each(collegeimg1 , function(i, item) {
    console.log($(item));
 $(item).on('dragover',function(event){
    event.preventDefault();
    });
 $(item).on('drop',function(event){
    event.preventDefault();
     let data = event.originalEvent.dataTransfer.getData("text");
  //  event.target.appendChild(document.getElementById(data));
  //    event.target.append(document.getElementById(data));
      event.target.append(data);
     }); 
});

});