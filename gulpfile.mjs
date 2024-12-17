import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import pngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminSvgo from 'imagemin-svgo';


export const minifyCss = () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
};

export const minifyJs = () => {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
};

export const minifyHtml = () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
};

export const optimizeImages = () => {
    return gulp.src('src/images/**/*', { encoding: false })
        .pipe(imagemin([
            imageminMozjpeg({quality: 75, progressive: true}),
            imageminSvgo(),
            pngquant({
                quality: [0.9, 1],
                speed: 1
            })
        ]))
        .pipe(gulp.dest('dist/images'));
};

export const serve = () => {
    browserSync.init({ server: './dist' });
    gulp.watch('src/css/*.css', gulp.series(minifyCss)).on('change', browserSync.reload);
    gulp.watch('src/js/*.js', gulp.series(minifyJs)).on('change', browserSync.reload);
    gulp.watch('src/*.html', gulp.series(minifyHtml)).on('change', browserSync.reload);
};

export default gulp.parallel(minifyCss, minifyJs, minifyHtml, optimizeImages, serve);

export const build = gulp.series(minifyCss, minifyJs, minifyHtml, optimizeImages);