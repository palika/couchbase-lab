# Couchbase lab

Couchbase labor példa projekt

## Első lépések

Első lépésként telepítsük a [Node.js](https://nodejs.org/en/)-t. Utána telepítsükk a projekt függőségeit:

```shell
npm install
```


## Az alkalmazás futtatása fejlesztői módban

A függőségek telepítése után, a dev npm parancs segítségével fejlesztői módban elindul az alkalmazás.

```shell
npm run dev
```

## Próbakör

Az alkalmazás indítása után nyissuk meg a böngészőnkben az alábbi oldalt: [http://localhost:3000](http://localhost:3000)
Egy alap üdvözlő üzenet, illetve egy link fogad minket, mely segítségével az alkalmazás REST API
dokumentációja fog megnyílni.

## Kód módosítása

Az alkalmazás módosításához csupán Node.js-re illetve egy szövegszerkesztőre lesz szükségünk.
A dev npm parancs futása után az alkalmazás figyelni fogja a fájlok változását, és amennyiben
módosul valamelyik fájl, újra fogja fordítani és tölteni automatikusan.

A kód módosítására alkalmas a jegyzettömb is, ajánlott fejlesztői környezetek azonban:
* IntelliJ IDEA(diák licensszel ingyenes)
* Webstorm(diák licensszel ingyenes)
* Visual Studio Code(teljesen ingyenes)

