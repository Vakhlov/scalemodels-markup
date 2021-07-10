window.onload = function () {
    $(document).ready(function () {
        var $menu = $('#main-menu');

        if ($menu && 'smartmenus' in $menu) {
            $(function () {
                $menu.smartmenus({
                    subMenusSubOffsetX: 1,
                    subMenusSubOffsetY: -8
                });
            });

            $(function () {
                var $menuState = $('#main-menu-state');
                if ($menuState.length) {
                    $menuState.change(function () {
                        if (this.checked) {
                            $menu.hide().slideDown(250, function () { $menu.css('display', ''); });
                        } else {
                            $menu.show().slideUp(250, function () { $menu.css('display', ''); });
                        }
                    });

                    $(window).bind('beforeunload unload', function () {
                        if ($menuState[0].checked) {
                            $menuState[0].click();
                        }
                    });
                }
            });
        }
    });
};