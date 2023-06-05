//---------------------------------------------------------------------------
// Используется в item_page

$(document).ready(function () {
    //---------------------------------------------------------------------------
    // Не используется
    function isScrolledIntoView(elem) {
        var docViewTop = $('div#inner').scrollLeft();
        var docViewBottom = docViewTop + $('div#inner').width();

        var elemTop = $(elem).offset().left;
        var elemBottom = elemTop + $(elem).width();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    //---------------------------------------------------------------------------
    // Клик на миниатюре
    $('button.thumb_mid').on('click', function () {

        // Берем размер слайда
        let slide = $('div.img_wrap').last().outerWidth(true);
        // Берем позицию слайда
        let value = $(this).data('position') * slide;


        // Анимируем сдвиг полосы прокрутки
        $('div.img_wrap').stop().animate({ scrollLeft: value });
    });
    //---------------------------------------------------------------------------
    // Предыдущий
    $('div.prev').on('click', function () {

        // Берем размер слайда
        let slide = $('div.img_wrap').last().outerWidth(true);
        // Прибавляем к текущему положению размер слайда
        let value = $('div.img_wrap').scrollLeft() - slide;


        // Анимируем сдвиг полосы прокрутки
        $('div.img_wrap').stop().animate({ scrollLeft: value });
    });
    //---------------------------------------------------------------------------
    // Следующий
    $('div.next').on('click', function () {

        // Берем размер слайда
        let slide = $('div.img_wrap').last().outerWidth(true);
        // Прибавляем к текущему положению размер слайда
        let value = $('div.img_wrap').scrollLeft() + slide;


        // Анимируем сдвиг полосы прокрутки
        $('div.img_wrap').stop().animate({ scrollLeft: value });
    });
    //---------------------------------------------------------------------------
});


//---------------------------------------------------------------------------
// Используется в home_page
$(document).ready(function()
{
    //---------------------------------------------------------------------------
    // Не используется
    function isScrolledIntoView(elem)
    {
        var docViewTop = $('div#inner').scrollLeft();
        var docViewBottom = docViewTop + $('div#inner').width();

        var elemTop = $(elem).offset().left;
        var elemBottom = elemTop + $(elem).width();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    //---------------------------------------------------------------------------
    // Предыдущий
    $('button.prev').click(function()
    {
        // К первому слева невидимому или видимому не полностью
        // Всегда переходим к левому от полностью видимого слайда
        // Если находимся на первом, пролистываем через все слайды к последнему

        // Берем размер слайда
//			var slide = $('div#inner').width() / 100 * 33.3333 - 10.6666 + 16;
        // Вычитаем из текущего положения размер слайда
//			var value = $('div#week-actions').scrollLeft() - slide;

        // Берем размер слайда, cfSDy - большой слайдер, 3Oi8v - промоакция, 1LYLC - предложение

        //  cell_big буду использовать везде и не буду использовать другие классы , так как они попросту не работают
        var slide = $(this).parent().find('div.cell_big, div.cell_promo, div.cell___1LYLC').last().outerWidth(true);
        // Прибавляем к текущему положению размер слайда
        var value = $(this).parent().find('div.content_swap.nativeScroll').scrollLeft() - slide;


        // Убираем фокус с кнопки
//			$('button.prev___35owH').blur();
        $(this).blur();

        // Анимируем сдвиг полосы прокрутки
//			$(this).parent().find('div.content___14fC9.nativeScroll___2Cg7K').scrollLeft(value);
        $(this).parent().find('div.content_swap.nativeScroll').stop().animate({scrollLeft:value});
    });
    //---------------------------------------------------------------------------
    // Следующий
    $('button.next').click(function()
    {
        // Всегда переходим ко второму видимому элементу
        // Всегда переходим к правому от частично или полностью видимого слайда
        // Если дошли до последнего, пролистываем через все слайды к первому

        // Вычисляем размер слайда
//			var slide = $('div#inner').width() / 100 * 33.3333 - 10.6666 + 16;
        // Прибывляем к текущему положению размер слайда
//			var value = $('div#week-actions').scrollLeft() + slide;

//			var value = $('div#test').offset().left - 16 - 10.7667;

        // Берем размер слайда, cfSDy - большой слайдер, 3Oi8v - промоакция, 1LYLC - предложение

        //  cell_big буду использовать везде и не буду использовать другие классы , так как они попросту не работают
        var slide = $(this).parent().find('div.cell_big, div.cell_promo, div.cell___1LYLC').last().outerWidth(true);
        // Прибавляем к текущему положению размер слайда
        var value = $(this).parent().find('div.content_swap.nativeScroll').scrollLeft() + slide;

        // Убираем фокус с кнопки
//			$('button.next___d3E5Z').blur();
        $(this).blur();

        // Анимируем сдвиг полосы прокрутки   
//			$(this).parent().find('div.content___14fC9.nativeScroll___2Cg7K').scrollLeft(value);
        $(this).parent().find('div.content_swap.nativeScroll').stop().animate({scrollLeft:value});
    });
    //---------------------------------------------------------------------------

});


