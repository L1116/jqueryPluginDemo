/**
 * $.extend({}, this.defaults, options)有{}主要是为了创建一个新对象，保留对象的默认值  //用options拓展默认选项，defaults中同名对象的值，会被options的值覆盖
 */
/*
 * 提示信息插件
 */
(function ($,window,document){
    var sTips = {

    };
    var closeObj = null;
    //创建Tips对象
    function createTipsObj() {
        var loading = $('<div id="s_tips" class="s-tips"><div></div></div>');
        $('body').append(loading);
    }
    //获取Tips对象
    function getTipsObj() {
        if($('#s_tips').length == 0) {
            createTipsObj();
        }
    }
    //关闭提示信息
    function closeTips() {
        $('#s_tips').fadeOut(200,function (){
            $('#s_tips').removeClass("s-tips-pop");
        })
    }
    //显示提示信息 
    sTips.show = function (html) {
        //1.获取对象
        getTipsObj();
        //2.关闭上一个提示
        if(typeof closeObj == 'number'){
            clearTimeout(closeObj);
        }
        closeTips();
        //3.显示当前提示
        $('#s_tips div').html(html);
        $('#s_tips').fadeIn(1, function () {
            $('#s_tips').addClass('s-tips-pop');
        });
        closeObj = setTimeout(closeTips, 3000);
    }
    //将插件添加进jQuery中
    $.sTips = sTips;
})(jQuery,window,document)
