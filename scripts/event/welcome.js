const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.log.info(`
  ===================================================================
      #####  #    #  ####  #####  ######   ##   #####
      #    # #    # #    # #    # #       #  #  #    #
      #####  #    # #      #####  ###### #    # ######
      #    # #    # #  ### #    # #      ###### #  #
      #    # #    # #    # #    # #      #    # #   #
      #####   ####    ###  #####  ###### #    # #    #
                            ${version}
  ===================================================================
  主题链接：https://github.com/DuoSco/Hexo-theme-bugbear
  主题开发：王卓Sco`)
})