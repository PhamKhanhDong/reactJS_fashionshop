jQuery(document).on("turbolinks:load", function() {
  jQuery(".cart .beta-select").click(function(){
    jQuery(".cart-body").slideToggle(300);
  });

  jQuery(".item-quanity").change(function(){
    var url = $(this).attr("url_update");
    var quantity = $(this).val()
    jQuery.ajax({
      url: url,
      type: "POST",
      data: {
        quantity: quantity
      },
      success: function (result){
        jQuery(".product-subtotal-"+ result.cart.product_id +" .amount").text(result.cart.product_subtotal);
        jQuery(".cart-total-value, .order_total").text(result.cart.total);
        jQuery(".quantity-item-cart").text(result.cart.count_product_cart);
        jQuery(".cart-item-quantity-"+result.cart.product_id).text(result.cart.quantity);
        toastr.options.timeOut = result.cart.toastr_timeout
        console.log(result.cart.toastr_timeout);
        toastr.success(result.cart.update_success);
      }
    });
  });

  jQuery("#order_address_id").change(function(){
    jQuery.ajax({
      url: $(this).attr("url"),
      type: "GET",
      data: {
        id_address: $(this).val()
      },
      success: function (result){
        $(".address_content").html(result.address_content)
      }
    });
  });

  jQuery(".select-shipping").click(function(){
    var shipping = parseFloat($(this).attr("shipping_cost"))
    var total = parseFloat($(".ordder-total").attr("total"));
    $(".ordder-total").text("$"+(shipping+total).toFixed(2));
  });

  $(".tabs li a").click(function(){
    var active = $(this).attr("active");
    $(".box-tabs .panel").hide();
    $(".box-tabs .panel"+active).show();
  });

  $(".star_content .star").click(function(){
    star = $(this).find("i").attr("value");
    $("#rate_star").val(star);
    $(".star_content .star").removeClass("star_on");
    for (i=1; i<=parseInt(star)+1; i++)
    {
      $(".star_content .star:nth-child("+i+")").addClass("star_on");
    }
  });

  jQuery(".item-quanity").change(function(){
    var url = $(this).attr("url_update");
    var quantity = $(this).val()
    jQuery.ajax({
      url: url,
      type: "POST",
      data: {
        quantity: quantity
      },
      success: function (result){
        jQuery(".product-subtotal-"+ result.cart.product_id +" .amount").text(result.cart.product_subtotal);
        jQuery(".cart-total-value, .order_total").text(result.cart.total);
        jQuery(".quantity-item-cart").text(result.cart.count_product_cart);
        jQuery(".cart-item-quantity-"+result.cart.product_id).text(result.cart.quantity);
        toastr.options.timeOut = result.cart.toastr_timeout
        console.log(result.cart.toastr_timeout);
        toastr.success(result.cart.update_success);
      }
    });
  });

  $('.btn-search').click(function(){
    $('.product_search').slideToggle(300);
  })
});
