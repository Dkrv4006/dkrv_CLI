module.exports = {
  name: 'template',
  description: 'comcluidor',
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox


    await template.generate({
      template: 'app.js.ejs',
      target: `src/App.tsx`,
      props: {name: parameters.first},

    })

    await template.generate({
      template: 'styleglobal.js.ejs',
      target: `src/style/style.ts`,
      props: {name: parameters.first},

    })
    success(`Generated ${parameters.first}`)
  },
}
