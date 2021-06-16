function t704_onSuccess(t704_form) {
  var t704_inputsWrapper = t704_form.find('.t-form__inputsbox');
  var t704_inputsHeight = t704_inputsWrapper.height();
  var t704_inputsOffset = t704_inputsWrapper.offset().top;
  var t704_inputsBottom = t704_inputsHeight + t704_inputsOffset;
  var t704_targetOffset = t704_form.find('.t-form__successbox').offset().top;
  if ($(window).width() > 960) {
    var t704_target = t704_targetOffset - 200
  } else {
    var t704_target = t704_targetOffset - 100
  }
  if (t704_targetOffset > $(window).scrollTop() || ($(document).height() - t704_inputsBottom) < ($(window).height() - 100)) {
    t704_inputsWrapper.addClass('t704__inputsbox_hidden');
    setTimeout(function() {
      if ($(window).height() > $('.t-body').height()) {
        $('.t-tildalabel').animate({
          opacity: 0
        }, 50)
      }
    }, 300)
  } else {
    $('html, body').animate({
      scrollTop: t704_target
    }, 400);
    setTimeout(function() {
      t704_inputsWrapper.addClass('t704__inputsbox_hidden')
    }, 400)
  }
  var successurl = t704_form.data('success-url');
  if (successurl && successurl.length > 0) {
    setTimeout(function() {
      window.location.href = successurl
    }, 500)
  }
}

const params = new URLSearchParams(window.location.search);

const password = params.get('password');

