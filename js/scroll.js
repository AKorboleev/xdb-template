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
    // Предыдущий
    $('button.prev').click(function () {
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
        $(this).parent().find('div.content_swap.nativeScroll').stop().animate({ scrollLeft: value });
    });
    //---------------------------------------------------------------------------
    // Следующий
    $('button.next').click(function () {
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
        $(this).parent().find('div.content_swap.nativeScroll').stop().animate({ scrollLeft: value });
    });
    //---------------------------------------------------------------------------

});

//---------------------------------------------------------------------------
// Кнопка Посмотреть фотографии
$('button.sensitive').on('click', function () {

    // Делаем запрос на установку флаг пользователя показывать чувствительный контент
    $.post('handler', { 'action': 3 }, function (response) {

        // Обновляем страницу
        window.location.reload();
    });
});


//---------------------------------------------------------------------------
// Кнопка Да, мне есть 18 лет
$('button.adult').on('click', function () {

    // Делаем запрос на установку флага пользователя показывать товары для взрослых
    $.post('handler', { 'action': 2 }, function (response) {

        // Обновляем страницу
        window.location.reload();
    });
});
//---------------------------------------------------------------------------
// Кнопка Я несовершеннолетний
$('button.underage').on('click', function () {

    // Переходим на главную страницу
    window.location.href = '/';
});
//---------------------------------------------------------------------------
// Кнопка Посмотреть фотографии
$('button.sensitive').on('click', function () {

    // Делаем запрос на установку флаг пользователя показывать чувствительный контент
    $.post('handler', { 'action': 3 }, function (response) {

        // Обновляем страницу
        window.location.reload();
    });
});
//---------------------------------------------------------------------------
// Кнопка В избранное
// item add to favorites
$('div.button_favorite').on('click', function () {

    // Берем идентификатор позиции
    let item_id = $(this).data('item');

    // Делаем запрос на добавление позиции в избранное
    $.post('handler', { 'action': 4, 'item': item_id }, function (response) {

        // Покрасить кнопку избранного

    });
});
//---------------------------------------------------------------------------
// Кнопка В корзину
// item_add_to_cart
$('button.add_to_cart').on('click', function () {

    // Берем идентификатор позиции
    let item_id = $(this).data('item');
    // Берем индикатор
    let loader = $(this).find('span.load_to_cart');


    // Показываем индикатор
    loader.removeClass('d-none');

    // Делаем запрос на добавление позиции в корзину
    $.post('handler', { 'action': 5, 'item': item_id }, function (response) {

        // Скрываем индикатор
        loader.addClass('d-none');

        // Если позиции в корзине есть
        if (response) {
            // Убираем скрывающий класс у индикатора количества позиций в корзине
            $('span.indicator').removeClass('d-none');
            // Устанавливаем количество позиций в корзине в индикатор
            $('span.indicator').html(response);
        }
    });
});

//---------------------------------------------------------------------------
// Кнопка Купить сейчас
$('button.buyNow').on('click', function () {












});

//---------------------------------------------------------------------------
// Событие изменения чекбокса позиции в корзине
// cart_item_select
//	$('input.input___3M6Ji').on('change', function() {
$('input.cart_item_radio').on('change', function () {

    // Берем идентификатор позиции
    let item_id = $(this).data('item');
    // Берем состояние чекбокса
    let checked = $(this).prop('checked');


    // Делаем запрос на установку/снятие отметки позиции в корзине
    $.post('handler', { 'action': 6, 'item': item_id, 'checked': checked }, function (response) {

        // Парсим вернувшийся JSON
        data = JSON.parse(response);

        // Устанавливаем отметку чекбокса Выбрать все
        $('input.input_all#all_checked').prop('checked', data.all_checked);
        // Устанавливаем текст кнопки Удалить выбранные
        $('span.word_deleted').html(data.delete_text);

        // Если кнопка Купить отключена
        if (data.buy_disabled)
            // Деактивируем общее удаление
            $('div.trash_dell.color-link').addClass('disabled_dell');
        else
            // Активируем общее удаление
            $('div.trash_dell.color-link').removeClass('disabled_dell');

        // Устанавливаем активность кнопки Купить
        $('button.button').prop('disabled', data.buy_disabled);
        // Устанавливаем текст кнопки Купить
        $('span.children_cell').html(data.buy_text);


        // Если идентификатор позиции не указан
        if (!item_id)
            // Отмечаем/снимаем отметку со всех чекбоксов
            $('input.input_add').prop('checked', checked);
    });
});


