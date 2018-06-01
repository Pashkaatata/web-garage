<script>
var $page = $('html, body');
$('a[href*="#Yours id"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2950); /*время движения скрла 3000 - 3 сек*/
    return false;
});
</script>
