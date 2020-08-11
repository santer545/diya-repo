
# Поехали!
## Gulp
Начнем с главного в нашей сборке.


# Структура проекта
После того, как мы разобрались с фундаментом нашего проекта, начнем делать первые шаги. Проверяем, установлены ли `node.js` и `npm`.

Не забудьте установить gulp: <code>npm install --save-dev gulp</code>

Последний шаг в установке проекта: <code>npm install</code>

# Первые шаги

## HTML

Все наши проблемы решает [Pug](https://pugjs.org/language/doctype.html). 


# Автоматизируем первую задачу
Установим плагин [gulp-pug](https://www.npmjs.com/package/gulp-pug) для компиляции наших шаблонов. Выполните в консоли команду: `npm i gulp-pug`
Создадим файл `pug2html.js` в папке `gulp/tasks`.

Теперь подключаем нашу задачу в файле `gulpfile.js`.

Еще добавим [gulp-w3c-html-validator](https://www.npmjs.com/package/gulp-w3c-html-validator), чтобы не было нелепых ошибок. Вы, наверное, догадались, что порядок подключения плагинов c помощью `pipe()` очень важен. То есть перед тем, как вызвать плагин `pug()` для компиляции, нужно сделать валидацию плагином `pugLinter()`, а плагин `gulp-w3c-html-validator` подключаем после `pug()`, потому что нам нужно валидировать скомпилированный `html`.

# Стили
Для стилей мы будем использовать [Scss](https://sass-lang.com/). Все дается по аналогии с задачей `pug2html`. Создаем новую папку `styles` и скачиваем нужные пакеты <code>npm install node-sass gulp-sass --save-dev</code>.
Дальше пишем задачу, как и делали раньше. Берем файлы, передаем в плагин и потом сохраняем результат.


Дальше мы добавим вспомогательные плагины: `npm i gulp-autoprefixer  gulp-shorthand gulp-clean-css gulp-sourcemaps stylelint gulp-stylelint stylelint-scss stylelint-config-standard-scss stylelint-config-standard stylelint-config-htmlacademy`



# JavaScript
Все делаем так же, как и с другими тасками, только подключаем другие плагины.
Установим сначала все необходимые зависимости `npm i gulp-babel @babel/core @babel/preset-env --save-dev`
и зависимости для [eslint](https://eslint.org/) `npm install eslint eslint-config-htmlacademy eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node --save-dev`
- [gulp-babel](https://www.npmjs.com/package/gulp-babel) [@babel/core](https://www.npmjs.com/package/@babel/core) [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - [babel](https://babeljs.io/) конвертирует ECMAScript 2015+ код в более старую версию


# Оптимизируем картинки, копируем шрифты, делаем svg-sprite
Устанавливаем плагины `npm i gulp-imageMinify gulp-svgstore`
Для картинок используется банальный код, который вы уже на данном этапе без проблем можете понять.

Шрифты мы просто копируем.


# Экономим время
Чтобы каждый раз не обновлять страницу при изменении файла, подключим [browser-sync](https://www.browsersync.io/).

Бывает такое, что сделал опечатку, сохранил код и сборка падает с ошибкой. Нужно снова перезапускать сборку, и со временем это может начать раздражать, поэтому установим `npm i gulp-plumber`.

Во время разработки мы будем создавать и удалять файлы. Так как у нас `live reload`, то созданные файлы автоматически попадут в `build`. Когда чуть позже мы решим удалить файл, то он останется в папке `build`, поэтому сделаем еще одну задачу `clean`, которая будет удалять папку. 

### Lighthouse

> [Lighthouse](https://github.com/GoogleChrome/lighthouse) - решение для веб-приложений и веб-страниц, которое собирает современные показатели производительности.

[gulp-npm-dist](https://www.npmjs.com/package/gulp-npm-dist) - очень хороший плагин, мне он нравится тем, что он не просто копирует всю папку модуля, а только нужные файлы. `README.md`, `LICENSE`, `.gitignore` и другие конфигурационные файлы не копируются.

Напишем еще несколько команд:

- `npm run start` - вместо `gulp`, привык, что любой проект у меня запускается этой командой
- `npm run build` - вместо `gulp build`, такая же ситуация, как в прошлом пункте
- `npm run lighthouse` - вместо `gulp build && gulp lighthouse`, сначала собираем проект, а потом уже тестируем
- `npm run test` - запуск разных линтеров, хорошей практикой будет запускать перед комитом


