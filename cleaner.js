$('table[class*="tracklist-table"] > tbody > tr').each(function(index) {
    var url = $(this).attr("video-preview-url");
    $(this).find('span[class*="video"]').click(function(){
        window.open(url,'Your video','');
    });
})