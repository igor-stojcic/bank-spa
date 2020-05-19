function confirmDialog(accountName, handler){
  $(`<div class="modal fade bd-example-modal-sm" id="myModal" role="dialog"> 
     <div class="modal-dialog modal-dialog-centered  modal-sm"> 
       <!-- Modal content--> 
        <div class="modal-content"> 
           <div class="modal-body" style="padding:10px;"> 
             <h4 class="text-center" style="color:#ff0000;font-weight:900;">DELETE</h4> 
             <h3 class="text-center" style="color:#000;font-weight:900;">${accountName}</h3> 
             <div class="text-center"> 
               <a class="btn btn-danger btn-yes" style="color:#FFF;background:#ff0000;border:1px solid black;font-weight:600;">YES !</a> 
               <a class="btn btn-default btn-no" style="border:1px solid black;font-weight:600;">NO !</a> 
             </div> 
           </div> 
       </div> 
    </div> 
  </div>`).appendTo('body');
 
  //Trigger the modal
  $("#myModal").modal({
     backdrop: 'static',
     keyboard: false
  });
  
   //Pass true to a callback function
   $(".btn-yes").click(function () {
       handler(true);
       $("#myModal").modal("hide");
   });
    
   //Pass false to callback function
   $(".btn-no").click(function () {
       handler(false);
       $("#myModal").modal("hide");
   });

   //Remove the modal once it is closed.
   $("#myModal").on('hidden.bs.modal', function () {
      $("#myModal").remove();
   });
}