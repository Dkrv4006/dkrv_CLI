module.exports = {
    name: 'ins',
    description: 'alo vc',
    run: async toolbox => {
        const {
            parameters,
            template: { generate },
            print: { info },
          } = toolbox

            toolbox.print.info('installing dependency...')


            await toolbox.packageManager.add('styled-components','@types/styled-components', {
                dev: true,
                dryRun: false,
                force: 'npm', //remove this to have the system determine which
              })

             toolbox.packageManager.hasYarn()
  


      info(`concluding`)
    },
  }
  