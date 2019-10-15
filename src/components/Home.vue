<template>
<div class="home-brif">
  <v-card>
    <v-toolbar class="home-brif-header" flat color="primary" dark>
      <v-toolbar-title class="home-brif-title">Заполните Бриф по разработке сайта или необходимых услуг</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Landing Page
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Одностраничный Сайт
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Сайт Визитка
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Корпоративный Сайт
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Интернет Магазин
      </v-tab>
      <v-tab class="home-brif-tab">
        <v-icon class="home-brif-icon" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Уникальный Сайт
      </v-tab>
      <v-tab class="home-brif-tab-service">
        <v-icon class="home-brif-icon-service" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Продвижение сайта
      </v-tab>
      <v-tab class="home-brif-tab-service">
        <v-icon class="home-brif-icon-service" left>mdi-arrow-right-bold-circle-outline</v-icon>
        Контекстная Реклама
      </v-tab>
      <v-tab-item class="home-brif-item">
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-brif-item-h1">Бриф на создание Landing Page</v-toolbar-title>
            <p>
              Landing Page
            </p>
            <v-form @submit.prevent="addBrif" class="home-brif-item-form">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="firstname" :counter="10" label="Ваше имя" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="numberPhone" label="Ваш номер телефона" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="email" label="Ваш E-mail" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="company" label="Название компании" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-text-field v-model="companySite" label="Сайт вашей компании, если есть" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Область деятельности, направления бизнеса</div>
                    <v-textarea v-model="companyBissnes" label="Напишите, в какой сфере вы работаете, можно указать специфику и особенности" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Конкуренты</div>
                    <v-textarea v-model="companyCompetitors" label="Опишите ваших основных конкурентов, положительные и отрицательные стороны" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Ваши представительства</div>
                    <v-textarea v-model="companyFilials" label="Напишите в каких регионах вы работаете" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Сроки разработки</div>
                    <v-text-field v-model="developmentTimeline" label="Укажите желаемые сроки разработки, если сроки жестко ограничены - можно указать причину ограничения" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Бюджет</div>
                    <v-text-field v-model="companyBudget" label="Укажите планируемый бюджет на разработку" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Ответственное лицо</div>
                    <v-text-field v-model="companyPerson" label="Укажите контактные данные человека, который будет нести ответственность за разработку с вашей стороны" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-toolbar-title class="form-brif-title">Цели и функции сайта</v-toolbar-title>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Цели сайта</div>
                    <p class="form-text-p">Выберите одну или несколько целей, которые вы хотите достичь при помощи сайта</p>
                    <v-container id="website-goals" fluid>
                      <p>{{ websiteGoalsSelect }}</p>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Привлечение клиентов" value="Привлечение клиентов"></v-checkbox>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Повышение узнаваемости компании, улучшение имиджа" value="Повышение узнаваемости компании, улучшение имиджа"></v-checkbox>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Продажа товаров и услуг, через интернет" value="Продажа товаров и услуг, через интернет"></v-checkbox>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Информирование о проведении акций" value="Информирование о проведении акций"></v-checkbox>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Информирование и товарах и услугах" value="Информирование и товарах и услугах"></v-checkbox>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Информирование о компании" value="Информирование о компании"></v-checkbox>
                      <v-checkbox v-model="websiteGoalsSelect" id="websiteGoalsSelect-01" label="Размещение новостей компании" value="Размещение новостей компании"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Тип сайта</div>
                    <p class="form-text-p">Выберете тип сайта</p>
                    <v-container id="site-type" fluid>
                      <p>{{ siteType }}</p>
                      <v-checkbox v-model="siteType" label="Landing Page" value="Landing Page"></v-checkbox>
                      <v-checkbox v-model="siteType" label="Одностраничный Сайт" value="Одностраничный"></v-checkbox>
                      <v-checkbox v-model="siteType" label="Сайт Визитка" value="Сайт Визитка"></v-checkbox>
                      <v-checkbox v-model="siteType" label="Корпоративный Сайт" value="Корпоративный Сайт"></v-checkbox>
                      <v-checkbox v-model="siteType" label="Интернет Магазин" value="Интернет Магазин"></v-checkbox>
                      <v-checkbox v-model="siteType" label="Уникальный Сайт" value="Уникальный Сайт"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Сервисы для связи с посетителями сайта</div>
                    <p class="form-text-p">Выберите желаемые сервисы для связи с посетителями сайта</p>
                    <v-container id="services-for-contacting" fluid>
                      <p>{{ servicesForContacting }}</p>
                      <v-checkbox v-model="servicesForContacting" label="Форма обратной связи" value="Форма обратной связи"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Форма Обратный звонок" value="Форма Обратный звонок"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Вопрос-ответ" value="Вопрос-ответ"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Голосования" value="Голосования"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Отзывы" value="Отзывы"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Комментарии" value="Комментарии"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Онлайн-консультант" value="Онлайн-консультант"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Системы онлайн-бронирования" value="Системы онлайн-бронирования"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Подписки и email-рассылки" value="Подписки и email-рассылки"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Регистрация пользователей" value="Регистрация пользователей"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Личный кабинет" value="Личный кабинет"></v-checkbox>
                      <v-checkbox v-model="servicesForContacting" label="Оповещения по SMS" value="Оповещения по SMS"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Сервисы по продаже через интернет</div>
                    <p class="form-text-p">Отметьте функции, которыми должен обладать сайт для продаж в сети</p>
                    <v-container if="sales-services" fluid>
                      <p>{{ salesServices }}</p>
                      <v-checkbox v-model="salesServices" label="Рубрикатор" value="Рубрикатор"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Поиск по каталогу" value="Поиск по каталогу"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Фильтрация товаров" value="Фильтрация товаров"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Расширенное описание категорий или товаров" value="Расширенное описание категорий или товаров"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Добавление товаров в избранное" value="Добавление товаров в избранное"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Запрос цены по отдельным позициям" value="Запрос цены по отдельным позициям"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Сравнение товаров" value="Сравнение товаров"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Корзина" value="Корзина"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Расчет скидок" value="Расчет скидок"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Расчет стоимости доставки" value="Расчет стоимости доставки"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="История заказов пользователя" value="История заказов пользователя"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Уведомление клиентов о статусе заказов" value="Уведомление клиентов о статусе заказов"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Оплата онлайн" value="Оплата онлайн"></v-checkbox>
                      <v-checkbox v-model="salesServices" label="Автоматическое формирование счета для оплаты" value="Автоматическое формирование счета для оплаты"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Интеграции со сторонними сервисами и программами</div>
                    <p class="form-text-p">Укажите сервисы, с которыми необходимо интегрировать сайт</p>
                    <v-container id="integration-services" fluid>
                      <p>{{ integrationServices }}</p>
                      <v-checkbox v-model="integrationServices" label="Импорт прайса из Excel" value="Импорт прайса из Excel"></v-checkbox>
                      <v-checkbox v-model="integrationServices" label="Интеграция с 1С" value="Интеграция с 1С"></v-checkbox>
                      <v-checkbox v-model="integrationServices" label="Интеграция с корпоративной базой данных" value="Интеграция с корпоративной базой данных"></v-checkbox>
                      <v-checkbox v-model="integrationServices" label="Яндекс.Маркет" value="Яндекс.Маркет"></v-checkbox>
                      <v-checkbox v-model="integrationServices" label="Пром" value="Пром"></v-checkbox>
                      <v-checkbox v-model="integrationServices" label="Розетка" value="Розетка"></v-checkbox>
                      <v-checkbox v-model="integrationServices" label="Хотлайн" value="Хотлайн"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Языковые версии сайта</div>
                    <v-text-field v-model="languageSite" label="Нужны ли версии сайта на других языках, укажите языки" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Система управления сайтом</div>
                    <p class="form-text-p">Выберете желаемую систему управления сайтом</p>
                    <v-container id="cms" fluid>
                      <p>{{ cms }}</p>
                      <v-checkbox v-model="cms" label="WordPress (бесплатная)" value="WordPress"></v-checkbox>
                      <v-checkbox v-model="cms" label="OpenCart (бесплатная)" value="OpenCart"></v-checkbox>
                      <v-checkbox v-model="cms" label="Битрикс (платная)" value="Битрикс"></v-checkbox>
                      <v-checkbox v-model="cms" label="Joomla" value="Joomla"></v-checkbox>
                      <v-checkbox v-model="cms" label="Под заказ" value="Под заказ"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Нужна ли мобильная версия сайта или адаптивный дизайн</div>
                    <v-container id="mobile-vershin" fluid>
                      <p>{{ mobileVershin }}</p>
                      <v-checkbox v-model="mobileVershin" id="mobileVershin" label="Нет, не нужна" value="Нет, не нужна"></v-checkbox>
                      <v-checkbox v-model="mobileVershin" id="mobileVershin" label="Нужна мобильная версия сайта" value="Нужна мобильная версия сайта"></v-checkbox>
                      <v-checkbox v-model="mobileVershin" id="mobileVershin" label="Адаптивный дизайн" value="Адаптивный дизайн"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Другие цели, сервисы, функции и CMS</div>
                    <v-textarea v-model="otherGoals" label="Если вам необходимы другие сервисы и функции, у вас другие цели или CMS - укажите из здесь" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-toolbar-title class="form-brif-title">Структура сайта</v-toolbar-title>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Разделы сайта</div>
                    <v-textarea v-model="websiteSections" label="Укажите основные разделы сайта: о компании, каталог, новости и т.д." required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Навигация по сайту</div>
                    <v-textarea v-model="navSite" label="Какие меню должны присутствовать на сайте слева, справа, сверху, снизу. Какие пункты должны содержать" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Информационные блоки</div>
                    <v-textarea v-model="informationBlocks" label="Перечислите информационные блоки, которые должны присутствовать на главной и внутренних страницах" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-toolbar-title class="form-brif-title">Дизайн сайта</v-toolbar-title>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Примеры сайтов, дизайн которых вам нравится</div>
                    <v-textarea v-model="sampleSitesLike" label="Напишите адреса сайтов, дизайн которых вам нравится, укажите почему" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Примеры сайтов, дизайн которых вам не нравится</div>
                    <v-textarea v-model="sampleSitesNotLike" label="Напишите адреса сайтов, дизайн которых вам не нравится, укажите почему" required></v-textarea>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Какие элементы фирменного стиля существуют и могут быть использованы при разработке дизайна</div>
                    <v-container id="form-style" fluid>
                      <p>{{ formStyle }}</p>
                      <v-checkbox v-model="formStyle" label="Руководство по фирменному стилю" value="Руководство по фирменному стилю"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Логотип" value="Логотип"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Фирменные цвета" value="Фирменные цвета"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Фирменные шрифты" value="Фирменные шрифты"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Полиграфия" value="Полиграфия"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Фотографии" value="Фотографии"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Каталоги" value="Каталоги"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Буклеты" value="Буклеты"></v-checkbox>
                      <v-checkbox v-model="formStyle" label="Другое" value="Другое"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Настроение и ассоциации, которые должен вызвать дизайн сайта</div>
                    <v-container id="mood-associations" fluid>
                      <p>{{ moodAssociations }}</p>
                      <v-checkbox v-model="moodAssociations" label="Строгий корпоративный дизайн" value="Строгий корпоративный дизайн"></v-checkbox>
                      <v-checkbox v-model="moodAssociations" label="Яркий, броский дизайн" value="Яркий, броский дизайн"></v-checkbox>
                      <v-checkbox v-model="moodAssociations" label="Позитивный и веселый" value="Позитивный и веселый"></v-checkbox>
                      <v-checkbox v-model="moodAssociations" label="Дизайн насыщенный иллюстрациями/фотографиями" value="Дизайн насыщенный иллюстрациями/фотографиями"></v-checkbox>
                      <v-checkbox v-model="moodAssociations" label="Минималистичный дизайн. Упор на функциональность" value="Минималистичный дизайн. Упор на функциональность"></v-checkbox>
                      <v-checkbox v-model="moodAssociations" label="Другое" value="Другое"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="12">
                    <div class="form-title">Наличие фотографий и картинок для разработки дизайна</div>
                    <v-container id="availability-photos" fluid>
                      <p>{{ availabilityPhotos }}</p>
                      <v-checkbox v-model="availabilityPhotos" label="Есть" value="Есть"></v-checkbox>
                      <v-checkbox v-model="availabilityPhotos" label="Необходимо подобрать дизайнеру" value="Необходимо подобрать дизайнеру"></v-checkbox>
                      <v-checkbox v-model="availabilityPhotos" label="Необходима фотосессия" value="Необходима фотосессия"></v-checkbox>
                    </v-container>
                  </v-col>
                  <v-col cols="12" md="8">
                    <div class="form-title">Основные требования и пожелания по дизайну сайта</div>
                    <v-textarea v-model="requirementsDesign" label="Опишите требования и пожелания, можно написать любую информацию, которая может помочь нашему дизайнеру" required></v-textarea>
                  </v-col>
                </v-row>
                <v-col cols="12" md="12">
                  <v-toolbar-title class="form-brif-title">Контент и дополнительные услуги</v-toolbar-title>
                </v-col>
                <v-col cols="12" md="12">
                  <div class="form-title">Контент для сайта: тексты, переводы, фотографии</div>
                  <v-container id="content-site" fluid>
                    <p>{{ contentSite }}</p>
                    <v-checkbox v-model="contentSite" label="Уже готов" value="Уже готов"></v-checkbox>
                    <v-checkbox v-model="contentSite" label="Необходимы услуги копирайтера, рерайтера" value="Необходимы услуги копирайтера, рерайтера"></v-checkbox>
                    <v-checkbox v-model="contentSite" label="Необходим фотограф" value="Необходим фотограф"></v-checkbox>
                    <v-checkbox v-model="contentSite" label="Необходим переводчик" value="Необходим переводчик"></v-checkbox>
                  </v-container>
                </v-col>
                <v-col cols="12" md="12">
                  <div class="form-title">Дополнительные услуги и сервисы</div>
                  <v-container id="additional-services" fluid>
                    <p>{{ additionalServices }}</p>
                    <v-checkbox v-model="additionalServices" label="Наполнение контентом" value="Наполнение контентом"></v-checkbox>
                    <v-checkbox v-model="additionalServices" label="Техническая поддержка сайта" value="Техническая поддержка сайта"></v-checkbox>
                    <v-checkbox v-model="additionalServices" label="Ведение сайта (регулярное обновление контента)" value="Ведение сайта (регулярное обновление контента)"></v-checkbox>
                    <v-checkbox v-model="additionalServices" label="Контекстная реклама" value="Контекстная реклама"></v-checkbox>
                    <v-checkbox v-model="additionalServices" label="SEO-продвижение" value="SEO-продвижение"></v-checkbox>
                    <v-checkbox v-model="additionalServices" label="Разработка фирменного стиля" value="Разработка фирменного стиля"></v-checkbox>
                    <v-checkbox v-model="additionalServices" label="Разработка логотипа" value="Разработка логотипа"></v-checkbox>
                  </v-container>
                </v-col>
                <v-col cols="12" md="12">
                  <div class="form-title"></div>
                  <v-container fluid>
                    <v-checkbox label="Я даю согласие на обработку персональных данных, мы не собираем их и не передаем третим лицам. " value="John"></v-checkbox>
                  </v-container>
                </v-col>
              </v-container>
              <h2 v-show="isVisible"> Для отправки Брифа нажмите отправить</h2>
              <h2 v-show="!isVisible">Бриф отправлен</h2>
              <h2 v-show="!isVisible">Вернутсь на сайт</h2>
              <v-btn v-if="count > 3" color="success" fab x-large dark v-bind:disabled="isButtonDisabled" v-show="isVisible" @click.once="addBrif; isVisible = !isVisible">
                Add2
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф на создание Одностраничного сата</v-toolbar-title>
            <p>
              Одностраничный
            </p>
            <p class="mb-0">
              Одностраничный
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф на создание Сайта Визитки</v-toolbar-title>
            <p>
              Сайт Визитка
            </p>
            <p class="mb-0">
              Сайт Визитка
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф на создание Корпоративного Сайта</v-toolbar-title>
            <p>
              Корпоративный Сайт
            </p>
            <p class="mb-0">
              Корпоративный Сайт
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф на создание Интернет Магазина</v-toolbar-title>
            <p>
              Интернет Магазин
            </p>
            <p class="mb-0">
              Интернет Магазин
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф на создание Уникального Сайта</v-toolbar-title>
            <p>
              Уникальный
            </p>
            <p class="mb-0">
              Уникальный
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф по Продвижению сайта</v-toolbar-title>
            <p>
              Продвижение сайта
            </p>
            <p class="mb-0">
              Продвижение сайта
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <v-toolbar-title class="home-briа-item-h1">Бриф по Контекстной рекламы</v-toolbar-title>
            <p>
              Контекстная реклама
            </p>
            <p class="mb-0">
              Контекстная реклама
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>


</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isVisible: true,
      firstname: '',
      numberPhone: '',
      email: '',
      company: '',
      companySite: '',
      companyBissnes: '',
      companyCompetitors: '',
      companyFilials: '',
      developmentTimeline: '',
      companyBudget: '',
      companyPerson: '',
      languageSite: '',
      otherGoals: '',
      websiteSections: '',
      navSite: '',
      informationBlocks: '',
      sampleSitesLike: '',
      sampleSitesNotLike: '',
      requirementsDesign: '',
      websiteGoalsSelect: [],
      siteType: [],
      servicesForContacting: [],
      salesServices: [],
      integrationServices: [],
      cms: [],
      mobileVershin: [],
      moodAssociations: [],
      formStyle: [],
      contentSite: [],
      additionalServices: [],
      availabilityPhotos: [],
    }
  },
  computed:{
    count: function(){
      return (this.firstname.length), (this.company.length)

    }
  },
  methods: {
    addBrif() {
      console.log((this.firstname), (this.additionalServices), (this.numberPhone), );
    }
  },
}
</script>

<style>
@import "../assets/css/styles.min.css";
</style>
