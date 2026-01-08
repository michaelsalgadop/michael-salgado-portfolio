Componente Trans

Explicación breve:

- Es un componente React

- Vive en el paquete react-i18next

- Sirve para renderizar texto traducido

- Permite incrustar otros componentes React dentro del texto.

## Problema

Cuando un texto tiene links u otros componentes React, no puedo
traducirlo usando solo `t("key")`.

## Solución

Uso el componente <Trans />.

## Cómo funciona

1. El texto va en el JSON
2. El texto puede tener tags personalizados (<react>, <tailwind>, etc.)
3. En el componente React digo qué es cada tag
4. <Trans /> se encarga de unirlo todo

Accedemos al json de cada idioma, y pondremos un código como el siguiente:

translation.json:

"footer": {
"designed": "Diseñado libremente con <react>React</react> y
<tailwind>Tailwind CSS</tailwind> y programado en <vscode>Visual Studio Code
</vscode> por mí. Implementado con <netlify>Netlify</netlify>."
}

Dentro de la llave footer, podremos declarar por ejemplo la llave designed,
la cual le introduciremos un string tags, que luego en el Componente jsx que
lo utilizemos los programaremos para decirle que corresponde a cada tag.

AHORA, en el JSX que corresponda:

- Declaramos primero el tag Trans, el cual llevará:

  - i18nKey => la clave que tiene los tags en el archivo de traducciones.
    Ej: footer.designed => Diseñado libremente con <react>React</react> <= tag

  - components => Introduciremos los componentes que corresponden a cada tag(<react>).
    react: lo que corresponda al tag <react>React</react>:
    <UiLink
            urlLink="https://es.react.dev/"
            classLink="text-tertiary"
            isTargetBlank
    />

    EJ:
    <Trans
    i18nKey="footer.designed"
    components={{
          react: (
            <UiLink
              urlLink="https://es.react.dev/"
              classLink="text-tertiary"
              isTargetBlank
            />
          ),
        }}
    />

## PROBLEMA CUANDO USAMOS TRANS!!!!:

Si tenemos por ejemplo un desplegable que cambia los idiomas, si en el componente tenemos
unicamente el trans(osea no hay ninguna variable reactiva de idioma que re-renderize el componente), no veremos el texto traducido al nuevo idioma. Por ejemplo, el t de useTranslation de i18n si que vemos las traducciones al instante porque es una función que re-renderiza el componente, pero en este caso, Trans es un componente y nadie lo está re-renderizando.

## SOLUCIÓN:

1. Invocamos useTranslation y importamos i18n:

const { i18n } = useTranslation();

2. En el bloque superior de donde se encuentra Trans, por ejemplo, hacemos lo siguiente:

Ejemplo:

<p key={i18n.language}>

De esta forma, cuando cambie el language de i18n por medio del desplegable de idiomas,
este componente que contiene el Trans se re-renderizará, dando resultado a la traducción
esperada.
