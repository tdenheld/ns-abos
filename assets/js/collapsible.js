(() => {
    const obj = '.js-collapsible';
    const header = obj + '-header';
    const content = obj + '-content';

    if (!$(obj)[0]) return
    $(obj).each(function () {
        $(header, this).click(() => {
            $(this).toggleClass('is-active');
            $(content, this).slideToggle(200);
        });
    });
})();