//---------------------------------------------------------------------------
// Кнопка минус
// cart_item_decrease
$('div.decrease').on('click', function () {

    // Берем идентификатор позиции
    let item_id = $(this).data('item');


    // Делаем запрос на уменьшение количества позиции в корзине
    $.post('handler', { 'action': 7, 'item': item_id }, function (response) {

        // Парсим вернувшийся JSON
        data = JSON.parse(response);

        // Устанавливаем активность кнопки Купить
        $('button.button').prop('disabled', data.buy_disabled);
        // Устанавливаем текст кнопки Купить
        $('span.children_cell').html(data.buy_text);

        // Устанавливаем количество позиции в корзине
        $('div.quantity-' + item_id).html(data.item_quantity);
        // Если количество позиции в корзине меньше 2
        if (data.item_quantity < 2)
            // Делаем неактивной кнопку минус
            $('div.decrease[data-item="' + item_id + '"]').addClass('disabled');

        // Старая стоимость позиции
        $('span.value-old-' + item_id).prop('content', data.item_value_old);
        // Форматированная старая стоимость позиции
        $('span.value-old-' + item_id).html(data.item_value_old_formatted);
        // Стоимость позиции
        $('span.value-' + item_id).prop('content', data.item_value);
        // Форматированная стоимость позиции
        $('span.value-' + item_id).html(data.item_value_formatted);
    });
});
//---------------------------------------------------------------------------
// Кнопка плюс
// cart_item_increase
$('div.increase').on('click', function () {

    // Берем идентификатор позиции
    let item_id = $(this).data('item');


    // Делаем запрос на увеличение количества позиции в корзине
    $.post('handler', { 'action': 8, 'item': item_id }, function (response) {

        // Парсим вернувшийся JSON
        data = JSON.parse(response);

        // Устанавливаем активность кнопки Купить
        $('button.button_edit').prop('disabled', data.buy_disabled);
        // Устанавливаем текст кнопки Купить
        $('span.children_cell').html(data.buy_text);

        // Устанавливаем количество позиции в корзине
        $('div.quantity-' + item_id).html(data.item_quantity);
        // Делаем активной кнопку минус
        $('div.decrease[data-item="' + item_id + '"]').removeClass('disabled');

        // Старая стоимость позиции
        $('span.value-old-' + item_id).prop('content', data.item_value_old);
        // Форматированная старая стоимость позиции
        $('span.value-old-' + item_id).html(data.item_value_old_formatted);
        // Стоимость позиции
        $('span.value-' + item_id).prop('content', data.item_value);
        // Форматированная стоимость позиции
        $('span.value-' + item_id).html(data.item_value_formatted);
    });
});
//---------------------------------------------------------------------------
// Кнопка удаления позиции из корзины
// cart_item_delete
$('div.trash_dell').on('click', function () {

    // Берем идентификатор позиции
    let item_id = $(this).data('item');
    // Берем блок позиции в корзине
    let item = $(this).parents('div.item___3F01o');


    // Делаем запрос на удаление позиции из корзины
    $.post('handler', { 'action': 9, 'item': item_id }, function (response) {

        // Парсим вернувшийся JSON
        data = JSON.parse(response);

        // Устанавливаем отметку чекбокса Выбрать все
        $('input.input_all#all_checked').prop('checked', data.all_checked);
        // Устанавливаем текст кнопки Удалить выбранные
        $('span.word___12ZFS').html(data.delete_text);

        // Если кнопка Купить отключена
        if (data.buy_disabled)
            // Деактивируем общее удаление
            $('div.trash___3IVXn.color-link').addClass('disabled___MtoeL');
        else
            // Активируем общее удаление
            $('div.trash___3IVXn.color-link___3UBBR').removeClass('disabled___MtoeL');

        // Устанавливаем активность кнопки Купить
        $('button.button_edit').prop('disabled', data.buy_disabled);
        // Устанавливаем текст кнопки Купить
        $('span.children_cell').html(data.buy_text);


        // Если идентификатор позиции указан
        if (item_id)
            // Удаляем блок позиции в корзине
            item.remove();
        // Иначе идентификатор позиции не указан
        else
            // Удаляем все блоки позиций, чекбоксы которых отмечены
            $('input.input_all:checked').parents('div.item___3F01o').remove();

        // Если позиции в корзине остались
        if (data.cart_quantity)
            // Устанавливаем количество позиций в корзине в индикатор
            $('span.indicator').html(data.cart_quantity);
        // Иначе корзина пуста
        else
            // Перегружаем страницу
            window.location.href = '/cart/';
    });
});