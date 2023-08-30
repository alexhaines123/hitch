import { registerAs } from '@nestjs/config';

/**
 * Mongo database connection config
 */
export default registerAs('mongodb', () => {
  return {
    uri: 'mongodb://localhost/test',
  };
});
