// После загрузки DOM
$(document).ready(function () {

	//---------------------------------------------------------------------------
	// Галлерея fancyBox
/*	$("a.fancybox").fancybox({
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		'titleShow' : true,
		'titlePosition' : 'inside',
		'titleFromAlt' : true,
		'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-inside"><i>Изображение ' + (currentIndex + 1) + ' из ' + currentArray.length + '</i>' + (title.length ? '<br /><b>' + title + '</b>': '') + '</span>';
			},
		'padding' : 30,
		'changeSpeed' : 50,
		'changeFade' : 50,
		'cyclic' : true,
		'centerOnScroll' : true,
		'showCloseButton' : true
	});*/
	//---------------------------------------------------------------------------
//	Fancybox.bind('[data-fancybox="gallery"]', {
	Fancybox.bind('img.fancybox', {
		animated: false,
		showClass: false,
		hideClass: false,
		click: false,
		dragToClose: false,
		Image: {
			zoom: false,
		},
		Toolbar: {
			display: [{id: 'counter', position: 'center'}, 'close'],
		},
	});
	//---------------------------------------------------------------------------
	// Кнопка Показать еще
	$('a.search_more').on('click', function() {

		// Берем номер страницы как целое число
		let page = parseInt($('input[name=page]').val());
		// Сериализуем форму для отправки
		let form_data = $('form#more').serialize();
		// Берем индикатор
		let loader = $(this).find('span.loader___AOgfw');

		// Показываем индикатор
		loader.removeClass('d-none');

		// Делаем запрос на Показать еще
		$.post('handler', form_data, function(response) {

			// Скрываем индикатор
			loader.addClass('d-none');

			// Парсим вернувшийся JSON
			data = JSON.parse(response);

			// Добавляем вернувшиеся позиции
			$('div#items').append(data.items);

			// Если количество вернувшихся позиций меньше 36
			if (data.items_count < 36)
				// Скрываем кнопку Показать еще
				$('a.search_more').addClass('d-none');
			else
				// Увеличиваем номер страницы
				$('input[name=page]').val(page + 1);
		});

		// Предотвращаем дальнейшее выполнение
		return false;
	});
	//---------------------------------------------------------------------------
	// Кнопка Да, мне есть 18 лет
	$('button.adult').on('click', function() {

		// Делаем запрос на установку флага пользователя показывать товары для взрослых
		$.post('handler', {'action':2}, function(response) {

			// Обновляем страницу
			window.location.reload();
		});
	});
	//---------------------------------------------------------------------------
	// Кнопка Я несовершеннолетний
	$('button.underage').on('click', function() {

		// Переходим на главную страницу
		window.location.href = '/';
	});
	//---------------------------------------------------------------------------
	// Кнопка Посмотреть фотографии
	$('button.sensitive').on('click', function() {

		// Делаем запрос на установку флаг пользователя показывать чувствительный контент
		$.post('handler', {'action':3}, function(response) {

			// Обновляем страницу
			window.location.reload();
		});
	});
	//---------------------------------------------------------------------------
	// Кнопка В избранное
	// item add to favorites
	$('div.favorite___2jmct').on('click', function() {

		// Берем идентификатор позиции
		let item_id = $(this).data('item');

		// Делаем запрос на добавление позиции в избранное
		$.post('handler', {'action':4, 'item':item_id}, function(response) {

			// Покрасить кнопку избранного

		});
	});
	//---------------------------------------------------------------------------
	// Кнопка В корзину
	// item_add_to_cart
	$('button.addToCart____J2SG').on('click', function() {

		// Берем идентификатор позиции
		let item_id = $(this).data('item');
		// Берем индикатор
		let loader = $(this).find('span.loader___2Hyn1');


		// Показываем индикатор
		loader.removeClass('d-none');

		// Делаем запрос на добавление позиции в корзину
		$.post('handler', {'action':5, 'item':item_id}, function(response) {

			// Скрываем индикатор
			loader.addClass('d-none');

			// Если позиции в корзине есть
			if (response)
			{
				// Убираем скрывающий класс у индикатора количества позиций в корзине
				$('span.indicator___UIS2g').removeClass('d-none');
				// Устанавливаем количество позиций в корзине в индикатор
				$('span.indicator___UIS2g').html(response);
			}
		});
	});
	//---------------------------------------------------------------------------
	// Кнопка Купить сейчас
	$('button.buyNow').on('click', function() {












	});
	//---------------------------------------------------------------------------
	// Событие изменения чекбокса позиции в корзине
	// cart_item_select
//	$('input.input___3M6Ji').on('change', function() {
	$('input.cart_item_radio').on('change', function() {

		// Берем идентификатор позиции
		let item_id = $(this).data('item');
		// Берем состояние чекбокса
		let checked = $(this).prop('checked');


		// Делаем запрос на установку/снятие отметки позиции в корзине
		$.post('handler', {'action':6, 'item':item_id, 'checked':checked}, function(response) {

			// Парсим вернувшийся JSON
			data = JSON.parse(response);

			// Устанавливаем отметку чекбокса Выбрать все
			$('input.input___3M6Ji#all_checked').prop('checked', data.all_checked);
			// Устанавливаем текст кнопки Удалить выбранные
			$('span.word___12ZFS').html(data.delete_text);

			// Если кнопка Купить отключена
			if (data.buy_disabled)
				// Деактивируем общее удаление
				$('div.trash___3IVXn.color-link___3UBBR').addClass('disabled___MtoeL');
			else
				// Активируем общее удаление
				$('div.trash___3IVXn.color-link___3UBBR').removeClass('disabled___MtoeL');

			// Устанавливаем активность кнопки Купить
			$('button.button___3hmfW').prop('disabled', data.buy_disabled);
			// Устанавливаем текст кнопки Купить
			$('span.children___1pivU').html(data.buy_text);


			// Если идентификатор позиции не указан
			if (!item_id)
				// Отмечаем/снимаем отметку со всех чекбоксов
				$('input.input___3M6Ji').prop('checked', checked);
		});
	});
	//---------------------------------------------------------------------------
	// Кнопка минус
	// cart_item_decrease
	$('div.decrease___OetXE').on('click', function() {

		// Берем идентификатор позиции
		let item_id = $(this).data('item');


		// Делаем запрос на уменьшение количества позиции в корзине
		$.post('handler', {'action':7, 'item':item_id}, function(response) {

			// Парсим вернувшийся JSON
			data = JSON.parse(response);

			// Устанавливаем активность кнопки Купить
			$('button.button___3hmfW').prop('disabled', data.buy_disabled);
			// Устанавливаем текст кнопки Купить
			$('span.children___1pivU').html(data.buy_text);

			// Устанавливаем количество позиции в корзине
			$('div.quantity-' + item_id).html(data.item_quantity);
			// Если количество позиции в корзине меньше 2
			if(data.item_quantity < 2)
				// Делаем неактивной кнопку минус
				$('div.decrease___OetXE[data-item="' + item_id + '"]').addClass('disabled___3ejzi');

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
	$('div.increase___1y9tY').on('click', function() {

		// Берем идентификатор позиции
		let item_id = $(this).data('item');


		// Делаем запрос на увеличение количества позиции в корзине
		$.post('handler', {'action':8, 'item':item_id}, function(response) {

			// Парсим вернувшийся JSON
			data = JSON.parse(response);

			// Устанавливаем активность кнопки Купить
			$('button.button___3hmfW').prop('disabled', data.buy_disabled);
			// Устанавливаем текст кнопки Купить
			$('span.children___1pivU').html(data.buy_text);

			// Устанавливаем количество позиции в корзине
			$('div.quantity-' + item_id).html(data.item_quantity);
			// Делаем активной кнопку минус
			$('div.decrease___OetXE[data-item="' + item_id + '"]').removeClass('disabled___3ejzi');

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
	$('div.trash___3IVXn').on('click', function() {

		// Берем идентификатор позиции
		let item_id = $(this).data('item');
		// Берем блок позиции в корзине
		let item = $(this).parents('div.item___3F01o');


		// Делаем запрос на удаление позиции из корзины
		$.post('handler', {'action':9, 'item':item_id}, function(response) {

			// Парсим вернувшийся JSON
			data = JSON.parse(response);

			// Устанавливаем отметку чекбокса Выбрать все
			$('input.input___3M6Ji#all_checked').prop('checked', data.all_checked);
			// Устанавливаем текст кнопки Удалить выбранные
			$('span.word___12ZFS').html(data.delete_text);

			// Если кнопка Купить отключена
			if(data.buy_disabled)
				// Деактивируем общее удаление
				$('div.trash___3IVXn.color-link___3UBBR').addClass('disabled___MtoeL');
			else
				// Активируем общее удаление
				$('div.trash___3IVXn.color-link___3UBBR').removeClass('disabled___MtoeL');

			// Устанавливаем активность кнопки Купить
			$('button.button___3hmfW').prop('disabled', data.buy_disabled);
			// Устанавливаем текст кнопки Купить
			$('span.children___1pivU').html(data.buy_text);


			// Если идентификатор позиции указан
			if(item_id)
				// Удаляем блок позиции в корзине
				item.remove();
			// Иначе идентификатор позиции не указан
			else
				// Удаляем все блоки позиций, чекбоксы которых отмечены
				$('input.input___3M6Ji:checked').parents('div.item___3F01o').remove();

			// Если позиции в корзине остались
			if(data.cart_quantity)
				// Устанавливаем количество позиций в корзине в индикатор
				$('span.indicator___UIS2g').html(data.cart_quantity);
			// Иначе корзина пуста
			else
				// Перегружаем страницу
				window.location.href = '/cart/';
		});
	});
	//---------------------------------------------------------------------------
	// Кнопка Купить
	// ordering_open
	$('button#buy').on('click', function() {

		// Simulate a mouse click:
		window.location.href = '/checkout/';
	});
	//---------------------------------------------------------------------------
	// Кнопка Изменить адрес
	// addresses_open
	$('span.edit___uMt-E').on('click', function() {

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
	$('div.headerClose___1_a5A').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/checkout/';
	});
	//---------------------------------------------------------------------------
	// Кнопка Добавить новый адрес
	// address_add
	$('span.add___3qjHd').on('click', function() {
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
	// Кнопка Изменить
//	$('span.button___2MdVR').on('click', function() {
	$('span.address_change').on('click', function() {

		// Берем идентификатор адреса доставки
		let address_id = $(this).data('address');

		// Simulate a mouse click:
		window.location.href = '/?address=' + address_id;

		// Предотвращаем дальнейшее выполнение
		return false;
	});
	//---------------------------------------------------------------------------
	// Кнопка Удалить
//	$('span.remove___exyqn').on('click', function() {
	$('span.address_delete').on('click', function() {

		// Берем идентификатор адреса доставки
		let address_id = $(this).data('address');
		// Берем блок адреса доставки
		let item = $(this).parents('div.item___1pvIz');


		// Делаем запрос на удаление адреса доставки
		$.post('handler', {'action':12, 'address':address_id}, function(response) {

			// Убираем блок адреса
			item.remove();

			// Устанавливаем отметку чекбокса с вернувшимся после запроса идентификатором адреса доставки
			$('input.address_radio[data-address="' + response + '"]').prop('checked', true);
		});

		// Предотвращаем дальнейшее выполнение
		return false;
	});
	//---------------------------------------------------------------------------
	// Кнопка Выбрать адрес
	// address_choose
	$('button.control___3O1j_').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/checkout/';
	});
	//---------------------------------------------------------------------------
	// Кнопка закрытия окна редактирования адреса доставки
	// address_close
	$('span.button___12AtS').on('click', function() {
		// Simulate a mouse click:
		window.location.href = '/addresses/';
	});
	//---------------------------------------------------------------------------
	// Отправка формы редактирования адреса, кнопка Сохранить адрес
	// address_save
	$('form.form___JoNlz').on('submit', function() {

		// Сериализуем форму для отправки
		let form_data = $('form.form___JoNlz').serialize();

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
	$('div.delivery.content___zuiFB').on('click', function() {

		// Удаляем класс подсветки у блока способов доставки
		$('div.validationContainer___3bzKr').removeClass('error-error___VQQ38');
		// Добавляем скрывающий класс к тексту ошибки блока способов доставки
		$('div.errorMessage___8yQRe').addClass('d-none');

		// У всех способов доставки удаляем класс выбора
		$('div.delivery.content___zuiFB').removeClass('selected___1Wzux');
		// Выбираем способ доставки на который кликнули
		$(this).addClass('selected___1Wzux');
	});
	//---------------------------------------------------------------------------
	// Событие при клике на способ оплаты
	$('div.payment.content___zuiFB').on('click', function() {

		// Удаляем класс подсветки у блока способов оплаты
		$('div.validationContainer___1-HhU').removeClass('error-error___9Zf3I');
		// Добавляем скрывающий класс к тексту ошибки блока способов оплаты
		$('div.errorMessage___6FseR').addClass('d-none');

		// У всех способов доставки удаляем класс выбора
		$('div.payment.content___zuiFB').removeClass('selected___1Wzux');
		// Выбираем способ доставки на который кликнули
		$(this).addClass('selected___1Wzux');
	});
	//---------------------------------------------------------------------------
	// Кнопка Продолжить в Оформлении заказа
	$('button#checkout').on('click', function() {






		// Получение вариантов доставки

alert('aaa');

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
		let delivery_method_id = $('div.delivery.selected___1Wzux').data('delivery-method');
		// Берем идентификатор способа оплаты
		let payment_method_id = $('div.payment.selected___1Wzux').data('payment-method');


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
				$('div.validationContainer___1-HhU').addClass('error-error___9Zf3I');
				// Удаляем скрывающий класс у текста ошибки блока способов оплаты
				$('div.errorMessage___6FseR').removeClass('d-none');

				// Добавляем к блоку оплаты класс трясучки
				$('div.payment.item___2awx9').addClass('shaking___2tWeJ');
				// Таймаут
				setTimeout(function() {

					// Убираем класс трясучки
					$('div.payment.item___2awx9').removeClass('shaking___2tWeJ');
				}, delayInMilliseconds);
			}
		}
		// Иначе ни один способ доставки не выбран
		else
		{
			// Добавляем к блоку способов доставки подсветку
			$('div.validationContainer___3bzKr').addClass('error-error___VQQ38');
			// Удаляем скрывающий класс у текста ошибки блока способов доставки
			$('div.errorMessage___8yQRe').removeClass('d-none');

			// Добавляем к блоку доставки класс трясучки
			$('div.delivery.item___2awx9').addClass('shaking___2tWeJ');
			// Таймаут
			setTimeout(function() {

				// Убираем класс трясучки
				$('div.delivery.item___2awx9').removeClass('shaking___2tWeJ');
			}, delayInMilliseconds);
		}
	});
	//---------------------------------------------------------------------------
	// Клик на позиции списка меню страницы Мои заказы
	$('button.menuItem___2NnCg').on('click', function() {

		// Берем идентификатор статуса заказа
		let status_id = $(this).data('status');


		// Simulate a mouse click:
		window.location.href = '?status=' + status_id;

		// Предотвращаем дальнейшее выполнение
//		return false;
	});
	//---------------------------------------------------------------------------

});







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
- pay


*/