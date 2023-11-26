// let category = document.querySelector('.h__category-area');
// let btnShowCategory = document.querySelector('#btnShowCategory');

// btnShowCategory.addEventListener('click', function(e){
//     e.preventDefault();
//     isNone = category.classList.contains('is-none');
//     if(isNone) {
//         category.classList.remove('is-none');
//         category.classList.add('is-block');
//     }
//     else {
//         category.classList.remove('is-block');
//         category.classList.add('is-none');
//     }
// })

// function dropdown(element) {
//     if(!element) return;
//     element.addEventListener('click', function(e) {
//         e.preventDefault();
        
//     })
// }

jQuery.fn.extend({
    setMenu:function () {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('.dropdown-btn');
            itemmenu.click(function () {
                var submenuitem = containermenu.find('.dropdown-menu');
                submenuitem.slideToggle(500);

            });

            $(document).click(function (e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                     var isopened =
                        containermenu.find('.dropdown-menu').css("display");

                     if (isopened == 'block') {
                         containermenu.find('.dropdown-menu').slideToggle(500);
                     }
                }
            });



        });
    },

});
$('.dropdown').setMenu();

$('#toggleMenuBtn').click(function(){
    $('.product-portfolio-toggle').slideToggle(500);
})
$('#toggleMenuMobileBtn').click(function(){
    $('.m-product-portfolio-toggle').slideToggle(500);
})
$('.m-product__btn-toggle').click(function(){
    var index = $('.m-product__btn-toggle').index(this);
    console.log(index)
    $('.m-sub-product-portfolio').eq(index).slideToggle(500);
})

  


$(function(){
    $(window).scroll(function(){
        var aTop = $('.fixed-mask').height();
        if($(this).scrollTop()>=aTop){
            $( ".fixed-mask" ).css('background','#000000');
        }
        else {
            $( ".fixed-mask" ).css('background','transparent');
        }
    });
});