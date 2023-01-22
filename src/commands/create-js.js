module.exports = {
  name: 'create-js',
  description: 'alo vc',
  run: async (toolbox) => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    if(!parameters.first){
      error("Escreva o nome do seu components");
      return
    }


    await template.generate({
      template: 'components-js.js.ejs',
      target: `src/components/${parameters.first}/index.js`,
      props: {name: parameters.first},

    })

    await template.generate({
      template: 'style-js.js.ejs',
      target: `src/components/${parameters.first}/style.css`,
      props: {name: parameters.first},

    })
    success(`Generated ${parameters.first}`)
  },
}
