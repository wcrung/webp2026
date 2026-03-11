INSTALLED_APPS = [
  'rest_framework',
  'myapp',
]

import logging

logger = logging.getLogger(_name_)

def my_function():
    logger.debug('Something happened!')
    logger.info('Function is running.')
    logger.warning('Something may be wrong.')
    logger.error('Something went wrong')
    logger.critical('Serious problem!')
    logger.exception('Division failed!')
  
LOGGING = {
  'version': 1,
  'disable_existing_loggers': False,
  'handlers':{
    'file':{
      'level': 'DEBUG',
      'class': 'logging.FileHandler',
      'filename': 'debug.log',
    },
  },
  'loggers':{
    'django':{
      'handlers': ['file'],
      'level': 'DEBUG',
      'propagate': True,
    },
  },
}
