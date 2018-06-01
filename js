<script>
var $page = $('html, body');
$('a[href*="#Yours id"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2950);
    return false;
});
</script>
