import gulp from 'gulp';
import browserSync from 'browser-sync';

const {src, watch, series, parallel} = gulp;

// HTML

export const html = () => (
  src('start/*.html')
    .pipe(browserSync.stream())
)

// Styles

export const styles = () => (
  src('start/css/*.css')
    .pipe(browserSync.stream())
);

// Scripts

export const scripts = () => (
  src('start/js/*.js')
    .pipe(browserSync.stream())
);

// Browsersync

export const liveServer = () => {
  browserSync.init({
    server: {
      baseDir: 'start',
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
    },
    notify: false,
    open: false,
    online: true,
  });
  watch('start/*.html', html);
  watch('start/css/*.css', styles);
  watch('start/js/*.js', scripts);
};

// Default

export default series(
  parallel(
    html,
    styles,
    scripts,
  ),
  liveServer,
);