$(document).ready(() => {
  const description = $('#description');
  const invite = $('#invite');
  const dresscode = $('#dresscode');
  const bottomText = $('#bottom-text');

  switch (+password) {
    case 1:
      description.text('Мы будем очень рады видеть вас рядом в этот особенный для нас день. Наша свадьба состоится 31 июля 2021 года!');

      invite.html(`<div class="t174__trow">
                <div class="t174__uptitle t-uptitle t-uptitle_md" style="" field="subtitle">
                  <div style="font-size: 18px;" data-customstyle="yes"><span style="font-size: 18px;">ПРИГЛАШЕНИЕ</span></div>
                </div>
              </div>
              <div class="t174__trow">
                <div class="t174__title t-title t-title_lg" style="" field="title">31 июля 2021 года</div>
              </div>
              <div class="t174__trow">
                <div class="t174__descr t-descr t-descr_lg t-opacity_50" style="" field="descr"><strong>Начало церемонии</strong><br /><br /><strong>— 14:30 —</strong><br /><br />Сбор гостей в 14:00 на базе отдыха Солнечный берег. Она находится в 20 километрах от Ярославля, в поселении Ивняково. Выездная регистрация начнется в 14:30. Дополнительно будет организован транспорт в 13:15 из двух точек: КЗЦ "Миллениум" и улица Калинина 31. Около базы есть бесплатная парковка для вашего личного транспорта.<br /><br /><br /><strong>Вечеринка</strong><br /><br /><strong>— 18:00 —</strong><br /><br />Открытая вечеринка пройдет на территории базы отдыха. Для всех организованы спальные места, чтобы отдохнуть после)<br />P.S. Если будет позволять погода, то есть места на лужайке.<br /><br /></div>
              </div>`);

      dresscode.html(`<div class="t472__title t-section__title t-title t-title_md t-margin_auto" field="title" style="font-size:42px;">Дресс код</div>
          <div class="t472__descr t-section__descr t-descr t-descr_xxl t-margin_auto" field="descr" style=""><span style="font-weight: 500;">Выездная регистрация </span><br /><br />На выездную регистрацию нужно постараться прийти красивыми. Цвета нашей свадьбы - пудровый розовый, зеленый, коричневый. Однако, вы можете выбрать любой цвет, в котором вам комфортно.<br /><br /><span style="font-weight: 500;">Вечеринка</span><br /><br />А здесь уже есть официальный дресс код, который нужно соблюсти, спортивный костюм. Просьба не выбирать белый и красный цвета для костюма. </div>`)

      bottomText.text(`Подтвердите, если сможете прийти. Также, если вы планируете остаться с ночевкой, сообщите нам об этом.

Подарок в конверте поможет нам осуществить мечту о свадебном путешествии. И пожалуйста, не дарите нам цветы, так как мы не успеем насладиться их красотой. Вместо этого мы будем рады бутылочке вина, которую вы можете украсить пожеланиями.
      
      `)

      break;
    case 2:
      description.text('Мы будем очень рады видеть вас рядом в этот особенный для нас день. Наша свадьба состоится 31 июля 2021 года!');

      invite.html(`<div class="t174__trow">
                <div class="t174__uptitle t-uptitle t-uptitle_md" style="" field="subtitle">
                  <div style="font-size: 18px;" data-customstyle="yes"><span style="font-size: 18px;">ПРИГЛАШЕНИЕ</span></div>
                </div>
              </div>
              <div class="t174__trow">
                <div class="t174__title t-title t-title_lg" style="" field="title">31 июля 2021 года</div>
              </div>
              <div class="t174__trow">
                <div class="t174__descr t-descr t-descr_lg t-opacity_50" style="" field="descr"><strong>Начало церемонии</strong><br /><br /><strong>— 14:00 —</strong><br /><br />Сбор гостей в 14:00 на базе отдыха Солнечный берег. Она находится в 20 километрах от Ярославля, в поселении Ивняково. Выездная регистрация начнется в 14:30. Дополнительно будет организован транспорт в 13:15 из двух точек: КЗЦ "Миллениум" и улица Калинина 31. Около базы есть бесплатная парковка для вашего личного транспорта.<br /><br /><br /><strong>Завершение</strong><br /><br /><strong>— 16:45 —</strong><br /><br />Официальная часть закончится в 16:45. Мы не планируем большого торжества с банкетом. Будем рады, если Вы разделите с нами эти несколько волшебных часов. В 17:00 будет организован транспорт от базы отдыха в город.<br /><br /></div>
              </div>`);

      dresscode.html(`<div class="t472__title t-section__title t-title t-title_md t-margin_auto" field="title" style="font-size:42px;">Дресс код</div>
          <div class="t472__descr t-section__descr t-descr t-descr_xxl t-margin_auto" field="descr" style=""><span style="font-weight: 500;">Выездная регистрация </span><br /><br />На выездную регистрацию нужно постараться прийти красивыми. Цвета нашей свадьбы - пудровый розовый, зеленый, коричневый. Однако, вы можете выбрать любой цвет, в котором вам комфортно.<br /><br /></div>`)

          bottomText.text(`Подтвердите, если сможете прийти. И уточните, как Вы будете добираться до базы отдыха, чтобы мы смогли забронировать для Вас место в трансфере.
          
          Подарок в конверте поможет нам осуществить мечту о свадебном путешествии. И пожалуйста, не дарите нам цветы, так как мы не успеем насладиться их красотой. Вместо этого мы будем рады бутылочке вина, которую вы можете украсить пожеланиями.
          
          `)
      break;
    case 3:
      description.text('Мы будем очень рады видеть вас рядом в этот особенный для нас день. Наша свадьба состоится 21 июля 2021 года!');

      invite.html(`<div class="t174__trow">
                <div class="t174__uptitle t-uptitle t-uptitle_md" style="" field="subtitle">
                  <div style="font-size: 18px;" data-customstyle="yes"><span style="font-size: 18px;">ПРИГЛАШЕНИЕ</span></div>
                </div>
              </div>
              <div class="t174__trow">
                <div class="t174__title t-title t-title_lg" style="" field="title">21 июля 2021 года</div>
              </div>
              <div class="t174__trow">
                <div class="t174__descr t-descr t-descr_lg t-opacity_50" style="" field="descr"><strong>Начало церемонии</strong><br /><br /><strong>— 14:00 —</strong><br /><br />Торжественная регистрация начнется в 14:00 в дворце бракосочетания №1. Он находится по адресу: город Санкт-Петербург, Английская набережная дом 28.<br /><br /><br /><strong>Прогулка на теплоходе</strong><br /><br /><strong>— 16:00 —</strong><br /><br />Торжество с банкетом пройдет на теплоходе. Будем кататься по рекам и каналам. Отплываем от Медного всадника, прибываем в 21:00 на набережную реки Мойки, рядом с Исаакиевским собором.<br /><br /></div>
              </div>`);

      dresscode.html(`<div class="t472__title t-section__title t-title t-title_md t-margin_auto" field="title" style="font-size:42px;">Дресс код</div>
          <div class="t472__descr t-section__descr t-descr t-descr_xxl t-margin_auto" field="descr" </span><br />Важно прийти красивыми. На нашей свадьбе нет определенной цветовой гаммы. Вы можете выбрать любой цвет, в котором вам комфортно.</div>`)

      bottomText.text('Напишите нам, сможете ли Вы присутствовать на нашем торжестве.')

      break;
    default:
      break;
  }
})
