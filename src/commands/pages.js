module.exports = {
  name: 'pages',
  description: 'create pages ',
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    if(!parameters.first){
      error("Escreva o nome da sua page");
      return
    }


    await template.generate({
      template: 'page.js.ejs',
      target: `src/pages/${parameters.first}/index.tsx`,
      props: {name: parameters.first},

    })

    await template.generate({
      template: 'style.js.ejs',
      target: `src/pages/${parameters.first}/style.ts`,
      props: {name: parameters.first},

    })
    success(`Generated ${parameters.first}`)
  },
}
