/**
 * Created by shunsukeshimada on 2017/02/06.
 */

(function(){
    $(function(){
        var $headerBtn = $('.js-headerBtn');
        var $sidenav = $('.js-sideNav');
        //pcの横幅を800pxとして既定
        var pcWidth = 366;
        var pastWidth;

        $headerBtn.on('click', function(){
            $sidenav.toggleClass('side-nav-clicked');
        });

        $(window).on('resize', function(){
            var w = window.innerWidth;
            // リサイズがSP→PCの向き且つ、
            if (getResizeDirection(w) === 'right') {
                // PCの横幅（366px以上）且つ、
                if (w >= pcWidth) {
                    // side-nav-clickedがクラスに存在すれば、
                    if ($sidenav.hasClass('side-nav-clicked')) {
                        // side-nav-clickedのクラスを削除する
                        $sidenav.removeClass('side-nav-clicked');
                    }
                }
            }
        });

        //ウィンドウリサイズの方向を取得するメソッド
        var getResizeDirection = function(currentWidth){
            var vector = (pastWidth - currentWidth);
            pastWidth = currentWidth;
            if (vector > 0) {
                return 'left';
            } else {
                return 'right';
            }
        };
    });
})();