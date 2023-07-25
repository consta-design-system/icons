# Changelog

## v0.8.0 (25/07/2023)
Самое важное:

- Добавлена иконка `IconClear`.
- Корневой `css` класс анимированных иконок теперь такой же, как и в статичных.

---

- [fix(AnimateIconBase): fixed style prop](https://github.com/consta-design-system/icons/commit/b5841b6d080689b9a21e2afec24772068a89a8db) - [@gizeasy](https://github.com/gizeasy)
- [chore(deps): bump word-wrap from 1.2.3 to 1.2.4 (#23)](https://github.com/consta-design-system/icons/commit/945ff8198d00e0ff5a283689e7e7899fdd90504f) - [@dependabot](https://github.com/dependabot[bot])
- [feat(IconClear): add new Icon (#26)](https://github.com/consta-design-system/icons/commit/9b650dc33672b97181ea1edc6c15f8d47cc99c36) - [@N1MBER](https://github.com/N1MBER)
- [feat(AnimateIconBase): rename root css class (#25)](https://github.com/consta-design-system/icons/commit/78290d94553df11b862482c8ead884a49d3cbfa0) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.7.0 (14/07/2023)
Самое важное:
- добавлена иконка `IconInfoCircle`
- в иконки добавлено свойство `as`, для возможности указывать тэг родителя и все свойства относящиеся к этому тэгу

---

- [chore(deps-dev): bump stylelint from 10.1.0 to 15.10.1 (#21)](https://github.com/consta-design-system/icons/commit/a980cef6be3ea30125f5d26543c76defdc57932f) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [chore(deps-dev): bump semver from 7.3.7 to 7.5.2 (#18)](https://github.com/consta-design-system/icons/commit/827d5df86a1dde67809807088d39048d609d492e) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [feat(IconInfoCircle): added new icon (#22)](https://github.com/consta-design-system/icons/commit/02ad081a7d519814195532c22ecc42c12c6638f9) - [@N1MBER](https://github.com/N1MBER)
- [feat(Icons): add as prop (#19)](https://github.com/consta-design-system/icons/commit/d35d3c1bd65bd784ac82493069eb2dcb5d81667a) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.6.0 (06/07/2023)
Самое важное:
- Добавили новые иконки `IconAreaChart`, `IconWindow`, `IconDebug`

---

- [feat(Icons): added new icons ](https://github.com/consta-design-system/icons/commit/cc53a2004b25cc3eaa99342dba1ef8edd0d24915) - [@N1MBER](https://github.com/N1MBER)
- [docs: edit add icon (#17)](https://github.com/consta-design-system/icons/commit/ca7d814cfc438f5269dc5c145c50daea02873a5b) - [@gizeasy](https://github.com/gizeasy)
- [docs(standConfig): add figmaUrl (#14)](https://github.com/consta-design-system/icons/commit/8868975718321a975d407e442f7cc853d188246e) - [@gizeasy](https://github.com/gizeasy)
- [docs(AnimateIcon): review (#16)](https://github.com/consta-design-system/icons/commit/e7537434f0d61cf708b12168253e4434ef59be8a) - [@gizeasy](https://github.com/gizeasy)
- [refactor: types and imports](https://github.com/consta-design-system/icons/commit/a0e755dd6bf6f2c02d125bd9162c7db423d1c24b) - [@gizeasy](https://github.com/gizeasy)
- [chore: edit build config](https://github.com/consta-design-system/icons/commit/8e6e2d4f05bba6282e5010abdc34f19342609213) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.5.0 (07/06/2023)
Добавили функционал анимирования переходов иконок:
- `AnimateIconBase` - Компонент для создания анимированных трансформаций между не ограниченным количеством иконок.
- `AnimateIconSwitcher` - Компонент для создания анимированных трансформаций между двух иконок
- `withAnimateBaseHOC` - HOC для создания компонентов c анимированной трансформацией между не ограниченным количеством иконок.
- `withAnimateSwitcherHOC` - HOC для создания компонентов c анимированной трансформацией между двух иконок

---

- [feat(AnimateIcon): add components, hocs and providers for animated icons (#15)](https://github.com/consta-design-system/icons/commit/c63176e91aa4b39e02c933d7d56f3d825f7f89a0) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.4.2 (23/05/2023)
Запускать локальный сервер разработки и сборку пакетов теперь можно и на ОС Windows. 

---

- [chore: configure build for windows (#13)](https://github.com/consta-design-system/icons/commit/eaffa2b3cd22ad749c176c0c0037e97bb23c5960) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.4.1 (19/05/2023)
- [fix(IconSave): fix icon (#12)](https://github.com/consta-design-system/icons/commit/b80cfde20e8f3e015c1ed6aa9511784e91124476) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.4.0 (19/05/2023)
Самое важное:
- Добавили новые иконки `IconArrowFirst `, `IconArrowLast `, `IconArrowNext`, `IconArrowPrevious`, `IconArrowRedone`,  `IconArrowUndone`, `IconPrinterFilled`, `IconPrinterStroked `, `IconSlide `, `IconTree`

---

- [feat(Icons): add new icons (#11)](https://github.com/consta-design-system/icons/commit/7faf17efc3d3cd4e5887d26eb51c44108bff1615) - [@N1MBER](https://github.com/N1MBER)
- [docs: edit stand description](https://github.com/consta-design-system/icons/commit/9f22aaa7a976f4948df793226b276578a1034c16) - [@gizeasy](https://github.com/gizeasy)
- [chore(deps): bump decode-uri-component from 0.2.0 to 0.2.2 (#8)](https://github.com/consta-design-system/icons/commit/cda001373e78b69e772c501fd848f42bdf87572f) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [chore(deps): bump loader-utils from 2.0.2 to 2.0.4 (#9)](https://github.com/consta-design-system/icons/commit/ad233843766746273ac5b951198689903f75eacc) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [docs(icons): add aliases (#10)](https://github.com/consta-design-system/icons/commit/1d41d9f125af53c9780b8dd6b73cda4558ac86f7) - [@N1MBER](https://github.com/N1MBER)
- [chore: update @consta/stand](https://github.com/consta-design-system/icons/commit/1becc385e52a3469ac97da5ea4f5755755e7fb1a) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.3.0 (17/04/2023)
Добавили новые иконки: `IconFolderOpen`, `IconFolderClosed`, `IconVolumeUp` и `IconVolumeDown`

---

- [feat(Icons): add new icons (#7)](https://github.com/consta-design-system/icons/commit/f6b088fa86ad246e17966bbe62b57f55c1d0ae88) - [@N1MBER](https://github.com/N1MBER)
- [chore(deps-dev): bump webpack from 5.74.0 to 5.76.0 (#6)](https://github.com/consta-design-system/icons/commit/b7e405a128fd4f4924b6ea45f7dd09c00a73e842) - [@dependabot[bot]](https://github.com/dependabot[bot])

--------------------

## v0.2.0 (22/02/2023)
Добавили `IconHelmet` и `IconRoute`

---

- [feat(Icons): added IconHelmet and IconRoute (#5)](https://github.com/consta-design-system/icons/commit/14bbf92e085007fa26e88162fc06b878f27895a9) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.1.1 (25/01/2023)
- [fix(createIcon): fixed type](https://github.com/consta-design-system/icons/commit/f299b8dfc750b4f6f810552db1df413d8c53ae6f) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.1.0 (19/01/2023)
Самое важное:
- Добавили новые иконки

---

- [feat(Icons): add new icons (#4)](https://github.com/consta-design-system/icons/commit/562fdf0ca90d25dfebc73009a058790fd4862b47) - [@N1MBER](https://github.com/N1MBER)
- [chore(deps): update @consta/stand](https://github.com/consta-design-system/icons/commit/5356447222ec8cebd40354be5358cb5c287432f7) - [@gizeasy](https://github.com/gizeasy)
- [chore: edit config (#3)](https://github.com/consta-design-system/icons/commit/a6cfdab8e27583b8beb2f09d7ec7b6d7dbe2ad03) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.0.2 (07/12/2022)
Самое важное:
- Добавили новые иконки

---

- [feat(Icons): add new icons and a few icons with 'l' size (#2)](https://github.com/consta-design-system/icons/commit/6f7cbf484174710a6517db836be4d837212fa984) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.0.1 (02/11/2022)
Собрали все иконки в новую библиотеку, будем её развивать и поддерживать.
Здесь немного больше иконок, чем в `@consta/uikit` , если вам там чего-то не хватает, стоит проверить. 
Заодно подробно описали функцию для создания новых иконок — createIcon.
На всякий случай: иконки в `@consta/uikit` работают, как раньше.

---

- [feat(Icons): add IconProvider, optimize rendering and fix icons](https://github.com/consta-design-system/icons/commit/e081a6c4448c103b19cfca0de023bbebdbf1c7e0) - [@N1MBER](https://github.com/N1MBER)
- [chore(Icons): add builder and init files](https://github.com/consta-design-system/icons/commit/31d6f9e8e62cc3b397df73f41c467e4e83add93d) - [@N1MBER](https://github.com/N1MBER)
