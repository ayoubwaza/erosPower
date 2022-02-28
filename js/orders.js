const spSheet =
  "https://script.google.com/macros/s/AKfycbwSms0I22nNwZQx7aWxG9ki5Py8iU-UBwTw6babf49rXfVtZRdukzAZ2Vp6OTQcO9berw/exec";
var request;
$("#request-form").on("submit", function (e) {
  e.preventDefault();
  if (request) {
    request.abort();
  }
  var $form = $(this);
  var $inputs = $form.find("input, select, button, textarea");
  if (
    !$("#Phone").val() ||
    $("#Phone").val().length < 10 ||
    $("#Phone").val().charAt("0") !== "0"
  ) {
    alert("رقم الهاتف الذي تم إدخاله غير صحيح");
  } else {
    document.getElementById("submitbutton").style.opacity = "0.5";
    document.getElementById("submitbutton").style.pointerEvents = "none";
    document.getElementById("submitbutton").innerHTML = "المرجو الإنتظار...";
    var serializedData = $form.serialize();
    $inputs.prop("disabled", false);
    e.preventDefault();
    var request = $.ajax({
      url: spSheet,
      method: "POST",
      dataType: "jsonp",
      data: serializedData,
      success: function () {
        console.log("it worked");
      },
    });
    fbq('track', 'Lead');
    request.always(function () {
      setTimeout(function () {
        window.location.href = "success.html";
      }, 300);
    });
  }
});
