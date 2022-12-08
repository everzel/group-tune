# EditorJS Stretch Tune
- added tunes to stretch block on the full width/screen
At the moment no additional options is supported

**Install**
`yarn add https://github.com/ScaleMeUp/editorjs-stretch-tune`

**Connect**
```js
import GroupTune from '@everzel/grouped-tune'
//...
new EditorJS({
    tools: {
        stretchTune: GroupTune,
        // apply for specific content block
        paragraph: {
            class: Paragraph,
            tunes: ['stretchTune'],
        },
        // or for any block
        tunes: ['stretchTune']
    },
})
```
