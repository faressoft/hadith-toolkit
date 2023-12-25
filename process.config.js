/**
 * PM2 Configurations
 *
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

module.exports = {
  apps: [
    {
      name: 'QuranToolkit',
      script: 'app.js',
      cwd: __dirname,
      watch: true,
      ignore_watch: ['node_modules', '.git', 'tmp*'],
      watch_options: { usePolling: true },
      instances: 1,
      exec_mode: 'fork',
    },
  ],
};
