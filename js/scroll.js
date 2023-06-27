// После загрузки DOM
$(document).ready(function () {
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
    // Используется в order_often
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
        $('button.prev_often').click(function () {
            // К первому слева невидимому или видимому не полностью
            // Всегда переходим к левому от полностью видимого слайда
            // Если находимся на первом, пролистываем через все слайды к последнему

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
        $('button.next_often').click(function () {
            // Всегда переходим ко второму видимому элементу
            // Всегда переходим к правому от частично или полностью видимого слайда
            // Если дошли до последнего, пролистываем через все слайды к первому

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
            $('button.button_cell').prop('disabled', data.buy_disabled);
            // Устанавливаем текст кнопки Купить
            $('span.children_cell').html(data.buy_text);


            // Если идентификатор позиции не указан
            if (!item_id)
                // Отмечаем/снимаем отметку со всех чекбоксов
                $('input.input_all').prop('checked', checked);
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
            $('span.word_deleted').html(data.delete_text);

            // Если кнопка Купить отключена
            if (data.buy_disabled)
                // Деактивируем общее удаление
                $('div.trash_dell.color-link').addClass('disabled_dell');
            else
                // Активируем общее удаление
                $('div.trash_dell.color-link').removeClass('disabled_dell');

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
                $('input.input_all:checked').parents('div.item_all').remove();

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

    // Кнопка Изменить адрес
	// addresses_open
	$('span.address_edit').on('click', function() {

		// Берем идентификатор адреса доставки
		let address_id = $(this).data('address');

		// Если идентификатор адреса установлен
		if (address_id)
			// Simulate a mouse click:
			window.location.href = '/addresses/';
		// Иначе адреса еще нет
		else
			// Simulate a mouse click:
			window.location.href = '/newaddress/';

	});
	//---------------------------------------------------------------------------
	// Кнопка закрытия окна выбора адресов доставки
	// addresses_close
	$('div.header_clouse').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/checkout/';
	});
	//---------------------------------------------------------------------------
	// Кнопка Добавить новый адрес
	// address_add
	$('span.address_add').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/newaddress/';
	});
	//---------------------------------------------------------------------------
	// Событие изменения чекбокса адреса доставки
	// address_select
    //	$('input.input___3M6Ji').on('change', function() {
	$('input.address_radio').on('change', function() {

		// Берем идентификатор адреса доставки
		let address_id = $(this).data('address');

		// Делаем запрос на выбор адреса доставки по умолчанию
		$.post('handler', {'action':11, 'address':address_id});

	});

    //---------------------------------------------------------------------------
	// Кнопка Выбрать адрес
	// address_choose
	$('button.address_choose').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/checkout/';
	});
	//---------------------------------------------------------------------------
	// Кнопка закрытия окна редактирования адреса доставки
	// address_close
	$('span.address_close').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/addresses/';
	});
	//---------------------------------------------------------------------------
	// Отправка формы редактирования адреса, кнопка Сохранить адрес
	// address_save
	$('form.address_form_save').on('submit', function() {

		// Сериализуем форму для отправки
		let form_data = $('form.address_form_save').serialize();

		// Делаем запрос на сохранение адреса доставки
		$.post('handler', form_data, function(response) {
			// Simulate a mouse click:
			window.location.href = '/addresses/';
		});

		// Предотвращаем дальнейшее выполнение формы
		return false;
	});
	//---------------------------------------------------------------------------
	// Событие при клике на способ доставки
    // content_delivery
	$('div.block_delivery').on('click', function() {

		// Удаляем класс подсветки у блока способов оплаты
		$('div.validationContainer').removeClass('error-error');
		// Добавляем скрывающий класс к тексту ошибки блока способов оплаты
		$('div.delivery_errorMessage').addClass('d-none');

		// У всех способов доставки удаляем класс выбора
		$('div.block_delivery').removeClass('selected_delivery');
		// Выбираем способ доставки на который кликнули
        // selected_delivery
		$(this).addClass('selected_delivery');
	});

    //---------------------------------------------------------------------------
	// Событие при клике на способ оплаты
	$('div.block_payment').on('click', function() {

		// Удаляем класс подсветки у блока способов оплаты
		$('div.validationContainer').removeClass('error-error');
		// Добавляем скрывающий класс к тексту ошибки блока способов оплаты
		$('div.payment_errorMessage').addClass('d-none');

		// У всех способов доставки удаляем класс выбора
		$('div.block_payment').removeClass('selected_payment');
		// Выбираем способ доставки на который кликнули
        // selected_delivery
		$(this).addClass('selected_payment');
	});
	//---------------------------------------------------------------------------
	// Кнопка Продолжить в Оформлении заказа
	$('button#checkout').on('click', function() {






		// Получение вариантов доставки

console.log('aaa');

//

$.ajax({
	url: 'https://api.edu.cdek.ru/v2/oauth/token?grant_type=client_credentials&client_id=EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI&client_secret=PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG',
	type: 'post',
//	data: {
//		access_token: 'XXXXXXXXXXXXXXXXXXX'
//	},
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
//		Header_Name_One: 'Header Value One',   //If your header name has spaces or any other char not appropriate
//		"Header Name Two": 'Header Value Two'  //for object property name, use quoted notation shown in second
	},
	parameters1 : {
		grant_type: 'client_credentials',
		client_id: 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI',
		client_secret: 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'
	},
	mode:'no-cors',
//	cache: 'no-cache',
//	dataType: 'json',
	success: function (data) {
//		console.info(data);
		alert('bbb');
	}
});



/*

		$.post('https://api.edu.cdek.ru/v2/oauth/token?grant_type=client_credentials&client_id=EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI&client_secret=PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG', {
			headers: {'Content-Type': 'application/x-www-form-urlencoded',},
//				parameters : {
//					grant_type: 'client_credentials',
//					client_id: 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI',
//					client_secret: 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'
//				},

			}, function(response) {

				alert('bbb');

			// Формируем форму по методу POST
///			$('div#insert_form').html('<form action="/success/" name="success" method="post"><input type="hidden" name="order" value="' + response + '" /></form>');
			// Отправляем форму
	//		document.forms['success'].submit();
		});


*/









		// Задержка на 1,5 секунды
		let delayInMilliseconds = 1500;
		// Берем идентификатор способа доставки
		let delivery_method_id = $('div.block_delivery.selected_delivery').data('delivery-method');
		// Берем идентификатор способа оплаты
		let payment_method_id = $('div.block_payment.selected_payment').data('payment-method');


		// Если способ доставки выбран
		if (delivery_method_id)
        {
			// Если способ оплаты выбран
			if (payment_method_id)
			{
				// Делаем запрос на добавление заказа
				$.post('handler', {'action':13, 'delivery-method':delivery_method_id, 'payment-method':payment_method_id}, function(response) {

					// Формируем форму по методу POST
					$('div#insert_form').html('<form action="/success/" name="success" method="post"><input type="hidden" name="order" value="' + response + '" /></form>');
					// Отправляем форму
					document.forms['success'].submit();
				});
			}
			// Иначе ни один способ оплаты не выбран
			else
			{
				// Добавляем к блоку способов оплаты подсветку
				$('div.validationContainer').addClass('error-error');
				// Удаляем скрывающий класс у текста ошибки блока способов оплаты
				$('div.payment_errorMessage').removeClass('d-none');
				// Добавляем к блоку оплаты класс трясучки
				$('div.payment').addClass('shaking');

				// Таймаут
				setTimeout(function() {
					// Убираем класс трясучки
					$('div.payment').removeClass('shaking');

				}, delayInMilliseconds);
			}

             // Добавляем к блоку способов оплаты подсветку
			$('div.delivery_method_items').removeClass('error-error');
                
			$('div.delivery_errorMessage').addClass('d-none');
		}
		// Если ни один способ доставки не выбран
		else
		{
			// Добавляем к блоку способов доставки подсветку
			$('div.validationContainer').addClass('error-error');
			// Удаляем скрывающий класс у текста ошибки блока способов доставки
			$('div.delivery_errorMessage').removeClass('d-none');

			// Добавляем к блоку доставки класс трясучки
			$('div.delivery').addClass('shaking');
			// Таймаут
			setTimeout(function() {

				// Убираем класс трясучки
				$('div.delivery').removeClass('shaking');
			}, delayInMilliseconds);
		}
	});
	//---------------------------------------------------------------------------


	// Клик на позиции списка меню страницы Мои заказы
	$('button.menu_delivery').on('click', function() {

		// Берем идентификатор статуса заказа
		let status_id = $(this).data('status');


		// Simulate a mouse click:
		window.location.href = '?status=' + status_id;

		// Предотвращаем дальнейшее выполнение
//		return false;
	});

    $(document).ready(function ()
	{
		let popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
			container: 'body'
		})
	});
});

function formfiltres() {
    let minPrice = document.getElementById("minPrice").value;
    let maxPrice = document.getElementById("maxPrice").value;
    document.getElementById('formPriceFiltrsButton').addEventListener('click', () => window.open(`https://market.axnata24.ru/search/?pricefrom=${minPrice}&priceto=${minPrice}`, 'windowName'));
}



/*

show_more
adult
underage
sensitive
-item add to favorites
item add to cart
-buy now
cart item select
	cart item check
cart item decrease
cart item increase
cart item delete
ordering open (checkout)
addresses open
addresses close
address add
address select
address check
address change
address delete
address choose
address close
address save
- delivery choose
- pay method choose

*/